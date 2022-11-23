// MiniStart.js

import React from 'react';
import styles from '../styles/Home.module.css'

const MiniStart = () => {
  return (
        <>
        <div className={styles.MiniStart}>
            <div className={styles.formtittle}>Join Now</div>
            <div className={styles.box5}>
                <form className={styles.form}>
                    <input type="text" name='fullName' className={styles.input} placeholder='Your Name*' required />
                    <input type="email" name='email' className={styles.input} placeholder='Your Email*' required />
                    <input type="tel" name='phone' className={styles.input} placeholder='Your Phone no.*' required />
                    <button className={styles.btn}>Get Call Back</button>
                </form>
            </div>
        </div>
        </>
  );
};

export default MiniStart;