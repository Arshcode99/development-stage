import React from 'react'
import styles from '../styles/careers.module.css'
import Image from 'next/image'
import NextImg from '../public/facebook-community.png'
import NextImg4 from '../public/telegram.png'
import NextImg5 from '../public/insta.png'
import NextImg6 from '../public/linkdin.png'
import NextImg7 from '../public/whatsapp.png'
import NextImgdiff from '../public/Graphics3.png'

const Community = () => {
  return (
    <>
    <section className={styles.Careers}>
    <div className={styles.twocol}>
      <div className={styles.left}>
      <h1>New Updates About React.js Everyday!</h1>
    <p>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
    <button className={styles.btn}>Explore</button> 
      </div>
      <div className={styles.right}>
        <Image src={NextImgdiff} className={styles.NextImgdiff} alt='Next POwerd'/>
      </div>
      </div>  
    </section> 
    <section className={styles.Careersnext}>
    <h1>Our Community will Help you in Your Journey!</h1>
    <p>May be you stuck in a problem and not able to find the solution, RIGHT? <br /> Don't Worry! We have our Big Community To Help You in every problems and grab your hand for your Ideas.</p>
      <div className={styles.twocol}>
      <div className={styles.left}>
      <h1 className={styles.block}>Instagram Community!</h1>
    <p className={styles.block}>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
    <button className={styles.btn}>Join</button> 
      </div>
      <div className={styles.right}>
        <Image src={NextImg5} className={styles.NextImgDex} alt='Next POwerd'/>
      </div>
      </div>
      <div className={styles.twocol}>
      <div className={styles.left}>
      <h1 className={styles.block}>Facebook Community!</h1>
    <p className={styles.block}>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
    <button className={styles.btn}>Join</button> 
      </div>
      <div className={styles.right}>
        <Image src={NextImg} className={styles.NextImgDex} alt='Next POwerd'/>
      </div>
      </div>
      <div className={styles.twocol}>
      <div className={styles.left}>
      <h1 className={styles.block}>Telegram Community!</h1>
    <p className={styles.block}>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
    <button className={styles.btn}>Join</button> 
      </div>
      <div className={styles.right}>
        <Image src={NextImg4} className={styles.NextImgDex} alt='Next POwerd'/>
      </div>
      </div>
      <div className={styles.twocol}>
      <div className={styles.left}>
      <h1 className={styles.block}>Linkdin Community!</h1>
    <p className={styles.block}>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
    <button className={styles.btn}>Join</button> 
      </div>
      <div className={styles.right}>
        <Image src={NextImg6} className={styles.NextImgDex} alt='Next POwerd'/>
      </div>
      </div>
      <div className={styles.twocol}>
      <div className={styles.left}>
      <h1 className={styles.block}>whatsapp Community!</h1>
    <p className={styles.block}>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
    <button className={styles.btn}>Join</button> 
      </div>
      <div className={styles.right}>
        <Image src={NextImg7} className={styles.NextImgDex} alt='Next POwerd'/>
      </div>
      </div>
    </section>
    </>
  )
}

export default Community
