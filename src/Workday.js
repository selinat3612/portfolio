import React, { useEffect, useState } from 'react';
import { Modal } from "@mantine/core";
import NavbarComponent from './NavbarComponent';
import workdayimg from './imgs/workday.png';
import oldHome from './imgs/oldHomepage.png';
import oldAcademics from './imgs/oldAcademics.png';
import oldCourses from './imgs/oldCourses.png';
import oldSched from './imgs/oldSchedules.png';
import lowfiad from './imgs/Academic Advising.png';
import lowfiplr from './imgs/Planning & Registration.png';
import lowfiho from './imgs/HomepageWireframe.png';
import designSystem from './imgs/Design System.png';
import hiho from './imgs/Homepage.png';
import hisched from './imgs/Saved Schedules.png';
import hico from './imgs/Find Courses.png';
import moho from './imgs/Homepage Mobile.png';
import moho1 from './imgs/Homepage Mobile – 1.png';
import moho2 from './imgs/Homepage Mobile – 2.png';
import './AmazonInternship.css';

const WorkdayProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };
  
  const closeModal = () => {
      setModalOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    oldHome,
    oldAcademics,
    oldCourses,
  ];


  return (
    <div>
      <div className="header-image-container">
        <img src={workdayimg} className="header-image" alt="Workday" />
        <div className="header-overlay">
        </div>
      </div>
      <div className="internship-container">
        <h1 style={{textAlign: 'center', paddingBottom: '5%', marginTop: '8%'}}>Workday Redesign</h1>
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>January - February 2025</p>
          </div>
          <div className="detail-item">
            <h2>Role:</h2>
            <p>UX/UI Designer</p>
          </div>
          <div className="detail-item">
            <h2>Tools:</h2>
            <p>Adobe XD</p>
          </div>
        </div>
        
        <div className="overview-section">
          <h2>What's Workday?</h2>
          <p style={{fontWeight: 'lighter'}}>
            If you haven't had the pleasure of using Workday yet, I am jealous of you! Workday is a platform used by businesses, schools, and companies worldwide to help manage their HR. Though it's supposed to make employees' and students' lives easier, the UI is far from intuitive. This redesign targets everything that makes Workday iritable.
          </p>
        </div>
        <h1 style={{textAlign: 'center', paddingTop: '5%'}}>What's the problem?</h1>
        <h2 style={{textAlign: 'center', paddingTop: '2%', color: '#3069b5'}}>Layered navigation and human-centered design</h2>
        <div className="overview-section">
          <h2>Problem</h2>
          <p style={{fontWeight: 'lighter'}}>
            Since Workday is used in daily life for work and school activities, it should never provide frustration as that could negatively correlate to our work/life balance-- and who would want that? I've used Workday first hand as a student to register for classes, pay for tuition, and see my schedule. I've also used it as an employee, logging my hours and checking my statements. The main problem is site navigation, it always takes way more clicks than necessary to get where you want. Workday is also lacking its personality! Other than changing the logo, it needs updated aesthetics to match the world today.
          </p>
        </div>
        <div className="overview-section">
          <h2>Project Vision</h2>
          <p style={{fontWeight: 'lighter'}}>
            Taking a full step into UI design, I wanted to focus on Workday's visuals aesthetics and site heirarchy to develop new designs. My redesign focuses on a student's perspective, as finding resources as a student is cumbersome enough, an inviting and intuitive UI is crucial for Workday.
          </p>
        </div>
        {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} style={modalOverlayStyles}>
          <div className="modal-content" style={modalContentStyles}>
            <img src={selectedImage} style={{ width: '100%', height: '100%' }} alt="Enlarged poster" />
          </div>
        </div>
      )}
        <div className="overview-section">
          <h2 style={{marginBottom: '5%'}}>Current Website</h2>
        </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '1%', justifyContent: 'center', cursor: 'zoom-in', paddingLeft: '10%', paddingRight: '10%'}}>
          <img src={oldHome} onClick={() => handleImageClick(oldHome)}  className="header-image" alt="home" style={{ height: 'auto', width: '30%', display: 'block',}}/>
          <img src={oldAcademics} onClick={() => handleImageClick(oldAcademics)} className="header-image" alt="academics" style={{ height: 'auto', width: '30%', display: 'block'}}/>
          <img src={oldSched} onClick={() => handleImageClick(oldSched)} className="header-image" alt="schedule" style={{ height: 'auto', width: '30%', display: 'block'}}/>
        </div>
        <div className="internship-container">
        <div className="overview-section">
          <h2>Low-Fidelity Wireframes</h2>
          <p style={{fontWeight: 'lighter'}}>
            I started with low-fidelity wireframes of the exact page layout of current Workday. Then, started by adjusting the visual heirarchy to a more intuitive layout. From there, I also realized the site navigation could be improved, specifically for students, with one main navbar that they would go to for all their needs.
          </p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '2%', justifyContent: 'center', marginTop: '5%', cursor: 'zoom-in'}}>
          <img src={lowfiho} onClick={() => handleImageClick(lowfiho)} className="header-image" alt="lowfi homepage" style={{ height: 'auto', width: '40%', display: 'block',}}/>
          <img src={lowfiad} onClick={() => handleImageClick(lowfiad)} className="header-image" alt="lowfi academics" style={{ height: 'auto', width: '40%', display: 'block'}}/>
          <img src={lowfiplr} onClick={() => handleImageClick(lowfiplr)} className="header-image" alt="lowfi planning" style={{ height: 'auto', width: '40%', display: 'block'}}/>
          </div>
        </div>
        <div className="overview-section">
          <h2>Design System</h2>
          <p style={{fontWeight: 'lighter'}}>
            In creating a design system, I wanted a look that matched WPI's aesthetic but was still versatile enough for Workday to be used by companies worldwide. With this design system, Workday just has to change the primary color. 
          </p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '2%', justifyContent: 'center', marginTop: '5%', cursor: 'zoom-in'}}>
          <img src={designSystem} onClick={() => handleImageClick(designSystem)} className="header-image" alt="lowfi homepage" style={{ height: 'auto', width: '80%', display: 'block',}}/>
          </div>
        </div>
        <div className="overview-section">
          <h2>High-Fidelity Wireframes</h2>
          <p style={{fontWeight: 'lighter'}}>
            In my first role as a software engineering intern, I was timid in my capacity to contribute significantly to an ambitious MVP. Despite this, I successfully stepped up to address areas where I could fill gaps and make valuable contributions to the team. Having a background in Human-Computer Interaction, I was able to offer a user-centered mindset, working closely with the product team and meeting with the end user to gain feedback and develop further feature refinement. In gaining front-end experience, I also learned how to communicate with the back-end developers and learned the importance of fully understanding front and back end for effective collaboration, problem-solving, informed decision-making, and debugging.
          </p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '2%', justifyContent: 'center', marginTop: '5%', cursor: 'zoom-in', paddingLeft: '5%', paddingRight: '5%'}}>
          <img src={hiho} onClick={() => handleImageClick(hiho)} className="header-image" alt="lowfi homepage" style={{ height: 'auto', width: '50%', display: 'block',}}/>
          <img src={hisched} onClick={() => handleImageClick(hisched)} className="header-image" alt="lowfi academics" style={{ height: 'auto', width: '50%', display: 'block'}}/>
          <img src={hico} onClick={() => handleImageClick(hico)} className="header-image" alt="lowfi planning" style={{ height: 'auto', width: '50%', display: 'block'}}/>
          </div>
        </div>
        <div className="overview-section">
          <h2 style={{color: '#3069b5'}}>Brownie Points!</h2>
          <p style={{fontWeight: 'lighter'}}>
            Mobile wireframes to reflect changes.
          </p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '2%', justifyContent: 'center', marginTop: '5%'}}>
            <img src={moho} className="header-image" alt="lowfi homepage" style={{ width: '30%' }} />
            <img src={moho1} className="header-image" alt="lowfi academics" style={{ width: '30%' }} />
            <img src={moho2} className="header-image" alt="lowfi planning" style={{ width: '30%' }} />
          </div>
        </div>
        </div>
    </div>
  );
};


const modalOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',  // Cover the full width of the viewport
  height: '100%',  // Cover the full height of the viewport
  backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Keep the dark overlay
  display: 'flex',  // Use flexbox to center the modal
  justifyContent: 'center',  // Horizontally center
  alignItems: 'center',  // Vertically center
};

const modalContentStyles = {
padding: '20px',
borderRadius: '8px',
maxWidth: '60vw',  // Maximum width is 90% of the viewport width
maxHeight: '60vh',  // Maximum height is 90% of the viewport height
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
};

export default WorkdayProject;
