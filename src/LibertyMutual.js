import React from 'react';
import NavbarComponent from './NavbarComponent';
import liberty from './imgs/libertymutual.png';
import './AmazonInternship.css';

const LibertyMutual = () => (
  <div>
    <NavbarComponent />
    <div className="header-image-container">
        <img src={liberty} className="header-image" alt="liberty mutual" />
        <div className="header-overlay">
            <h1>Liberty Mutual Internship</h1>
        </div>
    </div>
    <div className="internship-container">
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>Jun - Aug 2022</p>
          </div>
          <div className="detail-item">
            <h2>Role:</h2>
            <p>TechStart Intern</p>
          </div>
          <div className="detail-item">
            <h2>Tools:</h2>
            <p>Heap Products Analytics, SRM Ticketing, Figma</p>
          </div>
        </div>
        <div className="overview-section">
          <h2>Overview</h2>
          <p>
            During the summer of 2022, I had the opportunity to intern at Amazon. I was a part of the Operations organization, specifically on the Amazon Warehousing and Distribution team. Amazon Warehousing and Distribution offers various types of logistical and supply chain support to customers, such as providing inventory space in warehouses and transporting inventory from warehouses to fulfillment centers.
          </p>
          <p>
            My intern project centered around a new service for enterprise customers who may be interested in using Amazon’s warehouse services. As the primary designer on the team, I was responsible for designing the new experience, and I worked closely with the Product Manager to define and prioritize the product features that would best serve the customers.
          </p>
        </div>
        <div className="overview-section">
          <h2>Projects</h2>
          <p>
            Because of NDA restrictions, I am unable to show my work on this page.
          </p>
        </div>
        <div className="overview-section">
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

export default LibertyMutual;
