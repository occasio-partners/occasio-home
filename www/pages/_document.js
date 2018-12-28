import Document, { Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

const { ANALYTICS_TOKEN } = getConfig().publicRuntimeConfig

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='description' content='Occasio Partners LLC' />
          <meta name='theme-color' content='#317EFB' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='preconnect' href='https://www.google-analytics.com' />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_TOKEN}`} />
          <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ANALYTICS_TOKEN}');`
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
