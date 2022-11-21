import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import styles from '../styles/registration.module.css';

const Registration = () => {


  const [studentsData, setStudentsData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    collage: "",
  });

  const PostStudentsData = async(e)=>{
    e.preventDefault()
    const{fullName, email, phone, country, collage} = studentsData;

    const res = await fetch('https://nextdb-simplifed-default-rtdb.firebaseio.com/newstudents.json',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        fullName,
        email,
        phone,
        country,
        collage,
      })
    }
    )}

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
                <form className={styles.alignequal} method="POST">
                    <label htmlFor="fullname">name*</label>
                    <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Your Name'
                    name='fullName'
                    onChange={(e)=>{
                      setStudentsData({ ...studentsData, fullName:e.target.value})
                    }}
                    required />



                    <label htmlFor="email">email Id*</label>
                    <input 
                    className={styles.input} 
                    type="email" 
                    placeholder='Your Email'
                    name='email'
                    onChange={(e)=>{
                      setStudentsData({ ...studentsData, email:e.target.value})
                    }}
                    required />



                    <label htmlFor="phone">Phone No*</label>
                    <input 
                    className={styles.input} 
                    type="tel" 
                    placeholder='Your Phone No.'
                    name='phone'
                    onChange={(e)=>{
                      setStudentsData({ ...studentsData, phone:e.target.value})
                    }}
                    required />




                    <label htmlFor="country">country*</label>
                    <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Your Country'
                    name='country'
                    onChange={(e)=>{
                      setStudentsData({ ...studentsData, country:e.target.value})
                    }}
                    required />



                    <label htmlFor="collage">collage name*</label>
                    <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Your Collage Name'
                    name='collage'
                    onChange={(e)=>{
                      setStudentsData({ ...studentsData, collage:e.target.value})
                    }}
                    required />
                    
                    <br />

                    <button 
                    type="submit" 
                    className={styles.btn}
                    onSubmit={PostStudentsData}>
                    Submit
                    </button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default Registration;