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
            onChange={this.handleChange}
            disabled={this.state.submitted} />
          <input name='email' label='Email' placeholder='Email' type='email' required
            value={this.state.email}
            onChange={this.handleChange}
            disabled={this.state.submitted} />
          <textarea rows='6' name='message' label='Message' placeholder='Type message here...' required
            value={this.state.message}
            onChange={this.handleChange}
            disabled={this.state.submitted} />
          <input className='submit-button' type='submit'
            value={this.state.submitButton}
            disabled={this.state.submitted} />
        </form>
        <Reaptcha
          ref={el => { this.captcha = el }}
          sitekey={RECAPTCHA_PUBLIC_KEY}
          onVerify={this.onVerify}
          size='invisible' />
        <style jsx>{`
          .submit-button:disabled, .submit-button:disabled:hover {
            background: lightseagreen;
            font-weight: bold;
            color: black;
          }
          input:disabled, textarea:disabled, input:disabled:hover, textarea:disabled:hover {
            background: lightgrey;
          }
          input:disabled:-webkit-autofill {
            -webkit-box-shadow: inset 0 0 0px 9999px lightgrey;
          }
          h2 {
            font-size: 2em;
            margin: 0.5em;
            display: none;
          }
          form {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          input, textarea {
            width: 100%;
            padding: 1em;
            margin: 0;
            margin-bottom: 0.6em;
            background: aliceblue;
            border: none;
            border-radius: 0.15em;
            font-size: 1em;
          }
          input:-webkit-autofill {
            -webkit-box-shadow: inset 0 0 0px 9999px white;
          }
          input:last-child {
            margin-bottom: 0;
          }
          textarea:hover, textarea:focus, input:hover, input:focus {
            background: floralwhite;
          }
          textarea:focus, input:focus {
            outline: 1px solid rgba(38, 34, 98, 0.75);
            outline-offset: -4px;
          }
          @media screen and (min-width: 600px) {
            input, textarea {
              margin-bottom: 1em;
              max-width: 30em;
            }
            form {
              margin: 2vmax 0;
            }
          }
        `}</style>
      </FadingBox>
    )
  }
}
