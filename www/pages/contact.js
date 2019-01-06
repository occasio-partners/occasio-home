import FadingBox from 'components/FadingBox'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import React from 'react'
import Reaptcha from 'reaptcha'

const { RECAPTCHA_PUBLIC_KEY } = getConfig().publicRuntimeConfig

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submitted: false,
      submitButton: 'SUBMIT',
      captchaCompleted: false,
      captchaResponse: null,
      name: '',
      email: '',
      message: ''
    }
    this.captcha = null
  }

  handleChange = e => { this.setState({ [e.target.name]: e.target.value }) }

  handleSubmit = e => {
    e.preventDefault()
    this.captcha.execute()
  }

  onVerify = captchaResponse => {
    console.log('captcha: ', captchaResponse)
    this.setState({ captchaCompleted: true, captchaResponse })
    fetch(`/api/contact?response=${captchaResponse}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        text: this.state.message })
    }).then(res => {
      if (res.status === 200) {
        this.setState({ submitted: true, submitButton: 'SUBMITTED' })
      }
    }).catch(err => {
      console.log('fetch failure: ', err)
    })
  }

  render () {
    return (
      <FadingBox>
        <form onSubmit={this.handleSubmit}>
          <h2>Contact Us</h2>
          <input name='name' label='Name' placeholder='Name' type='text' required
            value={this.state.name}
            onChange={this.handleChange} />
          <input name='email' label='Email' placeholder='Email' type='email' required
            value={this.state.email}
            onChange={this.handleChange} />
          <textarea rows='6' name='message' label='Message' placeholder='Type message here...' required
            value={this.state.message}
            onChange={this.handleChange} />
          <input type='submit' value={this.state.submitButton} disabled={this.state.submitted} />
        </form>
        <Reaptcha
          ref={el => { this.captcha = el }}
          sitekey={RECAPTCHA_PUBLIC_KEY}
          onVerify={this.onVerify}
          size='invisible' />
        <style jsx>{`
          h2 {
            font-size: 2em;
            margin: 0.5em;
          }
          form {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          input, textarea {
            width: 301px;
            padding: 1em;
            margin: 1em;
            background: lightgrey;
            border: none;
            font-size: 1em;
          }
          textarea:hover, textarea:focus, input:hover, input:focus {
            background: darkgrey;
          }
          textarea:focus, input:focus {
            outline: 1px solid grey;
            outline-offset: -4px;
          }
        `}</style>
      </FadingBox>
    )
  }
}
