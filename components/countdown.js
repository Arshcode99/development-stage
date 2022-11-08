// Timer.js

import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
            <div className={styles.countdownerfirst}>
              <div className={styles.box1} >
                <span className={styles.days} id='days'>{days}<br/>DAYS</span>
              </div>
              <div className={styles.box2}>
                <span className={styles.hours} id='hours'> {hours}<br/>HOURS</span>
              </div>
              <div className={styles.box3}>
                <span className={styles.minutes} id='minutes'> {minutes}<br/>MINUTES</span>  
              </div>
              <div className={styles.box4}>
                <span className={styles.seconds} id='seconds'> {seconds}<br/>SECONDS</span>
              </div>
            </div>
  );
};

export default Timer;