import React from 'react';
// import Script from 'next/script';
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
          alert("Razorpay SDK Failed to load");
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
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
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


    return (
        <>
            {/* <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script> */}
            <section className={styles.Checkout}>
                <div className={styles.twocol}>
                    <div className={styles.left}>
                        <h2>Invoice</h2>
                        <table className={styles.table}>
                            <tr>
                                <th className={styles.th}>Course</th>
                                <th className={styles.th}>Price</th>
                                <th className={styles.th}>GST</th>
                                <th className={styles.th}>Total</th>
                            </tr>
                            <tr>
                                <td className={styles.td}>FRONTEND DEVELOPMENT <br /> WITH REACT SPECIALIZATION - TRAINING PROGRAM </td>
                                <td className={styles.td}>₹38,099/-</td>
                                <td className={styles.td}>18%</td>
                                <td className={styles.td}>₹44,956/-</td>
                            </tr>
                        </table>
                        <br />
                        <b>Rajeev Ranjan Singh</b>
                        <h5>Signature (CEO & FOUNDER)</h5><br />
                    </div>
                    <hr />
                    <div className={styles.right}>
                        <h3>Amount Payable</h3>
                        <h6>₹44,956/-</h6><br />
                        <button onClick={makePayment} className={styles.btn}>Pay Now</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;
