import React from 'react'
import styles from '../styles/careers.module.css'
import Image from 'next/image'
import NextImg from '../public/demo3.svg'
import NextImg4 from '../public/demo4.svg'
import NextImg5 from '../public/demo5.svg'

const Community = () => {
  return (
    <>
    <section className={styles.Careers}>
    <h1>New Updates About React.js Everyday!</h1>
    <p>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
    <button className={styles.btn}>Explore</button>   
    </section> 
    <section className={styles.Careersnext}>
    <h1>Our Community will Help you in Your Journey!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum nemo <br /> nostrum expedita! Minima enim, quae beatae sapiente iste, quidem fugiat aliquid, ad sunt necessitatibus aliquam. Doloremque veniam mollitia eligendi.</p>
      <div className={styles.threecol}>
      <div className={styles.instagram}>
        <Image src={NextImg} className={styles.NextImg} alt="Instagram" />
        <h1>Instagram Community</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className={styles.btn}>Join Now</button>
      </div>
      <div className={styles.linkdin}>
      <Image src={NextImg4} className={styles.NextImg} alt="Instagram" />
        <h1>Linkdin Community</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className={styles.btn}>Join Now</button>
      </div>
      <div className={styles.facebook}>
        <Image src={NextImg5} className={styles.NextImg} alt="Instagram" />
        <h1>Facebook Community</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className={styles.btn}>Join Now</button></div>
      </div>
    </section>
    </>
  )
}

export default Community
