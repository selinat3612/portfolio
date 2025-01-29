// AmazonInternship.js
import React, {useEffect} from 'react';
import NavbarComponent from './NavbarComponent';
import CrashForces from './imgs/CrashForcesLogo1.png';
import cf1 from './imgs/cf1.png';
import cf2 from './imgs/cf2.png';
import './AmazonInternship.css';

const Crashforces = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div>
    <NavbarComponent />
    {/* <div style={{}}>
        <img src={CrashForces} className="Crashforces" style={{width: '60%', marginLeft: '20%', marginTop: '-15%'}} alt="Selina"></img>
    </div> */}
    <div className="header-image-container">
        <img src={CrashForces} className="header-image" alt="CF" />
        <div className="header-overlay">
            <h1>Crashforces Startup</h1>
        </div>
    </div>
    <div className="internship-container">
        {/* <div className="header-section" style={{marginBottom: '3%'}}>
          <h1>Crashforces Startup</h1>
        </div> */}
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>Oct 2023 - March 2024</p>
          </div>
          <div className="detail-item">
            <h2>Role:</h2>
            <p>UX Designer</p>
          </div>
          <div className="detail-item">
            <h2>Tools:</h2>
            <p>Figma</p>
          </div>
        </div>
        <div className="overview-section" style={{marginTop: '5%'}}>
          <h2>Overview</h2>
          <p>
          In my role, I crafted a dynamic and fitting logo along with a cohesive color scheme to enhance the project's visual appeal. I developed intuitive wireframes starting from low-fidelity mockups, ensuring a clear and functional design. To further enrich the user experience, I illustrated engaging art for the landing page. Consistency was key, so I created a CSS file to maintain uniformity across the front end. Throughout the project, I prioritized communication, holding weekly and daily meetings to optimize task efficiency and ensure alignment with the team’s goals.</p>
        </div>
        <div className="overview-section" style={{marginTop: '5%'}}>
          <h2>Project & Key Takeaways</h2>
          <p>
          In the dynamic realm of startups, I quickly learned that my role as a UX Designer was not just about creating interfaces, but about sculpting a seamless experience from the ground up. Collaborating closely with a multidisciplinary team, particularly the mechanical and software engineers, was the cornerstone of our journey towards user-centric design for CrashForces.
          </p>
          <p>
          It all began when I got an email with the subject "IUX Job Opportunity for Fall Semester." With a craving for more on my plate I thought there's nothing to lose here. I joined a call with the founder, who was an alum at my school, and we connected on experiences at the school and about the position. Throughout the process, we kept moving forward in the screening and I thought to myself, wow they really trust a 20 year old with their startup?! But I soon realized trust was going to be much more meaningful in this sense. From day 1 of working on this project, I was given full trust that I could provide a fresh perspective and a culmination of my previous experiences to create intuitive wireframes for this startup. And because of that, I gave it 110%. 
          </p>
          <p>
          To really understand the target market and get myself caught up in the work, I delved deep into documents, user personas, and journey maps. Each piece of insight became a fundamental piece of guidance that I used to tailor the unique needs of each user. Using Figma, I embarked on a journey of iterative refinement. Weekly meetings with the founder and daily communication ensured that every update and action item was meticulously addressed. Much of this process felt like a dance, a back and forth, tossing around ideas and growing creativity. I felt full trust from the founder to go about the design and it was incredibly refreshing to have this level of ownership. 
          </p>
          <p>
          The journey didn't end with a working prototype on Figma. Collaborating with the software engineer, we started bridging the gap between wireframes and front-end reality. I crafted a simple CSS file, ensuring consistency across the website. With each iteration, I embraced the opportunity to refine, enhance, and innovate. Whether it was tweaking interactions for smoother navigation or adding illustrations to enhance engagement.
          </p>
          <p>
          As I reflect on this journey, I am reminded that great design is not just about pixels and code; it's about empathy, collaboration, and continuous iteration. Being trusted with significant responsibility, especially as a college student, was incredibly rewarding. It provided a real-world application and only validated my skills and abilities. The trust shaped me to foster a sense of accountability and motivated me to excel. The process, both highs and lows, allowed me to see the progress and accomplishments of the company, providing an invaluable experience for my future career.
          </p>
        </div>
        <div style={{display: 'flex', gap: '5%', marginLeft: '5%', marginTop: '5%'}}>
        <img src={cf1} className="header-image" alt="CF" style={{width: '50%'}}/>
        <img src={cf2} className="header-image" alt="CF" style={{width: '40%'}}/>
        </div>
      </div>
  </div>
);
};
export default Crashforces;
