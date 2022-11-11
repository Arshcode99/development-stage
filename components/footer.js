import React from 'react';
import styles from './components.module.css';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.leftfoot}>
          <Link className={styles.a} href="/">Home</Link>
          <Link className={styles.a} href="/">Courses</Link>
          <Link className={styles.a} href="/">Careers</Link>
          <Link className={styles.a} href="/">Community</Link>
        </div>
        <div className={styles.rightfoot}>
          <p>Copyright 2022 Reactjsofficial.com | All Rights Reserved</p>
        </div>
        </div>
    </>
  );
}

export default Footer;
