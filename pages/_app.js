import '../styles/globals.css'
import Header from '../components/navbar'
import Quickstart from '../components/Quickstart'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return<>
  <Header></Header>
  <Component {...pageProps} />
  <Quickstart />
  <Footer />
  </> 
}

export default MyApp
