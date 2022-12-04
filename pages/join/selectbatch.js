import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import Script from 'next/script';
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
      var options = {
        "key": "rzp_test_4mWGndDk6F7am7", // Enter the Key ID generated from the Dashboard
        "amount": "1000000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_KnqxNlmKuSmn2Z", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});

    var rzp1 = new Razorpay(options);
    rzp1.open();
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
    <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <section className={styles.SelectBatch}>
        <div className={styles.twocol}>
          <div className={styles.leftside}>
            <h1 className={styles.h1}>Take a flight with React.js Today!</h1>
            <p>🔗😉, 1st Step is to choose a batch that fit's your timing and everything will be setup for you!
            </p>
            <hr />
            <p>Follow us on: <br />
              <a className={styles.white} href="https://www.instagram.com/reactjsofficial/"><AiFillInstagram className={styles.icons} /></a>
              {'\u00A0'}
              <a className={styles.white} href="https://www.facebook.com/profile.php?id=100079173533689&mibextid=LQQJ4d"><AiFillFacebook className={styles.icons} /></a>
              {'\u00A0'}
              <a className={styles.white} href="https://www.linkedin.com/company/reactjsofficial/"><BsLinkedin className={styles.icons} /></a>
            </p>
            <br />
            <Link href="/courses"><button className={styles.btn}>Know More About Current Batch's</button></Link>
            <br />
            <br />
            <h6>You selected: {batch}</h6>
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
              <p className={styles.p}>52% Discount on early registraion</p>
              <div className={styles.batchinfo}>
              Weekday's Batch: Mon-Thu: 1.5hours
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
              <p className={styles.p}>52% Discount on early registraion</p>
              <div className={styles.batchinfo}>
              Weekend's Batch: Sat-Sun: 3hours
              </div>
            </div>
            </div>
            <br />
            <button type="submit" onClick={handleForm} className={styles.btn}>Enroll Now</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectBatch;
