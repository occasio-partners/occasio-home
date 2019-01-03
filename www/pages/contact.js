import ContentBox from 'components/ContentBox'
import FadingComponent from 'components/FadingComponent'
import fetch from 'isomorphic-unfetch'
import Form from 'components/forms/Form'
import getConfig from 'next/config'
import Input from 'components/forms/Input'
import ProgressButton from 'components/ProgressButton'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const { RECAPTCHA_PUBLIC_KEY } = getConfig().publicRuntimeConfig

export default class Contact extends React.Component {
  state = {
    submitting: false,
    submitted: false,
    captchaCompleted: false,
    captchaResponse: null
  }

  onCaptchaCompleted = captchaResponse => this.setState({ captchaCompleted: true, captchaResponse })

  submitForm (data) {
    console.log('form submitting...')
    fetch(`/api/contact?response=${this.state.captchaResponse}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        this.setState({ submitted: true })
      }
    })
  }

  render () {
    return (
      <FadingComponent>
        <ContentBox>
          <Form>
            {({ validateForm, getPayload }) => (
              <form className='board-form' onSubmit={e => {
                e.preventDefault()
                validateForm() && this.submitForm(getPayload())
              }}>
                <h2>Contact Us</h2>
                <div>
                  <Input className='input' name='name' label='Name' required />
                  <Input name='email' label='Email' required />
                </div>
                <ReCAPTCHA
                  className='recaptcha'
                  sitekey={RECAPTCHA_PUBLIC_KEY}
                  onChange={this.onCaptchaCompleted}
                />
                <ProgressButton
                  formNoValidate
                  inProgress={this.state.submitting}
                  inProgressText='Submitting'
                  isDone={this.state.submitted}
                  isDoneText='Submitted'>
                      Submit
                </ProgressButton>
              </form>
            )}
          </Form>
        </ContentBox>
        <style jsx>{`
          h2 {
            font-size: 2em;
            margin: 0.5em;
          }
          .board-form {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          :global(.recaptcha) {
            margin: 1em;
          }
        `}</style>
      </FadingComponent>
    )
  }
}
