import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import Countdown from '../components/countdown';
import MiniStart from '../components/ministart';
import TeamImg from '../public/Graphics5.png'
import Sec4Img from '../public/Graphics2.png'
import { FaChalkboardTeacher } from 'react-icons/fa'
import Link from 'next/link'
import { MdComputer } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { RiCommunityFill } from 'react-icons/ri'
import { FcMoneyTransfer } from 'react-icons/fc'
import { TbCertificate } from 'react-icons/tb'
import { MdSupportAgent } from 'react-icons/md'



export default function Home() {
  



  return (
    <>
      {/* Main Home Page Starts  */}
      <section className={styles.home}>
        <div className={styles.twocol}>
          <div className={styles.leftcol}>
            <div className={styles.deem}>10% OFF FOR FIRST 100 STUDENTS</div>
            <div className={styles.h3}><Typewriter options={{
                strings: ['Welcome To Reactjsofficial', 'Chasing Jobs?', 'Let Us Help You With Our React Traning Course!'],
                autoStart: true,
                loop: true,}} /></div>
            <div className={styles.h1}>Become A React.js Developer!</div>
            <div className={styles.p}>Personalized Training - Guidance from top-notch faculities - job Assistance - Internship Programs - Enhance
Skillsets Land a job of 22+ LPA Helped 1000+ Students and many more to go...</div>
            <Link href="/join/registration">
            <button className={styles.btn}>Know More</button>
            </Link>
          </div>
          <div className={styles.rightcol}>
          <div className={styles.h2}>Hurry Up! Only Few Seats Left.</div>
          <Countdown/>
          <MiniStart/>
          </div>
        </div>
      </section>
      {/* Main Home Page Ends  */}
      {/* ============================================ */}
      {/* 2nd Section Page Starts  */}
      <section className={styles.tainingabout}>
        <div className={styles.trainingaboutmaincontainer}>
          <div className={styles.leftcol2}>
            <div className={styles.deem1}>About Our Remote Training</div>
            <div className={styles.h4}>Develop your Skills, Shine Your Life</div>
            <p className={styles.p1}>Learn Advanced React Concepts With Amazing Real World Problems.</p>
            <Link href="/community"><button className={styles.btnwithback}>Read More</button></Link>
          </div>
          <div className={styles.rightcol2}>
        <div className={styles.text}>A program for everyone to master in frontend development. You definitely love to learn how professionals work on a real job. You will kick start your journey from very fundamentals, receive support from our mentors and huge community. The best way to learn with hands-on labs, practical projects, and community - done right from your browser. Build software projects like the top 1% developers and learn all the skills you need to land the best frontend developer jobs.</div>
          </div>
        </div>
        <div className={styles.trainingaboutmaincontainer}>
          <div className={styles.leftcol2}>
            <div className={styles.deemtable}>🤔 What you would find in the market?</div>
            <div className={styles.textborder}>
              <ul className={styles.ul}>
                <li className={styles.li}>UnStructured Learning Paths</li>
                <li className={styles.li}>Theory Based Learnings</li>
                <li className={styles.li}>Self Placed/ Recorded Videos</li>
                <li className={styles.li}>Not Industry Relevent!</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightcol2}>
          <div className={styles.deemtable}>😍 Why we are unique ?</div>
        <div className={styles.textborder}>
        <ul className={styles.ul}>
          <li className={styles.li}>Structured Learning Paths</li>
          <li className={styles.li}>Hands on align</li>
          <li className={styles.li}>No Recorded Videos, 100% live Training</li>
          <li className={styles.li}>Industry Relevent!</li>
        </ul>
        </div>
          </div>
        </div>
        <div className={styles.benifits}>
          <div className={styles.card}>
            <h1>90%</h1>
            <p>Placed within 6 months</p>
          </div>
          <div className={styles.card}>
            <h1>200+</h1>
            <p>hiring companies</p>
          </div>
          <div className={styles.card}>
            <h1>20LPA+</h1>
            <p>average dreamjob CTC</p>
          </div>
          <div className={styles.card}>
            <h1>92%</h1>
            <p>average salary hike</p>
          </div>
        </div>
      </section>
      {/* 2nd Section Page Ends  */}
      {/* ============================================ */}
      {/* 3rd section Page Starts  */}
      <section className={styles.section3}>
      <div className={styles.h1heading}>How Does Our Mentorship Help You Get 100% Profit?</div>
      <div className={styles.h3heading}>100% Refund Policy - <b>No Question Asked</b></div>
        <div className={styles.trainingaboutmaincontainer}>
        <div className={styles.leftcol2}>
            <Image alt="Reactjsofficial" src={TeamImg} className={styles.TeamImg} />
          </div>
          <div className={styles.rightcol2}>
          <div className={styles.textbox}>
            <div className={styles.iconmock1}><FaChalkboardTeacher/></div>
            <div className={styles.textboxright}>
            <div className={styles.h2text}>5+ PROFESSIONAL WORK-LIKE PROJECTS WITH MENTORSHIP</div>
            <div className={styles.text2}>Get support from our mentors and community and build your way to the top through highly responsive and scalable react projects.</div>
            </div>
          </div>
          <div className={styles.textbox}>
            <div className={styles.iconmock1}><MdComputer/></div>
            <div className={styles.textboxright}>
            <div className={styles.h2text}>48 HOURS OF LIVE INSTRUCTOR-LED SESSIONS</div>
            <div className={styles.text2}>Get 100% one to one session with premium well structure hands-on after every concepts to get your doubt solve instantly.</div>
            </div>
          </div>
          <div className={styles.textbox}>
            <div className={styles.iconmock1}><BiSupport/></div>
            <div className={styles.textboxright}>
            <div className={styles.h2text}>24X7 SUPPORT FROM MENTORS AND EXTRA LIVE SUPPORT WEEKLY</div>
            <div className={styles.text2}>Getting stuck while coding ?Get your all doubts resolved quickly with our all time support and extra one live session with professionals for extra guidance.</div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* 3rd section Page Ends  */}
      {/* ============================================ */}
      {/* 4th section Page Starts  */}
      <section className={styles.section4}>
        <div className={styles.twocol}>
          <div className={styles.leftcol}>
            <div className={styles.deem4}>Our Core Values</div>
            <div className={styles.h3sec4}><Typewriter options={{
                strings: ['Are You Working Professional Willing To Switch?'],
                autoStart: true,
                loop: true,}} /></div>
            <div className={styles.psec4}>We have invented and perfected the best system to learn React. A dedicated team to help you land the best oppurtunities.</div>
            <ul className={styles.ul}>
              <li className={styles.li}>ON-DEMAND REAL-TIME PROJECTS</li>
              <li className={styles.li}>EXCLUSIVE TEAM FOR PLACEMENT WITH JOB ASSISTANCE</li>
              <li className={styles.li}>LIVE DEMO INTERVIEW PREPRATION</li>
              <li className={styles.li}>RESUME BUILDING AND MOCK TEST</li>
            </ul>
          </div>
          <div className={styles.rightcol}>
          <Image alt="Reactjsofficial" src={Sec4Img} className={styles.TeamImg} />
          </div>
        </div>
        <div className={styles.benifitsmore}>
          <div className={styles.cardmore}>
          <div className={styles.iconmock1}><RiCommunityFill/></div>
            <h1 className={styles.hmocks}>100K+ COMMUNITY</h1>
            <p>Globally Connect through prople with the same goal.</p>
          </div>
          <div className={styles.cardmore}>
          <div className={styles.iconmock1}><FcMoneyTransfer/></div>
            <h1 className={styles.hmocks}>JOB ASSISTANCE</h1>
            <p>Exclusive Placement Support Team will you crack job interview.</p>
          </div>
          <div className={styles.cardmore}>
            <div className={styles.iconmock1}><TbCertificate/></div>
            <h1 className={styles.hmocks}>CERTIFICATION</h1>
            <p>Get Course Complition certificate as a full fledged React developer</p>
          </div>
          <div className={styles.cardmore}>
            <div className={styles.iconmock1}><MdSupportAgent/></div>
            <h1 className={styles.hmocks}>DOUBT SOLVING</h1>
            <p>Getting Stuck While developing? Get all your doubt resolve by our expert.</p>
          </div>
        </div>
      </section>
      {/* 4th section Page Ends  */}
      {/* ============================================ */}
      {/* 5th section Page Starts  */}
      {/* ============================================ */}
      <section className={styles.section5}>
      <h6 className={styles.h6}>How Reactjsofficial Mentorship driven Personalized Learning Work?</h6>
      <div className={styles.twocol}>
      <div className={styles.textbox}>
            <div className={styles.iconmock1}>1</div>
            <div className={styles.textboxright}>
            <div className={styles.h2text}>Optimized Your Coding Skills With Personalized Plans.</div>
            <div className={styles.text2}>Get Live Sessions and weekly plans based on your dream jobs.</div>
            </div>
          </div>
          <div className={styles.textbox}>
            <div className={styles.iconmock1}>2</div>
            <div className={styles.textboxright}>
            <div className={styles.h2text}>Industry-level Coding Assigenment.</div>
            <div className={styles.text2}>Practice Coding Questions That adopts based on your progress.</div>
            </div>
          </div>
          <div className={styles.textbox}>
            <div className={styles.iconmock1}>3</div>
            <div className={styles.textboxright}>
            <div className={styles.h2text}>Exclusive doubts-solving team.</div>
            <div className={styles.text2}>Getting stucked while coding? Get All Your Doubts Resolve.</div>
            </div>
          </div>
          <div className={styles.textbox}>
            <div className={styles.iconmock1}>4</div>
            <div className={styles.textboxright}>
            <div className={styles.h2text}>Grow with 100k community strength.</div>
            <div className={styles.text2}>Get Top level live sessions with industry experts.</div>
            </div>
          </div>
          </div>
          <hr />
          <h2>Our Leatest Blogs</h2>
          <hr />
          <div className={styles.blogsection}>
            <div className={styles.blogcard}>
              <h4><b>TOP 5 PROJECTS TO BUILD IN REACTJS THAT WILL HELP YOU LAND JOBS</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta doloremque nesciunt hic, iure tempore aperiam voluptatem deleniti ullam. Doloremque eos eius quam soluta aut! Vel doloremque numquam error quidem!</p>
              <button className={styles.btnwithback}>Read More</button>
              </div>
            <div className={styles.blogcard}>
            <h4><b>TOP 5 REASONS WHY YOU SHOULD LEARN REACTJS TODAY!</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta doloremque nesciunt hic, iure tempore aperiam voluptatem deleniti ullam. Doloremque eos eius quam soluta aut! Vel doloremque numquam error quidem!</p>
              <button className={styles.btnwithback}>Read More</button>
            </div>
            <div className={styles.blogcard}>
            <h4><b>THE BEST WAY TO LEARN REACTJS IN 2022 - COMPLETE ROADMAP</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta doloremque nesciunt hic, iure tempore aperiam voluptatem deleniti ullam. Doloremque eos eius quam soluta aut! Vel doloremque numquam error quidem!</p>
              <button className={styles.btnwithback}>Read More</button>
            </div>
          </div>
      </section>
      {/* 5th section Page Ends  */}
      {/* ============================================ */}
    </>
  )
}
