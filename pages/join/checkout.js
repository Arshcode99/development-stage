import React from 'react';
import Script from 'next/script';
import styles from '../../styles/checkout.module.css';

const Checkout = () => {
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
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
                        <button className={styles.btn}>Pay Now</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;
