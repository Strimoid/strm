import Document, { Head, Main, NextScript } from 'next/document'

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document {
  static async getInitialProps (context) {
    const props = await super.getInitialProps(context)
    const {
      req: { locale }
    } = context
    return {
      ...props,
      locale
    }
  }

  render () {
    return (
      <html>
        <Head />
        <body className='bg-gray-100'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
