import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css'

const apoloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={apoloClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
)
