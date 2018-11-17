const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const mailer = require('./mailer')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/api/contact', (req, res) => {
    const { email, name } = req.body
    console.log(req.body)
    mailer.send(email, name, "TEST").then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('badddd')
    })
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})
