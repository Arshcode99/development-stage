import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import contactIMG from '../public/Graphics5.png'
import styles from '../styles/contact.module.css'

const Contact = () => {

  const [userData, setUserData] = useState({
    greatName: "",
    greatEmail: "",
    message: "",
  });

  let name, value;

  const postUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]:value});
  }

  // Connecting With Firebase DB 
  const handleForm = async(event) =>{
  event.preventDefault();
  const { greatName, greatEmail, message, } = userData;
  if( greatName && greatEmail && message ){
  const res = await fetch(
    "https://nextdb-bfcfc-default-rtdb.firebaseio.com/Contact-us.json",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
      greatName:greatName,
      greatEmail:greatEmail,
      message:message,
    }),
  }
    );
    if (res){
      alert("Thank You! Our Team will Contact You Soon... 😉")
    }
    else{
      alert("Maybe Something went wrong! Try Again... 🤔")
    }
  }
  else{
    alert("Maybe You Missed Something! Try Again... 🤔")
  }
}

  return (
    <>
      <section className={styles.contact}>
        <div className={styles.twocol}>
            <div className={styles.left}>
                <Image src={contactIMG} className={styles.contactIMG} alt='NextImage' />
                <h1>Connect With Our Support Team</h1>
                <p>Facing Problems in Browsing Don't worry! We will Fix it, Contact To Our Support team for better user experience.</p>
            </div>
            <div className={styles.right}>
                <h3>Connect with us🎧</h3>
                <form method='POST' className={styles.form}>
                    <label htmlFor="greatName">Name*</label>
                    <input type="text" value={userData.greatName}
                    onChange={postUserData} name="greatName" className={styles.input} placeholder='Enter Your Name' required />


                    <label htmlFor="greatEmail">Email*</label>
                    <input type="text" value={userData.greatEmail}
                    onChange={postUserData} name="greatEmail" className={styles.input} placeholder='Enter Your greatEmail' required />


                    <label htmlFor="greatName">Message*</label>
                    <textarea name="message" value={userData.message}
                    onChange={postUserData} cols="40" rows="10" className={styles.textarea} placeholder='Enter Your Message...' required></textarea>
                    <button onClick={handleForm} type="submit" className={styles.btn}>Send Message</button>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
