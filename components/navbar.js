import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './components.module.css'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { TbGridDots } from 'react-icons/Tb'
import { BsPerson } from 'react-icons/bs'
import logo from '../public/favicon.png'

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  return (
    <>
      <div className={styles.navbar}>
      <Link href='/'>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logoimg}/>
          REACTJS
        <span>OFFICIAL</span>
        </div>
        </Link>
        <div className={styles.menubox}>
      <Link className={styles.a} href="/">Home</Link>
      <Link className={styles.a} href="/courses">Courses</Link>
      <Link className={styles.a} href="/career">Careers</Link>
      <Link className={styles.a} href="/">Community</Link>
      </div>
      <div className={styles.menubox2} id='menu'>
      <Link className={styles.a} href="/">Home</Link>
      <Link className={styles.a} href="/courses">Courses</Link>
      <Link className={styles.a} href="/career">Careers</Link>
      <Link className={styles.a} href="/">Community</Link>
      </div>
      <div className={styles.topicons}>
      <GrLinkedinOption className={styles.BsLinkedin} />
        <FaWhatsapp className={styles.BsWhatsapp} />
        <FaInstagram className={styles.BsInstagram} />
        <Link href="/login"><BsPerson className={styles.BsPerson} /></Link>
        <TbGridDots className={styles.TbGridDots} onClick={myFunction} />
        </div>
      </div>
    </>
  );
}

export default Navbar;