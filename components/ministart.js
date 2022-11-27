// MiniStart.js
import { useState } from 'react';
import React from 'react';
import styles from '../styles/Home.module.css'

const MiniStart = () => {

    const [userData, setUserData] = useState({
        quickfullName: "",
        quickemail: "",
        quickphone: "",
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
      const { quickfullName, quickemail, quickphone } = userData;
      if( quickfullName && quickemail && quickphone ){
      const res = await fetch(
        "https://nextdb-bfcfc-default-rtdb.firebaseio.com/QuickStart-NewStudents.json",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
            quickfullName:quickfullName,
            quickemail:quickemail,
            quickphone:quickphone,
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
        alert("Maybe You Missed Something? Don't worry Give another Try ✔😁")
      }
    }

  return (
        <>
        <div className={styles.MiniStart}>
            <div className={styles.formtittle}>Join Now</div>
            <div className={styles.box5}>
                <form className={styles.form}>
                    <input type="text" name='quickfullName' className={styles.input} placeholder='Your Name*'
                    value={userData.quickfullName}
                    onChange={postUserData}
                     required />
                    <input type="email" name='quickemail' className={styles.input} placeholder='Your Email*'
                    value={userData.quickemail}
                    onChange={postUserData}
                    required />
                    <input type="tel" name='quickphone' className={styles.input} placeholder='Your Phone no.*'
                    value={userData.quickphone}
                    onChange={postUserData}
                    required />
                    <button className={styles.btn} onClick={handleForm}>Get Call Back</button>
                </form>
            </div>
        </div>
        </>
  );
};

export default MiniStart;