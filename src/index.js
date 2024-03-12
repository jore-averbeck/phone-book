import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import  {createTheme, ThemeProvider}  from "@mui/material";

import App from './App.js';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#211e78',
    },
    secondary: {
      main: '#cc7a16',
    },
    third: {
      main: '#23b8fc',
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>
);
