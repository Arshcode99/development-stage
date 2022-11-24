import React from 'react'
import Image from 'next/image'
import contactIMG from '../public/Graphics5.png'
import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.twocol}>
            <div className={styles.left}>
                <Image src={contactIMG} className={styles.contactIMG} alt='NextImage' />
                <h1>Connect With Our Support Team</h1>
                <p>Facing Problems in Browsing Don't worry! We will Fix it, Contact To Our Support team for better user experience.</p>
            </div>
            <div className={styles.right}>
                <h3>Connect with us🎧</h3>
                <form method='POST' className={styles.form}>
                    <label htmlFor="greatName">Name*</label>
                    <input type="text" name="greatName" className={styles.input} placeholder='Enter Your Name' required />
                    <label htmlFor="greatName">Email*</label>
                    <input type="text" name="greatEmail" className={styles.input} placeholder='Enter Your Email' required />
                    <label htmlFor="greatName">Message*</label>
                    <textarea name="Message" cols="40" rows="10" className={styles.textarea} placeholder='Enter Your Message...' required></textarea>
                    <button type="submit" className={styles.btn}>Send Message</button>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
