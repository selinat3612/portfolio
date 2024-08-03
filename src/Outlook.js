import React from 'react';
import NavbarComponent from './NavbarComponent';
import outlookimg from './imgs/outlook.png';
import casestudy from './imgs/casestudy.jpg';
import './AmazonInternship.css';

const Outlook = () => (
  <div>
    <NavbarComponent />
    <div className="header-image-container">
        <img src={outlookimg} className="header-image" alt="outlook" />
        <div className="header-overlay">
            <h1>UXD Course Project</h1>
        </div>
    </div>
    <div className="internship-container">
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>Aug - Dec 2023</p>
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
        <img src={casestudy} style={{ width: '80%', marginLeft: '10%'}}></img>

      </div>
  </div>
);

export default Outlook;
