import React from 'react';
import styles from '../../styles/checkout.module.css';
import PayImg from '../../public/firewire.svg';
import Image from 'next/image';

const Success = () => {
  return (
    <>
     <section className={styles.Success}>
        <div className={styles.Successbox}>
            <div>
            <Image src={PayImg} className={styles.PayImg}></Image>
            </div>
            <div>
            <h1><span className={styles.green}>Success!</span> Congratulations🎉</h1>
            <h4>You have successfully Purchased Course!</h4>
            <p>Sit back and relax, we will contact you soon and inform you about next batch timings ASAP😉</p>
            <button className={styles.btn}>Connect</button>
        </div>
        </div>
        </section> 
    </>
  );
}

export default Success;
