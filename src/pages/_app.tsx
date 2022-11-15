import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global';
import Header from '../components/Header';
import { Contexto } from '../context/Context'; 
function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Contexto>
  <Header/>
  <GlobalStyles/>
  <Component {...pageProps} />
  </Contexto>
  </>
  )
}

export default App
