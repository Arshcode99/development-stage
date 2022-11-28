import React from 'react';
import styles from './components.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/favicon.png'


const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.leftfoot}>
        <Link href='/'>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logoimg} alt='REACTJSOFFICIAL'/>
          REACTJS
        <span>OFFICIAL</span>
        </div>
        </Link>
        <p className={styles.text}>
          <b>Give Us A Ring📞
            <br />
          (IST 10:00AM To 06:00PM Only)</b> <br /> +91 7209236123 | +91 7764056669
          <br />
          <br />
          <b>Find Us At This Address:</b> <br /> Sushant Lok Phase-1, Sector 43, Gurgaon <br /> 122009, Haryana, India.
        </p>
        </div>
        <div className={styles.centerfoot}>
          <h2 className={styles.h2}>Free Resourses</h2>
          <div className={styles.free}>
          <a className={styles.amock} href="https://blogs.reactjsofficial.com/">Blogs</a>
          <a className={styles.amock} href="https://www.instagram.com/reactjsofficial/">Cheatsheets</a>
          <a className={styles.amock} href="https://www.instagram.com/reactjsofficial/">Instagram</a>
          <a className={styles.amock} href="https://www.linkedin.com/company/reactjsofficial/">Linkedin</a>
          <Link className={styles.amock} href="/community">Community</Link>
          </div>
        </div>
        <div className={styles.rightfoot}>
        <h2 className={styles.h2ff}>Quick Links</h2>
        <div className={styles.free}>
          <Link className={styles.a1} href="/">Home</Link>
          <Link className={styles.a1} href="/courses">React Training</Link>
          <Link className={styles.a1} href="/aboutus">About Us</Link>
          <Link className={styles.a1} href="/career">Careers</Link>
          <Link className={styles.a1} href="/legal">Legal</Link>
          </div>
        </div>
        </div>
        <p className={styles.p}>© 2022 Reactjsofficial.com | All Rights Reserved</p>
    </>
  );
}

export default Footer;
