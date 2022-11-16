import React from 'react';
import Image from 'next/image'
import HeroImg from '../public/Graphics4.png'
import airbnb from '../public/airbnb.png'
import cisco from '../public/cisco.png'
import facebook from '../public/facebook.png'
import hashedin from '../public/hashedin.png'
import No1Img from '../public/apps-with-reactjs.png'
import Typewriter from 'typewriter-effect';
import { BsMusicPlayer } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'
import styles from '../styles/courses.module.css';

const courses = () => {
  function RunOutFunction() {
    var x = document.getElementById("hidethis");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function Another2(){
    var x = document.getElementById("hidethis2");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function Another3(){
    var x = document.getElementById("hidethis3");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function Another4(){
    var x = document.getElementById("hidethis4");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  return (
    <>
     {/* Main Courses Page Starts  */}
     <section className={styles.courses}>
        <div className={styles.twocol}>
          <div className={styles.leftcol}>
          <div className={styles.deem}>Master React Concepts Step By Step</div>
            <div className={styles.h3}><Typewriter options={{
                strings: ['Reactjsofficial Presents ReactJS Pro Training Program!', 'For Beginners', 'Experienced Learners'],
                autoStart: true,
                loop: true,}} /></div>
            <div className={styles.h1}>FRONTEND DEVELOPMENT WITH REACT SPECIALIZATION - TRANING PROGRAM</div>
            <div className={styles.p}>Build real-world projects by mastering React & javascript. Learn the essential frontend development concepts from scratch.</div>
            <div className={styles.blah}>
            <button className={styles.btn}>Explore Now</button>
            <button className={styles.btnwithborder}>Try For Free</button>
            <div className={styles.Reactaddons}>
              <div className={styles.box}>
                <b className={styles.b}>13k+</b><br />
                Students Enrolled
              </div>
              <div className={styles.box}>
              <b className={styles.b}>8</b><br />
                Projects
              </div>
              <div className={styles.box}>
              <b className={styles.b}>2.5</b><br />
                Months
              </div>
              <div className={styles.box}>
              <b className={styles.b}>50+</b><br />
                Hours Of Content
              </div>
            </div>
            </div>
          </div>
          <div className={styles.rightcol}>
            <Image src={HeroImg} className={styles.HeroImg} alt="Hey There?" />
          </div>
        </div>
      </section>
      {/* Main Courses Page Ends  */}
      {/* ============================================ */}
      {/* Main Courses 2nd Section Page Ends  */}
      <section className={styles.coursesSecond}>
      <div className={styles.twocolnext}>
          <div className={styles.leftcol2}>
            <h1 className={styles.h1next}>Products that have been built using <b>React</b></h1>
            <Image src={No1Img} className={styles.aligncenter} alt="Hey This Is No2"/>
            </div>
          <div className={styles.rightcol2}>
          <h1 className={styles.h1nex2}>Companies Currently hiring <b>React Developers</b></h1>
          <p className={styles.pnext}><b>Generally startups who require a jack of all trades and someone who knows to handle both frontend and backend</b></p>
          <div className={styles.Reactaddonsnext}>
              <div className={styles.boxnext}>
                <Image src={airbnb} className={styles.sizeimg} alt="airbnb" />
              </div>
              <div className={styles.boxnext}>
              <Image src={cisco} className={styles.sizeimg} alt="cisco" />
              </div>
              <div className={styles.boxnext}>
              <Image src={facebook} className={styles.sizeimg} alt="facebook" />
              </div>
              <div className={styles.boxnext}>
              <Image src={hashedin} className={styles.sizeimg} alt="hashedin" />
              </div>
            </div>
            <br />
            <br />
            <button className={styles.btn}>Know More</button>
          </div>
        </div>
      </section>
      {/* Main Courses 2nd Section Page Ends  */}
      {/* ============================================ */}
      {/* Main Courses 3rd section Page Starts  */}
     <section className={styles.coursesThird}>
      <div className={styles.topcoursesThird}>
      <div className={styles.deem3}>Web Development</div>
      <div className={styles.thirdh1}>Projects That You Will Build!</div>
      <div className={styles.projectsbox}>
        <div className={styles.box3}>
          <div className={styles.icon}>
            <BsMusicPlayer />
          </div>
          <div className={styles.h23}>Social Media App</div>
          <div className={styles.p3}>Build a clone of a social media platform</div>
        </div>
        <div className={styles.box3}>
          <div className={styles.icon2}>
            <BsCart4 />
          </div>
          <div className={styles.h23}>E-commerce Platform</div>
          <div className={styles.p3}>Build The basic functionality of shopping cart</div>
        </div>
        <div className={styles.box3}>
          <div className={styles.icon3}>
            <BiMoviePlay />
          </div>
          <div className={styles.h23}>Movie App</div>
          <div className={styles.p3}>Build Netflix a clone</div>
        </div>
      </div>
      </div>
      <div className={styles.purchase}>
      <h1 className={styles.h2purchase}>Select a plan based on your needs</h1>
          <div className={styles.purchaseleft}>
            <div className={styles.purchasetopcard}>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg}></div>
                <span>13 <br />Months</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg1}></div>
                <span>110+ <br />Hours</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg2}></div>
                <span>8+ <br />Projects</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg3}></div>
                <span>90+ <br />Tasks</span>
              </div>
              <div className={styles.topcardbox}>
                <div className={styles.topcardboximg4}></div>
                <span>400+<br />Doubts</span>
              </div>
            </div>
            <div className={styles.grid3}>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Additional Benefits</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Live doubts sessions</li>
                <li className={styles.li}>Certificate of completion</li>
                <li className={styles.li}>Exclusive Placement Cell</li>
              </ul>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Favourite Topics</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Advanced understanding of javascript</li>
                <li className={styles.li}>Data fetching using APIs</li>
                <li className={styles.li}>Redux & Redux thunk</li>
                <li className={styles.li}>Build industry level projects with yourself</li>
              </ul>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Why Only Reactjsofficial?</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Unlike the market 100% live sessions</li>
                <li className={styles.li}>1:1 Mock-Interview & Guidance-session with Industry Mentors</li>
                <li className={styles.li}>Curated interview problems</li>
                <li className={styles.li}>Weekly live doubts sessions</li>
                <li className={styles.li}>Backup available</li>
                <li className={styles.li}>120 Days Course Pause</li>
                <li className={styles.li}>1:1 Doubt support with Teaching Assistants  for live classes</li>
              </ul>
            </div>
            </div>
            <div className={styles.grid2}>
            <div className={styles.basicfeatures}>
              <span className={styles.smalltext2}>Earliest Batch</span><br />
              <b className={styles.b}>5th Dec</b>
              <p>10% Discount on early registraion</p>
              <div className={styles.batchinfo}>
              Weekday's Batch: Sat-Sun:3hours
              </div>
            </div>
            <div className={styles.basicfeatures}>
              <span className={styles.smalltext2}>Next Batch</span><br />
              <b className={styles.b}>10th Dec</b>
              <p>10% Discount on early registraion</p>
              <div className={styles.batchinfo}>
              Weekend's Batch: Mon-Thu: 1.5hours
              </div>
            </div>
            </div>
            <div className={styles.bottompurchase}>
              <div className={styles.h1blow}>₹44,071/-
              <p className={styles.psmall}>OR EMI ₹3,333/mon*</p></div>
              <button className={styles.buybtn}>Enroll Now</button>
            </div>
          </div>
          </div>
          <div className={styles.purchase}>
          <div className={styles.purchaseleft}>
            <div className={styles.purchasetopcard3}>
            <h1 className={styles.h2}>Program Syllabus & Projects</h1>
            <p>We have reverse engineered our syllabus by talking to the best companies and understanding what skills the industry needs the most right now.</p>
            </div>
            <div className={styles.grid4}>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Web Development Basics & Javascript Deep Dive</h1>
              <p>Get to learn how websites work. Start your web development journey with the basics of JavaScript and learn how to create impressive websites.</p>
              <button className={styles.black} onClick={RunOutFunction}>Week 1-2 <AiOutlineDown/></button>
              <div className={styles.hidecorosl} id='hidethis'>
              <ul className={styles.ul}>
              <li className={styles.li}>Introduction to Javascript</li>
              <li className={styles.li}>Variables, scoping, Data type</li>
              <li className={styles.li}>Strings and Numbers</li>
              <li className={styles.li}>Operators and loops</li>
              <li className={styles.li}>Functions</li>
              <li className={styles.li}>Arrays and Objects</li>
              <li className={styles.li}>Understanding and working with DOM</li>
              <li className={styles.li}>Developer tools in Browsers</li>
              <li className={styles.li}>Prototypes</li>
              <li className={styles.li}>Closures</li>
              <li className={styles.li}>Rest and Spread</li>
              <li className={styles.li}>Promises</li>
              <li className={styles.li}>ES5 vs ES6 vs ES7</li>
              <li className={styles.li}>Eventloop in Javascript</li>
              <li className={styles.li}>Something Amazing!</li>
              </ul>
              </div>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>ReactJs</h1>
              <p>ReactJS has become highly popular because of its extra simplicity and flexibility.Learn the Basics understanding of React.</p>
              <button className={styles.black} onClick={Another2}>Week 3-5 <AiOutlineDown/></button>
              <div className={styles.hidecorosl} id='hidethis2'>
              <ul className={styles.ul}>
              <li className={styles.li}>Create an app using create-react-app</li>
              <li className={styles.li}>Understanding the basics of react app</li>
              <li className={styles.li}>Understanding JSX</li>
              <li className={styles.li}>Understanding virtual DOMS, Single page apps</li>
              <li className={styles.li}>React Lifecycle</li>
              <li className={styles.li}>React Intro</li>
              <li className={styles.li}>States, class components vs functional components</li>
              <li className={styles.li}>React hooks</li>
              <li className={styles.li}>Event handling, props</li>
              <li className={styles.li}>Building forms in React</li>
              <li className={styles.li}>React-Router</li>
              <li className={styles.li}>Conditional Rendering</li>
              <li className={styles.li}>Pure Components</li>
              <li className={styles.li}>High order components</li>
              <li className={styles.li}>Why Node & Babel? (installation)</li>
              <li className={styles.li}>Controlled vs Uncontrolled components.</li>
              </ul>
              </div>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>ReactJS Advanced</h1>
              <p>Uncover some interesting things about React which you, as a React developer would find fascinating.learn why they are used and what problems they came to solve.</p>
              <button className={styles.black} onClick={Another3}>Week 6-8 <AiOutlineDown/></button>
              <div className={styles.hidecorosl} id='hidethis3'>
              <ul className={styles.ul}>
              <li className={styles.li}>Deal with APIs</li>
              <li className={styles.li}>GET Requests, POST & DELETE Requests</li>
              <li className={styles.li}>Redux</li>
              <li className={styles.li}>Core Concepts of Redux</li>
              <li className={styles.li}>Redux Thunk & HTTP</li>
              <li className={styles.li}>Git & GitHub</li>
              <li className={styles.li}>Deployment</li>
              </ul>
              </div>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Projects</h1>
              <p>Overall training will be very interactive with 5+ Projects undergoing towards this journey. Starting from building simple ReactJs app to building a real world application.</p>
              <button className={styles.black} onClick={Another4}>Week 1-8 <AiOutlineDown/></button>
              <div className={styles.hidecorosl} id='hidethis4'>
              <ul className={styles.ul}>
              <li className={styles.li}>Social Media Platform</li>
              <li className={styles.li}>E-commerce Platform</li>
              <li className={styles.li}>Netflix</li>
              </ul>
              </div>
            </div>
            </div>
            </div>
          </div>
      </section>
      {/* Main Courses 3rd section Page Ends  */}
      {/* Main Courses 4th section Page Starts  */}
     <section className={styles.coursesFourth}>
      <div className={styles.topcoursesThird}>
      <div className={styles.deem3}>FeedBacks</div>
      <div className={styles.thirdh1}>What our students say about this course?</div>
      <div className={styles.projectsbox}>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h1>Hello World</h1>
    </div>
    <div class="carousel-item">
      <h1>Hello World 2</h1>
    </div>
    <div class="carousel-item">
      <h1>Hello World 3</h1>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
      </div>
      </section>
      {/* Main Courses 4th section Page Ends  */}
    </>
  );
}

export default courses;