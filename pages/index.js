import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import FlipCountdown from '@rumess/react-flip-countdown';


export default function Home() {
  //Logic For Our CountDown Timer:
  //---------------------------------
  return (
    <>
    {/* Our Head Components and CDN Links  */}
    <Head>
        <title>Reactjsofficial | Become a Expert React Dev</title>
        <meta name="description" content="Reactjsofficial | Become a Expert React Dev | Reactjsofficial.com" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      {/* Main Home Page Starts  */}
      <section className={styles.home}>
        <div className={styles.twocol}>
          <div className={styles.leftcol}>
            <div className={styles.deem}>10% OFF FOR FIRST 100 STUDENTS</div>
            <div className={styles.h3}><Typewriter options={{
                strings: ['Welcome To Reactjsofficial', 'Chasing Jobs?', 'Let Us Help You With Our React Traning Course!'],
                autoStart: true,
                loop: true,}} /></div>
            <div className={styles.h1}>Become A React.js Developer!</div>
            <div className={styles.p}>Personalized Training - Guidance from top-notch faculities - job Assistance - Internship Programs - Enhance
Skillsets Land a job of 22+ LPA Helped 1000+ Students and many more to go...</div>
            <button className={styles.btn}>Know More</button>
          </div>
          <div className={styles.rightcol}>
          <div className={styles.countdowner}>
            <h2 className={styles.countdowntext}>Hurry Up! Registration Closing In</h2>
            <FlipCountdown
            hideYear
            hideMonth
            theme='dark' // Options (Default: dark): dark, light.
            size='medium' // Options (Default: medium): large, medium, small, extra-small.
                endAt={'2022-12-12 01:26:58'} // Date/Time
            />
            </div>
          </div>
        </div>
      </section>
      {/* Main Home Page Ends  */}
      {/* ============================================ */}
      {/* Main Training Page Starts  */}
      <section className={styles.tainingabout}>
        <div className={styles.trainingaboutmaincontainer}>
          <div className={styles.leftcol2}>
            <div className={styles.deem1}>About Our Remote Training</div>
            <div className={styles.h4}>Develop your Skills, Shine Your Life</div>
            <p>Learn Advanced React Concepts With Amazing Real World Problems.</p>
            <button className={styles.btnwithback}>Read More</button>
          </div>
          <div className={styles.rightcol2}>
        <div className={styles.text}>A program for everyone to master in frontend development. You definitely love to learn how professionals work on a real job. You will kick start your journey from very fundamentals, receive support from our mentors and huge community. The best way to learn with hands-on labs, practical projects, and community - done right from your browser. Build software projects like the top 1% developers and learn all the skills you need to land the best frontend developer jobs.</div>
          </div>
        </div>
        <div className={styles.benifits}>
          <div className={styles.card}>
            <h1>90%</h1>
            <p>Placed within 6 months</p>
          </div>
          <div className={styles.card}>
            <h1>200+</h1>
            <p>hiring companies</p>
          </div>
          <div className={styles.card}>
            <h1>20LPA+</h1>
            <p>average dreamjob CTC</p>
          </div>
          <div className={styles.card}>
            <h1>92%</h1>
            <p>average salary hike</p>
          </div>

        </div>
      </section>
    </>
  )
}
