import '../css/styles.css'

import App from 'next/app'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// import { IntlProvider } from 'react-intl';
import fetch from 'isomorphic-unfetch';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl'
import Config from '../config'

const client = new ApolloClient({
  link: new HttpLink({
    uri: Config.apiUri,
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch: !process.browser && fetch
  }),
  cache: new InMemoryCache()
});

const intlCache = createIntlCache()

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx
    const { locale, messages } = req || window.__NEXT_DATA__.props

    return { pageProps, locale, messages }
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props

    const intl = createIntl(
      {
        locale,
        messages,
      },
      intlCache
    )

    return (
      <RawIntlProvider value={intl}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RawIntlProvider>
    )
  }
}

/*
export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale={navigator.language}>
        <Component {...pageProps} />
      </IntlProvider>
    </ApolloProvider>
  )
}

*/