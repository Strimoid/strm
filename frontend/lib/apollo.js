import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { from, split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities'
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from "phoenix";
import fetch from 'isomorphic-unfetch';
import Config from '../config';

const errorHandler = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    if (networkError) console.log(`[Network error]: ${JSON.stringify(networkError)}`);
})

function createLink(token) {
    const httpLink = new HttpLink({
        uri: Config.apiUri,
        credentials: 'same-origin',
        fetch: !process.browser && fetch,
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    })

    if (!process.browser) return httpLink;

    const phoenixSocket = new PhoenixSocket(Config.wsUri)
    const wsLink = createAbsintheSocketLink(AbsintheSocket.create(phoenixSocket))

    return split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink
    )
}

export default function createApolloClient(token) {
    return new ApolloClient({
        link: from([errorHandler, createLink(token)]),
        cache: new InMemoryCache()
    });
};