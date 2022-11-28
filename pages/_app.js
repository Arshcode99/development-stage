import '../styles/globals.css'
import Header from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'
import { useState } from 'react'
import Script from 'next/script';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'




function MyApp({ Component, pageProps }) {
  const [progress,setProgress] = useState(0);
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  });
  return<>
  {/* Our Head Components and CDN Links  */}
  <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
  <Head>
        <title>Reactjsofficial | Become a Expert React Dev</title>
        <meta name="description" content="Reactjsofficial | Become a Expert React Dev | Reactjsofficial.com" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"></link>
  </Head>
  <Header></Header>
  <LoadingBar
  color='#ff3000' 
  height={6}
  transitionTime={30}
  continousStart={7}
  progress={progress}
  onLoaderFinished={() => setProgress(0)} 
  loaderSpeed={9000} />
  <Component {...pageProps} />
  <Footer />
  </> 
}

export default MyApp
