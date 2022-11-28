import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import styles from '../../styles/registration.module.css';

const SelectBatch = () => {

    const [batch, setBatch] = useState("");
    const [Emailforbatch, setEmailforbatch] = useState("");

    // Connecting With Firebase DB 
  const handleForm = async (event) => {
    event.preventDefault();
    if( batch && Emailforbatch ){
    const res = await fetch(
      "https://nextdb-bfcfc-default-rtdb.firebaseio.com/NewStudents-joined-with-batch.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Batch: batch,
        Email: Emailforbatch,
      }),
    }
    );
    if (res) {
      window.location.href = "https://pages.razorpay.com/reactjsofficial-payment";
    }
    else {
      alert("Maybe Something went wrong! Try Again... 🤔")
    }
  }
  else {
    alert("Please Enter All Required Fields! 🤔🔗")
  }
  };

  return (
    <div>
      <section className={styles.SelectBatch}>
        <div className={styles.twocol}>
          <div className={styles.leftside}>
            <h1 className={styles.h1}>Take a flight with React.js Today!</h1>
            <p>🔗😉, 1st Step is to choose a batch that fit's your timming and everything will be setup for you!
            </p>
            <hr />
            <p>Follow us on: <br />
              <AiFillInstagram className={styles.icons} />
              {'\u00A0'}
              <AiFillFacebook className={styles.icons} />
              {'\u00A0'}
              <BsLinkedin className={styles.icons} />
            </p>
            <br />
            <Link href="/courses"><button className={styles.btn}>Know More About Current Batch's</button></Link>
            <br />
            <br />
            <h6>You selcted: {batch}</h6>
            <h6>Your Email: {Emailforbatch}</h6>
          </div>
          <div className={styles.rightside}>
            <form className={styles.alignequal} method="POST">
              <label htmlFor="Email">Email*</label>
              <input type="text" name='Email' className={styles.input} placeholder="Enter Your Email..."
              onChange={(e)=>{
                const SelectedBatchEmail=e.target.value;
                setEmailforbatch(SelectedBatchEmail)
               }}  />
              <br />
              <label htmlFor="Batch">Select a batch</label>
              <div className={styles.grid2}>
            <div className={styles.basicfeatures} id="select">
              <span className={styles.smalltext2}>Earliest Batch</span>
              <input 
               type="radio"
               name="Batch"
               value="Earliest Batch"
               className={styles.select}
               onChange={(e)=>{
                const SelectedBatch=e.target.value;
                setBatch(SelectedBatch)
               }} 
               required />
              <br />
              <b className={styles.b1}>5th Dec</b>
              <p className={styles.p}>10% Discount on early registraion</p>
              <div className={styles.batchinfo}>
              Weekday's Batch: Sat-Sun:3hours
              </div>
            </div>
            <div className={styles.basicfeatures} id="select2">
              <span className={styles.smalltext2}>Next Batch</span>
              <input 
               type="radio"
               name="Batch"
               value="Next Batch"
               className={styles.select}
               onChange={(e)=>{
                const SelectedBatch=e.target.value;
                setBatch(SelectedBatch)
               }} 
               required />
              <br />
              <b className={styles.b1}>10th Dec</b>
              <p className={styles.p}>10% Discount on early registraion</p>
              <div className={styles.batchinfo}>
              Weekend's Batch: Mon-Thu: 1.5hours
              </div>
            </div>
            </div>
            <br />
            <button type="submit" onClick={handleForm} className={styles.btn}>Enroll Now</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SelectBatch;
