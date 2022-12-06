import React from 'react';
import PayImg from '../../public/firewire.svg';
import { useState, useEffect } from 'react';
import styles from '../../styles/checkout.module.css';

const Checkout = () => {

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
        const res = await initializeRazorpay();
    
        if (!res) {
          alert("It Seems Like You're Offline Or Something Wrong From Our Side, If You're ONLINE and still seeing this message than please contact us at our contact page!");
          return;
        }
    
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
          t.json()
        );
        console.log(data);
        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Arshcode",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou for your test donation",
          image: "https://cdn.razorpay.com/logos/KnpjU4FBX4UW0r_medium.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert("Thank You! You Will Be Redirected To Our Pro Slack Community Now! Sit Back And Relax😉...")
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
          },
          prefill: {
            name: "Test Person",
            email: "Testperson@gmail.com",
            contact: "7292120922",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };

      //Let's Take fetch data Dynamically!
      var today = new Date().toLocaleDateString().slice(0,10);
      const [time, setTime] = useState(new Date());
      useEffect(() => {
        setInterval(() => setTime(new Date()), 30000);
      }, []);

    return (
        <>
            {/* <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script> */}
            <section className={styles.Checkout}>
                <div className={styles.twocol}>
                    <div className={styles.left}>
                        <h2>Billing Details</h2>
                        <form className={styles.form}>
                            <label htmlFor="Name">Name*</label>
                            <input type="text" name="Name" required className={styles.input} placeholder="Enter Your Name" />
                            <label htmlFor="Email">Email*</label>
                            <input type="email" name="Email" required className={styles.input} placeholder="Enter Your Email" />
                            <label htmlFor="Address">Address*</label>
                            <input type="text" name="Address" required className={styles.input} placeholder="Enter Your Address" />
                            <label htmlFor="Phone">Phone*</label>
                            <input type="tel" name="Phone" required className={styles.input} placeholder="Enter Your Phone No." />
                            <label htmlFor="country">Country*</label>
                            <input type="text" name="country" required className={styles.input} placeholder="Enter Your Country" />
                            <label htmlFor="Aboutus">From Where Did You Hear About Us?*</label>
                            <select name="Aboutus" className={styles.input}>
                                <option>YouTube</option>
                                <option>Google</option>
                                <option>Instagram</option>
                                <option>Linkdin</option>
                                <option>Random Browsing</option>
                                <option>Whatsapp</option>
                            </select>
                            <label htmlFor="CupponCode">Cuppon Code*</label>
                            <input type="text" name="CupponCode" className={styles.input} placeholder="N/A" disabled />
                            <hr />
                            <h2>Overview</h2>
                            <div className={styles.overflow}>
                            <table className={styles.table}>
                                <tr>
                                <th className={styles.th}>Course</th>
                                <th className={styles.th}>Date</th>
                                <th className={styles.th}>Time</th>
                                <th className={styles.th}>Price</th>
                                <th className={styles.th}>GST</th>
                                <th className={styles.th}>Cuppon Discount</th>
                                <th className={styles.th}>Discount</th>
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
                                    <td className={styles.td}>18%</td>
                                    <td className={styles.td}>N/A</td>
                                    <td className={styles.td}>52%</td>
                                    <td className={styles.td}>₹44,956/-</td>
                                </tr>
                            </table>
                            </div>
                            <b>Note* : Any False Information Can Result in Conflict and if found Your Course purchase will Be terminated!
                                <br />
                                You Will Be Redirected To Invoice Page After Successfull Payment!
                            </b>
                            <hr />
                            <h3>Amount Payable</h3>
                        <h6>₹44,956/-</h6>
                        <button onClick={makePayment} className={styles.btn}>Pay Now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;
