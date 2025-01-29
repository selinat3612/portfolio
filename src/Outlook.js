import React, { useEffect } from 'react';
import NavbarComponent from './NavbarComponent';
import outlookimg from './imgs/outlook.png';
import casestudy from './imgs/casestudy.jpg';
import './AmazonInternship.css';

const Outlook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div>
    <div className="header-image-container">
        <img src={outlookimg} className="header-image" alt="outlook" />
    </div>
    <div className="internship-container">
      <h1 style={{textAlign: 'center', marginTop: '10%'}}>Outlook Case Study</h1>
      <h2 style={{textAlign: 'center', marginBottom: '8%', fontWeight: 'lighter'}}>Analysis of Outlook for Grad UXD Course</h2>
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>August - Dec 2023</p>
          </div>
          <div className="detail-item">
            <h2>Role:</h2>
            <p>UX Researcher & Designer</p>
          </div>
          <div className="detail-item">
            <h2>Tools:</h2>
            <p>Figma</p>
          </div>
        </div>

      </div>
      <img src={casestudy} className='outlook'></img>

  </div>
);
};

export default Outlook;
