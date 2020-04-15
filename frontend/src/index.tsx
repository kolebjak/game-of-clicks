import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';

import './index.css';

import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


const wsLink = new WebSocketLink({
  uri: process.env.NODE_ENV === 'development'
    ? 'ws://localhost:3000/graphql'
    : 'ws://click-api.herokuapp.com/graphql',
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://click-api.herokuapp.com',
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache({ dataIdFromObject: (object) => object.id }),
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
