import App, { Container } from 'next/app'
import Layout from 'components/Layout'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return Component.isErrorPage
      ? <Container>
        <Component {...pageProps} />
      </Container>
      : <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
  }
}
