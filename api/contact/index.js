const transporter = require('nodemailer').createTransport(
  require('nodemailer-sendgrid-transport')({
    auth: { api_key: process.env.SENDGRID_API_KEY }
  })
)

const sendEmail = ({ email, name, text }) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      from: `${name} <${email}>`,
      to: 'marco.ellwanger@gmail.com',
      subject: `New message from ${name} <${email}>`,
      text,
      replyTo: `${name} <${email}>`
    }, (error, info) => error ? reject(error) : resolve(info))
  })
}

// This is express-y, convert to raw Node for it to work
export default (req, res) => {
  const { email, name } = req.body
  console.log(req.body)
  sendEmail(email, name, 'TEST').then(() => {
    console.log('success')
    res.send('success')
  }).catch((error) => {
    console.log('failed', error)
    res.send('badddd')
  })
}
