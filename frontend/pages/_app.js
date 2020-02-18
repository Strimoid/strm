import '../css/styles.css'

import App from 'next/app'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'isomorphic-unfetch'
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl'
import cookies from 'next-cookies'
import Config from '../config'

const createClient = token => new ApolloClient({
  link: new HttpLink({
    uri: Config.apiUri,
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch: !process.browser && fetch,
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }),
  cache: new InMemoryCache()
})

const intlCache = createIntlCache()

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx
    const { locale, messages } = req || window.__NEXT_DATA__.props
    const { token } = cookies(ctx)

    return { pageProps, locale, messages, token }
  }

  render () {
    const { Component, pageProps, locale, messages, token } = this.props

    const intl = createIntl(
      {
        locale,
        messages
      },
      intlCache
    )

    return (
      <RawIntlProvider value={intl}>
        <ApolloProvider client={createClient(token)}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RawIntlProvider>
    )
  }
}
