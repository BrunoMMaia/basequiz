/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import db from '../db.json';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  
  /*New styles*/
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;

  color: ${({ theme }) => theme.colors.contrastText};
}
html, body{
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

// atribui o tema configurado direto no tela.
const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
