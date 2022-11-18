import Link from 'next/link';
import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import styles from '../styles/registration.module.css'

const Registration = () => {
  return (
    <>
      <section className={styles.Registration}>
        <div className={styles.twocol}>
            <div className={styles.leftside}>
                <h1 className={styles.h1}>Take a flight with React.js Today!</h1>
                <p>Step 1 is to create a free account on Reactjsofficial, Don't Worry We will not share your data with anyone.
                  your data is safe and secure!, We will not spam your Inbox. 🔗😉
                </p>
                <hr />
                <p>Already a STUDENT?</p>
                <Link href="/login" className={styles.btn}>Login</Link>
                <hr />
                <h4>OR</h4>
                <button className={styles.google}>Countinue With <AiOutlineGoogle/>oogle</button>
            </div>
            <div className={styles.rightside}>
                <form className={styles.alignequal}>
                    <label htmlFor="Name">Name*</label>
                    <input className={styles.input} type="text" name="Name" id="Name" required />
                    <label htmlFor="Email">Email Id*</label>
                    <input className={styles.input} type="email" name="Email" id="Email" required />
                    <label htmlFor="Contact">Contact No*</label>
                    <input className={styles.input} type="tel" name="Contact" id="Contact" required />
                    <label htmlFor="country">country*</label>
                    <input className={styles.input} type="text" name="country" id="country" required />
                    <label htmlFor="Collage/Company">Collage/Company Name*</label>
                    <input className={styles.input} type="text" name="Collage/Company" id="Collage/Company" required />
                    <br />
                    <button type="submit" className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
