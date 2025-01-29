// AmazonInternship.js
import React, {useEffect} from 'react';
import NavbarComponent from './NavbarComponent';
import AmazonRoboticsImage from './imgs/amazon.png';
import './AmazonInternship.css';
import design from './imgs/ardesign.jpg';
import brainstorm from './imgs/brainstorm.png';
import low from './imgs/lowFId.png';
import high from './imgs/highFid.png';
import demo from './imgs/demo.mov';
import top from './imgs/topScreen.JPG';
import main from './imgs/mainScreen.JPG';
import truck from './imgs/primeTruck.png';
import ioDesign from './imgs/ioDesign.jpg';
import demo2 from './imgs/demo2.mp4';

const AmazonInternship = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
  <div>
    <NavbarComponent />
    <div className="header-image-container">
        <img src={AmazonRoboticsImage} className="header-image" alt="AR" />
    </div>
    <div className="internship-container">
      <h1 style={{textAlign: 'center', paddingBottom: '5%', marginTop: '5%'}}>Amazon Robotics Internship</h1>
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration</h2>
            <p>May - August 2024</p>
          </div>
          <div className="detail-item">
            <h2>Role</h2>
            <p>UX Design Intern</p>
          </div>
          <div className="detail-item">
            <h2>Team</h2>
            <p>Innovation Lab</p>
          </div>
          <div className="detail-item">
            <h2>Tools</h2>
            <p>Figma, React, ROS2</p>
            <p>Javascript, Typescript</p>
          </div>
        </div>
        <div className="overview-section" style={{marginTop: '5%'}}>
          <h1>Overview</h1>
          <p>
            During the summer of 2024, I interned at Amazon Robotic's Innovation Lab as a UX Design Intern. Collaborating with engineers and scientists on two projects, I aided in the design and implementation of user interfaces. I also worked with an amazing team that was incredibly helpful in my learning and onboarding to the team. The WIWT (Women in Workcell Tech) also provided me a safe space to snack and chat on Wednesdays and meet new inspiring women.
          </p>
        </div>
        <div className="overview-section" style={{marginTop: '5%'}}>
          <h1>Projects</h1>
          <div style={{marginTop: '3%'}}>
            <div style={{backgroundColor: '#FF914D', borderRadius: '10px', marginTop: '5%', paddingBottom: '5%'}}>
              <h1 style={{textAlign: 'center', paddingTop: '5%', color: '#fff'}}>Avatar Pick</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '5%', gap: '5%'}}>
              <h1>What is it?</h1>
              <p style={{marginTop: '2%'}}>Avatar Pick is a remote robotic teleoperation system designed to make work more efficient. A user could be anywhere in the world and control a robot in a warehouse by simply putting on gloves, calibrating, and operating. My task was to create an intuitive user interface for the user.</p>
            </div>
            <div style={{backgroundColor: '#FFBC80', borderRadius: '10px', paddingTop: '5%', marginTop: '5%', paddingBottom: '5%'}}>
              <h1 style={{textAlign: 'center'}}>What's the problem?</h1>
              <p style={{marginTop: '3%', marginLeft: '10%', marginRight: '10%', textAlign: 'center'}}>Since Avatar Pick was in its early stages of R&D, the current screen interface was a camera stream with debugging information overlayed. The project needed a user-centric interface that only has the information the user needs during operation for smooth teleoperation.</p>
            </div>
            <div className="overview-section">
            <h1 style={{textAlign: 'center'}}>Design Process</h1>
              <img src={design} className="header-image" alt="design process" />
            </div>
            <div className="overview-section" style={{marginTop: '-2%'}}>
              {/* <h4 style={{textAlign: 'center'}}>Ideate</h4> */}
              <h1 style={{textAlign: 'center', marginBottom: '2%'}}>Brainstorm</h1>
              <p style={{textAlign: 'center'}}>I led a brainstorming session and used a map method to better visualize areas for improvement.</p>
              <img src={brainstorm} className="header-image" alt="brainstorm" />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%', backgroundColor: '#FFBC80', borderTopLeftRadius: '10px',borderTopRightRadius: '10px', marginTop: '5%', padding: '5%'}}>
                <h1 style={{}}>Research</h1>
                <p style={{}}>From there, I conducted research on gaming interfaces, other robot teleoperation interfaces, and surgical robotic interfaces. In this stage, I mainly researched layout ideas, components, visual cues, and softwares.</p>
              </div>
            <div className="overview-section" style={{display: 'flex', flexDirection: 'row', gap: '9%', backgroundColor: '#FFBC80', borderBottomLeftRadius: '10px',borderBottomRightRadius: '10px', padding: '5%', marginTop: '-5%'}}>
              <h1 style={{}}>User Testing</h1>
              <p style={{}}>I led seven user testing sessions to assess the current state of usability of the system. I also used GazeRecorder for more accurate analysis of the user's thought process.</p>
            </div>
            <h1 style={{textAlign: 'center', marginTop: '5%'}}>Prototype</h1>
          </div>
        </div>
      </div>
            <div className="overview-section" style={{paddingLeft: '5%', paddingRight: '5%', marginTop: '5%'}}>
              <div className='imgmobile'>
                <img src={low}  className="imgstyle" alt="low fidelity" />
                <img src={high} className="imgstyle" alt="high fidelity" />
              </div>
            </div>
            <div className="io" >
              <h1 style={{textAlign: 'center', marginTop: '5%'}}>Implementation and Final Product</h1>
              <p style={{textAlign: 'center'}}>I implemented the app using React.js, GStreamer, and ROS2. For components, I originally used Meridian Amazon Design System but then switched to Bootstrap for more flexibility. </p>
              <video src={demo} width="100%" height="100%" controls="controls" autoplay="true" style={{display: 'block', margin: '0 auto'}}/>
              <video src={demo2} width="100%" height="100%" controls="controls" autoplay="false" style={{display: 'block', margin: '0 auto', paddingTop: '5%'}}/>
            </div>
          <div className="io">
            <div style={{backgroundColor: '#00487C', borderRadius: '10px', marginTop: '20%', paddingBottom: '5%'}}>
              <h1 style={{textAlign: 'center', paddingTop: '5%', color: '#fff'}}>IO (Hyper-organized Van)</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '5%', gap: '5%'}}>
                <h1>What is it?</h1>
                <p style={{marginTop: '2%'}}>IO is a hyper-organized in-van delivery system. Designed for SSD (sub-same day deliveries) within Amazon, delivery drivers have a streamlined last mile experience with organized in-van racks ready to be delivered with a simple ARID scan.</p>
            </div>
            <div style={{backgroundColor: '#1399FF', borderRadius: '10px', paddingTop: '5%', marginTop: '5%', paddingBottom: '5%'}}>
              <h1 style={{textAlign: 'center', color: '#fff'}}>What's the problem?</h1>
              <p style={{marginTop: '3%', marginLeft: '10%', marginRight: '10%', textAlign: 'center', color: '#fff'}}>The previous UI was designed to deliver one package at a time. Therefore, inside the van, the driver saw the screen and picked the item out. However, when there are sub-stops or multiple small packages, drivers want more freedom to pick quicker. </p>
            </div>
            <div className="overview-section">
              <h1 style={{textAlign: 'center'}}>Design Process</h1>
              <img src={ioDesign} className="header-image" alt="design process" />
            </div>
            <div className="overview-section" style={{marginTop: '5%'}}>
              <h1 style={{textAlign: 'center', marginBottom: '2%'}}>Understand & Ideate</h1>
              <p style={{textAlign: 'center', paddingLeft: '5%', paddingRight: '5%'}}>Understanding all happy and unhappy paths that a delivery driver encounters in their experience, I brainstormed for gaps in the UI and for the new use case of several deliveries at once. There were also two screens in my design, a mains screen with all information present. And a top screen, with only the most critical information during seeking.</p>
            </div>
            
            <div style={{backgroundColor: '#1399FF', borderRadius: '10px', paddingTop: '5%', marginTop: '5%', paddingBottom: '5%'}} className='imgmobile'>
             
              <div>
                <h1 style={{textAlign: 'center', color: '#fff'}}>Ride Along!</h1>
                <p style={{color: '#fff', marginTop: '3%', marginLeft: '10%', marginRight: '10%', textAlign: 'center'}}>To understand what information is important to delivery drivers, I put myself in the shoes of a driver for a day! My main takeaway from this experience was how strenuous the delivery process is. There's many loopholes and drivers don't end up finding their training useful. I gained valuable information from this to truly understand the user experience I wanted to craft.</p>
              </div>
              <img src={truck} alt="truck" className='imgstyle'></img>
              </div>
            <div className="overview-section" style={{marginTop: '5%'}}>
              <h1 style={{textAlign: 'center', marginBottom: '2%'}}>Prototype & Implement</h1>
              <p style={{textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>I designed several high-fidelity wireframes and presented them to the team, iteratively fixing designs based on all possible paths. I then implemented the frontend using React and TypeScript and aided in implementation with Nitro, a docker wrapper for production.</p>
            </div>
          </div>
          <div className="overview-section" style={{paddingLeft: '5%', paddingRight: '5%', marginTop: '3%'}}>
              <div className="imgmobile" style={{}}>
                <img src={top} className="imgstyle" alt="low fidelity" />
                <img src={main} className="imgstyle" alt="high fidelity" />
              </div>
          </div>
            <div className="io2" style={{}}>
              <h1 style={{marginBottom: '2%'}}>Key Takeaways</h1>
              <p style={{}}>This summer, I not only implemented two UIs where I spearheaded the design process and carefully implemented the frontend, but I also grew immensley as a person and peer. Be curious and learn is one of Amazon's core values that I lived by daily. Learning ROS2 was tricky at first, but being curious and wanting to learn allowed me to understand more about the project than just the design. Furthermore, working on IO gave me excitement as they were preparing for on-road testing in the next few months. It was thrilling to work on a team that had critical and time-sensitive deadlines. I gave a successfull end-of-internship demo to AR's Chief Technologist, Tye Brady, who was incredibly excited by the outcome!</p>
            </div>
      </div>
);
};

export default AmazonInternship;
