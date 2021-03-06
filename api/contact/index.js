/* CHANGE IN NOW.JSON WHEN DEPLOYING LIVE TO PRODUCTION */
const BASE = process.env.BASE_URL

const url = require('url')
const querystring = require('querystring')
const fetch = require('isomorphic-unfetch')

const transporter = require('nodemailer').createTransport(
  require('nodemailer-sendgrid-transport')({
    auth: { api_key: process.env.SENDGRID_API_KEY }
  })
)

const sendEmail = ({ name, email, text }) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      from: 'postmaster@occasio-partners.com',
      to: 'marco.ellwanger@gmail.com,info@occasio-partners.com',
      subject: `New message from ${name} <${email}>`,
      html: `<p>${text}</p>`,
      replyTo: `${name} <${email}>`
    }, (error, info) => error ? reject(error) : resolve(info))
  })
}

module.exports = (req, res) => {
  const { method, headers } = req
  const { pathname, query } = url.parse(req.url)
  const captchaResponse = querystring.parse(query).response || false
  let body = []

  if (!captchaResponse) {
    console.error('No Captcha Token!')
    res.statusCode = 500
    res.end('Internal Server Error: No Captcha Token!')
  }
  if (method !== 'POST') {
    console.error('Method Not Allowed: POST Only')
    res.statusCode = 405
    res.end('Method Not Allowed: POST Only')
  }
  if (pathname !== '/api/contact') {
    console.error('Bad Request: Malformed URL')
    res.statusCode = 400
    res.end('Bad Request: Malformed URL')
  }
  if (headers['content-type'] !== 'application/json') {
    console.error('Bad Request: content-type must be "application/json"')
    res.statusCode = 400
    res.end('Bad Request: content-type must be "application/json"')
  }

  res.on('error', err => { console.error(err) })

  req.on('error', err => {
    console.error(err)
    res.statusCode = 400
    res.end('Bad Request')
  }).on('data', chunk => {
    body.push(chunk)
  }).on('end', () => {
    const { name, email, text } = JSON.parse(Buffer.concat(body).toString())

    fetch(BASE + `/api/captcha?response=${captchaResponse}`)
      .then(r => {
        if (r.ok) return r.json()
        throw new Error('failed to verify humanity')
      })
      .then(({ verified }) => {
        if (verified) {
          sendEmail({ name, email, text })
            .then(() => {
              console.log('Success, email sent!')
              res.statusCode = 200
              res.end('Success, email sent!')
            })
            .catch(err => {
              console.error(err)
              res.statusCode = 500
              res.end('Internal Server Error: ' + err.message)
            })
        } else {
          throw new Error('failed to verify humanity')
        }
      })
      .catch(err => {
        console.error(err)
        res.statusCode = 500
        res.end('Internal Server Error: ' + err.message)
      })
  })
}
