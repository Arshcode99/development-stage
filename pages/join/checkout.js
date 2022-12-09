import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/checkout.module.css';

const Checkout = () => {

  //Defining UseRouter
  const router = useRouter();


  // initialize Razorpay Payment SDK
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  //Make Payment With Razorpay Payment
  const makePayment = async () => {
    if( batch && fullName && fullEmail && fullPhoneNo && fullAddress && fullPincode && fullCountry ){
      const resbase = await fetch(
        "https://nextdb-bfcfc-default-rtdb.firebaseio.com/students-paid-for-course.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          BatchName: batch,
          Email: fullEmail,
          Name: fullEmail,
          Country: fullCountry,
          Phone: fullPhoneNo,
          Pincode: fullPincode,
          Address: fullAddress,
        }),
      }
      );
      if (resbase) {
        console.log("Sent!")
      }
      else {
        alert("Maybe Something went wrong! Try Again... 🤔")
      }
    const res = await initializeRazorpay();
    if (!res) {
      alert("It Seems Like You're Offline Or Something Wrong From Our Side, If You're ONLINE and still seeing this message than please contact us at our contact page!");
      return;
    }
    else{
      console.log("Success")
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Reactjsofficial",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "This TRANSACTION is taking place between you and our company for the digital product(Course)",
      image: "https://www.reactjsofficial.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.df443803.png&w=2048&q=75",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        router.push('/join/success')
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: fullName,
        email: fullEmail,
        contact: fullPhoneNo,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
    else{
      alert("Please Fill All Required Data! 🤔")
    }
  };

  //Let's Take fetch data Dynamically!
  var today = new Date().toLocaleDateString().slice(0, 10);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 30000);
  }, []);

  //Let's Store Input Data From Users In useState()
  const [fullName, setfullName] = useState("");
  const [fullEmail, setfullEmail] = useState("");
  const [fullAddress, setfullAddress] = useState("");
  const [fullPhoneNo, setfullPhoneNo] = useState("");
  const [fullCountry, setfullCountry] = useState("");
  const [fullPincode, setfullPincode] = useState("");
  const [batch, setBatch] = useState("");

  return (
    <>
      {/* <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script> */}
      <section className={styles.Checkout}>
        <div className={styles.twocol}>
          <div className={styles.left}>
            <h2>Billing Details</h2>
            <form className={styles.form}>
              <label htmlFor="Name">Name*</label>
              <input type="text" name="Name" required className={styles.input} placeholder="Enter Your Name"
                onChange={(e) => {
                  const fullNameInt = e.target.value;
                  setfullName(fullNameInt)
                }} />
              <label htmlFor="Email">Email*</label>
              <input type="email" name="Email" required className={styles.input} placeholder="Enter Your Email"
                onChange={(e) => {
                  const fullEmailInt = e.target.value;
                  setfullEmail(fullEmailInt)
                }} />
              <label htmlFor="Address">Address*</label>
              <input type="text" name="Address" required className={styles.input} placeholder="Enter Your Address"
                onChange={(e) => {
                  const fullAddressInt = e.target.value;
                  setfullAddress(fullAddressInt)
                }} />
              <label htmlFor="Phone">Phone*</label>
              <input type="tel" name="Phone" required className={styles.input} placeholder="Enter Your Phone No."
                onChange={(e) => {
                  const fullPhoneInt = e.target.value;
                  setfullPhoneNo(fullPhoneInt)
                }} />
              <label htmlFor="country">Country*</label>
              <input type="text" name="country" required className={styles.input} placeholder="Enter Your Country"
                onChange={(e) => {
                  const fullCountryInt = e.target.value;
                  setfullCountry(fullCountryInt)
                }} />
              <label htmlFor="Pincode">Pincode*</label>
              <input type="number" name="Pincode" className={styles.input} placeholder="Enter Your Pincode."
                onChange={(e) => {
                  const fullPincodeInt = e.target.value;
                  setfullPincode(fullPincodeInt)
                }} />
              <label htmlFor="batch">Comform Your Batch*</label>
              <div className={styles.space}>
              <input onChange={(e) => {
                  const fullBatchInt = e.target.value;
                  setBatch(fullBatchInt)
                }} name='Batch' required type="radio" value="Earliest Batch" /> Earliest Batch 
              <input onChange={(e) => {
                  const fullBatchInt = e.target.value;
                  setBatch(fullBatchInt)
                }} name='Batch' required type="radio" value="Next Batch" /> Next Batch
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <h2>Overview</h2>
            <div className={styles.overflow}>
              <table className={styles.table}>
                <tr>
                  <th className={styles.th}>Course</th>
                  <th className={styles.th}>Date</th>
                  <th className={styles.th}>Time</th>
                  <th className={styles.th}>Price</th>
                  <th className={styles.th}>Discount</th>
                  <th className={styles.th}>GST</th>
                  <th className={styles.th}>Total</th>
                </tr>
                <tr>
                  <td className={styles.td}>FRONTEND DEVELOPMENT <br /> WITH REACT SPECIALIZATION - TRAINING PROGRAM</td>
                  <td className={styles.td}>{today}</td>
                  <td className={styles.td}>{time.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })}</td>
                  <td className={styles.td}>₹38,099/-</td>
                  <td className={styles.td}>52%</td>
                  <td className={styles.td}>18%</td>
                  <td className={styles.td}>₹21,579/-  <br />(GST Included)</td>
                </tr>
              </table>
            </div>
            <b>Note* : Any False Information Can Result in Conflict and if found Your Course purchase will Be terminated!
              <br />
            </b>
            <hr />
            <h3>Amount Payable</h3>
            <p><strong>Good News😍🎉:</strong> You Can Take Benifits Of Current Offers In Checkout Page, Just Click on PAY NOW Button and a popup will be open, In the bootom you can find offers tab, Just Click it and offer will be applied... </p>
            <h4>₹21,579/-</h4>
            <button onClick={makePayment} className={styles.btn}>Pay Now</button>
            <hr />
            <h2>Your Information:</h2>
            <div className={styles.overflow}>
            <table className={styles.table}>
                <tr>
                  <th className={styles.th}>Name</th>
                  <th className={styles.th}>Email</th>
                  <th className={styles.th}>Phone</th>
                  <th className={styles.th}>Address</th>
                  <th className={styles.th}>Pincode</th>
                  <th className={styles.th}>Country</th>
                  <th className={styles.th}>Batch</th>
                </tr>
                <tr>
                  <td className={styles.td}>{fullName}</td>
                  <td className={styles.td}>{fullEmail}</td>
                  <td className={styles.td}>{fullPhoneNo}</td>
                  <td className={styles.td}>{fullAddress}</td>
                  <td className={styles.td}>{fullPincode}</td>
                  <td className={styles.td}>{fullCountry}</td>
                  <td className={styles.td}>{batch}</td>
                </tr>
              </table>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
