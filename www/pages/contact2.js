import React from 'react'
import fetch from 'isomorphic-unfetch'

import FadingComponent from 'components/FadingComponent'
import ProgressButton from 'components/progressbutton'

import Form from 'components/forms/Form'
import Input from 'components/forms/Input'

class Contact2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false
    }
  }
  submitForm (data) {
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
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
        <div className='box3-container'>
          <div className='box3-bg' />
          <div className='box3'>
            <Form>
              {({ validateForm, getPayload }) => {
                return (
                  <form className='board-form' onSubmit={e => {
                    e.preventDefault()
                    validateForm() && this.submitForm(getPayload())
                  }}>
                    <h2>Contact</h2>
                    <div className='f fw grid-row--s'>
                      <div className='mb1 pb05'>
                        <Input name='name' label='Name' required />
                      </div>
                      <div className='mb1 pb05'>
                        <Input name='email' label='Email' required />
                      </div>
                    </div>
                    <ProgressButton
                      className='button green'
                      formNoValidate
                      inProgress={this.state.submitting}
                      inProgressText='Submitting'
                      isDone={this.state.submitted}
                      isDoneText='Submitted'>
                      Submit Form
                    </ProgressButton>
                  </form>
                )
              }}
            </Form>
          </div>
        </div>
      </FadingComponent>
    )
  }
}

export default Contact2