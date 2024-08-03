import React from 'react';
import NavbarComponent from './NavbarComponent';
import optumimg from './imgs/optum.png';
import './AmazonInternship.css';

const OptumInternship = () => (
  <div>
    <NavbarComponent />
    <div className="header-image-container">
        <img src={optumimg} className="header-image" alt="Optum" />
        <div className="header-overlay">
            <h1>Optum Internship</h1>
        </div>
    </div>
    <div className="internship-container">
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>Jun - Aug 2023</p>
          </div>
          <div className="detail-item">
            <h2>Role:</h2>
            <p>SWE Intern</p>
          </div>
          <div className="detail-item">
            <h2>Tools:</h2>
            <p>React.js, GraphQL, TypeScript, Postman</p>
          </div>
        </div>
        <div className="overview-section">
          <h2>Overview</h2>
          <p>
            During the summer of 2023, I had the opportunity to step outside of my designer role and into a full-stack team. Although timid at first, I made meaningful contributions especially with the frontend, spearheading the user-centered mindset and ensuring we met the end user's needs. I also had the opportunity to join all of United Healthcare's interns in person for a week in Minneapolis, MN and learn more about the larger business values.
        </p>
        </div>
        <div className="overview-section">
          <h2>Project</h2>
          <p>
          My team created a data validation tool that flagged discrepancies between Optum's customer portals and the back-end API data. We first plugged the API into the code using Postman and querying. Without proper documentation on the previous contract auditor, we also familiarized ourselves with proprietary APIs and working with secrets. Then, once all data was queried into the code, we were able to start mapping through data to start validation of IDs and more information. By constantly updating the front-end to display the validations in a meaningful way, we were able to display matches and non-matches in a table with checks and xs and further filtering to help end users maximize the tool. 
          </p>
        </div>
        <div className="overview-section">
          <h2>Key Takeaways</h2>
          <p>
          In my first role as a software engineering intern, I was timid in my capacity to contribute significantly to an ambitious MVP. Despite this, I successfully stepped up to address areas where I could fill gaps and make valuable contributions to the team. Having a background in Human-Computer Interaction, I was able to offer a user-centered mindset, working closely with the product team and meeting with the end user to gain feedback and develop further feature refinement. In gaining front-end experience, I also learned how to communicate with the back-end developers and learned the importance of fully understanding front and back end for effective collaboration, problem-solving, informed decision-making, and debugging. 
          </p>
        </div>
      </div>
  </div>
);

export default OptumInternship;
