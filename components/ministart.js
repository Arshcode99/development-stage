// MiniStart.js

import React from 'react';
import styles from '../styles/Home.module.css'

const MiniStart = () => {
  return (
        <>
        <div className={styles.MiniStart}>
            <div className={styles.formtittle}>Join Now</div>
            <div className={styles.box2}>
                <form className={styles.form}>
                    <input type="text" name='email' className={styles.input} placeholder='Email*' required />
                    <button className={styles.btn}>Get Started</button>
                </form>
            </div>
        </div>
        </>
  );
};

export default MiniStart;