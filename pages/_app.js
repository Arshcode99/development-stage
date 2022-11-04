import '../styles/globals.css'
import Header from '../components/navbar'
import Bottom from '../components/bottom';

function MyApp({ Component, pageProps }) {
  return<>
  <Header></Header>
  <Component {...pageProps} />
  <Bottom/>
  </> 
}

export default MyApp
