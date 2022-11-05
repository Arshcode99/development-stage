import '../styles/globals.css'
import Header from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return<>
  <Header></Header>
  <Component {...pageProps} />
  </> 
}

export default MyApp
