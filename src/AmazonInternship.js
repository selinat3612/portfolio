// AmazonInternship.js
import React from 'react';
import NavbarComponent from './NavbarComponent';
import AmazonRoboticsImage from './imgs/amazon.png';
import './AmazonInternship.css';

const AmazonInternship = () => (
  <div>
    <NavbarComponent />
    <div className="header-image-container">
        <img src={AmazonRoboticsImage} className="header-image" alt="AR" />
        <div className="header-overlay">
            <h1>Amazon Robotics Internship</h1>
        </div>
    </div>
    <div className="internship-container" style={{padding: '10%'}}>
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>May - August 2024</p>
          </div>
          <div className="detail-item">
            <h2>Role:</h2>
            <p>UX Design Intern</p>
          </div>
          <div className="detail-item">
            <h2>Team:</h2>
            <p>Innovation Lab</p>
          </div>
          <div className="detail-item">
            <h2>Tools:</h2>
            <p>Figma, React, Javascript, Typescript</p>
          </div>
        </div>
        <div className="overview-section" style={{marginTop: '5%'}}>
          <h2>Overview</h2>
          <p>
            During the summer of 2022, I had the opportunity to intern at Amazon. I was a part of the Operations organization, specifically on the Amazon Warehousing and Distribution team. Amazon Warehousing and Distribution offers various types of logistical and supply chain support to customers, such as providing inventory space in warehouses and transporting inventory from warehouses to fulfillment centers.
          </p>
          <p>
            My intern project centered around a new service for enterprise customers who may be interested in using Amazon’s warehouse services. As the primary designer on the team, I was responsible for designing the new experience, and I worked closely with the Product Manager to define and prioritize the product features that would best serve the customers.
          </p>
        </div>
        <div className="overview-section" style={{marginTop: '5%'}}>
          <h2>Projects</h2>
          <p>
          Because of NDA restrictions, I am unable to show my work on this page.           </p>
        </div>
        <div className="overview-section" style={{marginTop: '5%'}}>
          <h2>Key Takeaways</h2>
          <p>
            During the summer of 2022, I had the opportunity to intern at Amazon. I was a part of the Operations organization, specifically on the Amazon Warehousing and Distribution team. Amazon Warehousing and Distribution offers various types of logistical and supply chain support to customers, such as providing inventory space in warehouses and transporting inventory from warehouses to fulfillment centers.
          </p>
          <p>
            My intern project centered around a new service for enterprise customers who may be interested in using Amazon’s warehouse services. As the primary designer on the team, I was responsible for designing the new experience, and I worked closely with the Product Manager to define and prioritize the product features that would best serve the customers.
          </p>
        </div>
      </div>
  </div>
);

export default AmazonInternship;
