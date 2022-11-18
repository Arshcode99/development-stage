import React from 'react';
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';
import styles from '../styles/registration.module.css'


const Login = () => {
  return (
    <>
     <section className={styles.Registration}>
        <div className={styles.twocol}>
            <div className={styles.leftside}>
                <h1 className={styles.h1}>Welcome Back!</h1>
                <p>Login To Your Account And See Your Montly Performance based on your Skills. Good Luck! 🎧😉
                </p>
                <hr />
                <p>New STUDENT?</p>
                <Link href="/registration" className={styles.btn}>Register now</Link>
                <hr />
                <h4>OR</h4>
                <button className={styles.google}>Countinue With <AiOutlineGoogle/>oogle</button>
            </div>
            <div className={styles.rightside}>
                <form className={styles.alignequal}>
                    <label htmlFor="Email">Email Id*</label>
                    <input className={styles.input} type="email" name="Email" id="Email" required />
                    <label htmlFor="Password">Password*</label>
                    <input className={styles.input} type="Password" name="Password" id="Password" required />
                    <br />
                    <button type="submit" className={styles.btn}>Submit</button>
                    <hr />
                    <br />
                    <h4>OR</h4>
                    <Link href='/contact' className={styles.forgot}>Forgot Password?</Link>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default Login;
