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
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#317EFB' />
          <meta name='msapplication-TileColor' content='#317EFB' />
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
