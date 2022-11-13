import '../styles/globals.css'
import Header from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return<>
  {/* Our Head Components and CDN Links  */}
  <Head>
        <title>Reactjsofficial | Become a Expert React Dev</title>
        <meta name="description" content="Reactjsofficial | Become a Expert React Dev | Reactjsofficial.com" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
  <Header></Header>
  <Component {...pageProps} />
  <Footer />
  </> 
}

export default MyApp
