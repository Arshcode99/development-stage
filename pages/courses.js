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
import { RiTimerFlashFill } from 'react-icons/ri'
import { BsCart4 } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'
import styles from '../styles/courses.module.css';

const courses = () => {
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
      <div className={styles.twocol}>
      <div className={styles.purchase}>
          <div className={styles.purchaseleft}>
            <h1 className={styles.h2purchase}>Select a plan based on your needs</h1>
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
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Bonus Features</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Premium Hirist Account</li>
                <li className={styles.li}>NASSCOM Certificate</li>
                <li className={styles.li}>Dedicated Placement Cell with curated job opening</li>
              </ul>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Modules Covered</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Introduction to Programming</li>
                <li className={styles.li}>Data Structures and Algorithms</li>
                <li className={styles.li}>Frontend web development - HTML/CSS/Javascript</li>
                <li className={styles.li}>Advanced frontend with React.js </li>
              </ul>
            </div>
            <div className={styles.basicfeatures}>
              <h1 className={styles.justatext}>Modules Covered</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>1:1 Mock-Interview & Guidance-session with Industry Mentors</li>
                <li className={styles.li}>Workshops for building your resume and
                  Linkedin/Github profiles</li>
                <li className={styles.li}>Curated interview problems</li>
                <li className={styles.li}>DSA based product companies Mock Test Series</li>
                <li className={styles.li}>2 months Free Course Extension</li>
                <li className={styles.li}>120 Days Course Pause</li>
                <li className={styles.li}>1:1 Doubt support with Teaching Assistants </li>
              </ul>
            </div>
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
            <div className={styles.bottompurchase}>
              <div className={styles.h1blow}>₹44,071/-
              <p className={styles.psmall}>OR EMI ₹3,333/mon*</p></div>
              <button className={styles.buybtn}>Enroll Now</button>
            </div>
          </div>
          </div>
          <div className={styles.purchaseright}>
            <h1 className={styles.h2purchaseright}>Program Syllabus & Projects</h1>
            <p>We have reverse engineered our syllabus by talking to the best
              companies and understanding what skills the industry needs the most right now.</p>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>Web Development Basics & Javascript Deep Dive</span>
              <p className={styles.p5}>Get to learn how websites work. Start your web development journey with the basics of JavaScript and learn how to create impressive websites.</p>
              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><h2 class={styles.h2nox}>Week 1-2</h2></button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      <ul>
                        <li>Introduction to Javascript</li>
                        <li>Variables, scoping, Data type</li>
                        <li>Strings and Numbers</li>
                        <li>Operators and loops</li>
                        <li>Functions</li>
                        <li>Arrays and Objects</li>
                        <li>Understanding and working with DOM</li>
                        <li>Developer tools in Browsers</li>
                        <li>Prototypes</li>
                        <li>Closures</li>
                        <li>Rest and Spread</li>
                        <li>Promises</li>
                        <li>ES5 vs ES6 vs ES7</li>
                        <li>Eventloop in Javascript</li>
                        <li>Something Amazing!</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>ReactJs</span>
              <p className={styles.p5}>ReactJS has become highly popular because of its extra simplicity and flexibility.Learn the Basics understanding of React.</p>

              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExampleTwo">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 4-6</h2>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleTwo">
                      <div className="accordion-body">
                      <ul>
                        <li>Create an app using create-react-app</li>
                        <li>Understanding the basics of react app</li>
                        <li>Understanding JSX</li>
                        <li>Understanding virtual DOMS, Single page apps</li>
                        <li>React Lifecycle</li>
                        <li>React Intro</li>
                        <li>States, class components vs functional components</li>
                        <li>React hooks</li>
                        <li>Event handling, props</li>
                        <li>Building forms in React</li>
                        <li>React-Router</li>
                        <li>Conditional Rendering</li>
                        <li>Pure Components</li>
                        <li>High order components</li>
                        <li>Why Node & Babel? (installation)</li>
                        <li>Controlled vs Uncontrolled components.</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>ReactJS Advanced</span>
              <p className={styles.p5}>Uncover some interesting things about React which you, as a React developer would find fascinating.learn why they are used and what problems they came to solve.</p>
              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExampleThree">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h2 className={styles.h2nox}>Week 6-8</h2>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExampleThree">
                      <div className="accordion-body">
                      <ul>
                        <li>Deal with APIs</li>
                        <li>GET Requests, POST & DELETE Requests</li>
                        <li>Redux</li>
                        <li>Core Concepts of Redux</li>
                        <li>Redux Thunk & HTTP</li>
                        <li>Git & GitHub</li>
                        <li>Deployment</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.purchaserightbox1}>
              <span className={styles.righttextbox}>Projects</span>
              <p className={styles.p5}>Overall training will be very interactive with 5+ Projects undergoing towards this journey. Starting from building simple ReactJs app to building a real world application.</p>
              <div className={styles.kuchnahi}>
                <div className="accordion" id="accordionExampleFour">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseOne">
                        <h2 className={styles.h2nox}>Week 9</h2>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExampleFour">
                      <div className="accordion-body">
                        <ul>
                          <li>Social Media Platform</li>
                          <li>E-commerce Platform</li>
                          <li>Netflix</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nox}>
              <button className={styles.noxbtn} data-bs-toggle="modal" data-bs-target="#exampleModal">Download Syllabus</button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Just One Step To Go...</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className={styles.courseheroright}>
                        <h4 className={styles.h4}>Let's Know Each Other</h4>
                        <p className={styles.p}>Don't Worry We Don't Spam!</p>
                        <form>
                        <input className={styles.input} type="text" placeholder='First Name' required />
                        <input className={styles.input} type="email" placeholder='Email' required />
                        <input className={styles.input} type="number" placeholder='Contact Number' required />
                        <input className={styles.input} type="text" placeholder='Graduation Year' required />
                        <input type="submit" className={styles.btn} value="Download Syllabus" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
      {/* Main Courses 3rd section Page Ends  */}
    </>
  );
}

export default courses;
