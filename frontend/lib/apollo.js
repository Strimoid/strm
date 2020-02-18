import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from "phoenix";
import fetch from 'isomorphic-unfetch';
import Config from '../config';

function getAbsintheLink() {
    if (!process.browser) return null;

    const phoenixSocket = new PhoenixSocket(Config.wsUri)
    return createAbsintheSocketLink(AbsintheSocket.create(phoenixSocket))
}

export default function createApolloClient(token) {
    const absintheLink = getAbsintheLink()

    const errorHandler = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                ),
            );
        if (networkError) console.log(`[Network error]: ${JSON.stringify(networkError)}`);
    })

    const httpLink = new HttpLink({
        uri: Config.apiUri,
        credentials: 'same-origin',
        fetch: !process.browser && fetch,
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    })

    return new ApolloClient({
        link: ApolloLink.from([errorHandler, absintheLink ? absintheLink : httpLink]),
        cache: new InMemoryCache()
    });
};