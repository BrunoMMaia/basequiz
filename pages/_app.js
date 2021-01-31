import { createGlobalStyle, ThemeProvider } from 'styled-components'
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

  //deixa branco o começo
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
`

//atribui o tema configurado direto no tela.
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      
      <ThemeProvider theme={theme}>
      <GlobalStyle />  
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
