/* CHANGE WHEN DEPLOYING LIVE */
const BASE = 'https://occasio-partners.now.sh'

const url = require('url')
const querystring = require('querystring')
const fetch = require('isomorphic-unfetch')

const transporter = require('nodemailer').createTransport(
  require('nodemailer-sendgrid-transport')({
    auth: { api_key: process.env.SENDGRID_API_KEY }
  })
)

const sendEmail = ({ email, name, text }) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      from: 'postmaster@occasio-partners.com',
      to: 'marco.ellwanger@gmail.com',
      subject: `New message from ${name} <${email}>`,
      text,
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
    console.error('No ReCAPTCHA Response!')
    res.statusCode = 500
    res.end('Internal Server Error: No Captcha Token!')
  }
  if (method !== 'POST') {
    res.statusCode = 405
    res.end('Method Not Allowed: POST Only')
  }
  if (pathname !== '/api/contact') {
    res.statusCode = 400
    res.end('Bad Request: Malformed URL')
  }
  if (headers['content-type'] !== 'application/json') {
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
    const { email, name } = JSON.parse(Buffer.concat(body).toString())

    fetch(BASE + `/api/captcha?response=${captchaResponse}`)
      .then(r => {
        if (r.ok) return r.json()
        throw new Error('failed to verify humanity')
      })
      .then(({ verified }) => {
        if (verified) {
          sendEmail(email, name, 'TEST')
            .then(() => {
              console.log('Success, email sent!')
              res.statusCode = 200
              res.end('Success, email sent!')
            })
            .catch(err => {
              console.log('Failed to send email:', err)
              throw new Error('failed to send email')
            })
        } else {
          throw new Error('failed to verify humanity')
        }
      })
      .catch(err => {
        console.log('Failed to verify humanity:', err)
        res.statusCode = 500
        res.end('Internal Server Error: ', err.message)
      })
  })
}
