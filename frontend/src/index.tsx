import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';

import './index.css';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://click-api.herokuapp.com',
  cache: new InMemoryCache({ dataIdFromObject: (object) => object.id }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
