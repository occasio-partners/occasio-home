import React from 'react'

export default class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  static isErrorPage = true

  render () {
    return (
      <h1>
        {this.props.statusCode
          ? `Custom Error Page: An error ${this.props.statusCode} occurred on server`
          : 'Custom Error Page: An error occurred on client'}
      </h1>
    )
  }
}
