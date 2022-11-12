import '../styles/globals.css'
import Header from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return<>
  <Header></Header>
  <Component {...pageProps} />
  <Footer />
  </> 
}

export default MyApp
