import React, { useEffect } from 'react';
import NavbarComponent from './NavbarComponent';
import optumimg from './imgs/optum.png';
import designProcess from './imgs/optumDesignProcess.png';
import './AmazonInternship.css';

const OptumInternship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div className="header-image-container">
        <img src={optumimg} className="header-image" alt="Optum" />
        <div className="header-overlay">
        </div>
      </div>
      <div className="internship-container">
        <h1 style={{textAlign: 'center', paddingBottom: '5%', marginTop: '8%'}}>Data Validation Tool</h1>
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration:</h2>
            <p>June - August 2023</p>
          </div>
          <div className="detail-item">
            <h2>Role:</h2>
            <p>Frontend Engineer</p>
            <p>UX Designer</p>
          </div>
          <div className="detail-item">
            <h2>Tools:</h2>
            <p>React.js,  GraphQL</p>
            <p>TypeScript,  Postman</p>
          </div>
        </div>
        <div className="overview-section">
          <h2>Internship Overview</h2>
          <p style={{fontWeight: 'lighter'}}>
            During the summer of 2023, I had the opportunity to step outside of my designer role and into a full-stack team. Although timid at first, I made meaningful contributions especially with the frontend, spearheading the user-centered mindset and ensuring we met the end user's needs. I also had the opportunity to join all of United Healthcare's interns in person for a week in Minneapolis, MN and learn more about the larger business values.
          </p>
        </div>
        <h1 style={{textAlign: 'center', paddingTop: '5%'}}>What's the big idea?</h1>
        <h2 style={{textAlign: 'center', paddingTop: '2%', color: '#ff612b'}}>Insurance claims.</h2>
        <div className="overview-section">
          <h2>Problem</h2>
          <p style={{fontWeight: 'lighter'}}>
            Have you ever received incorrect health insurance benefits and had to file a claim? 
          </p>
          <p style={{fontWeight: 'lighter'}}>
            So have I, and many other customers around the world. A main reason behind this is because data isn't being checked for accuracy when pushed onto a customer's portal. It's a lose-lose situation for both the customer and insurance provider. 
          </p>
        </div>
        <div className="overview-section">
          <h2>Project Vision</h2>
          <p style={{fontWeight: 'lighter'}}>
            Create a data validation tool to be used by internal employees to flag discrepancies between customer portals and API data. As the UX lead, I wanted to develop an intuitive tool that would be more efficient, accurate, and consistent for their day to day checks rather than manually checking mismatches.
          </p>
        </div>
        <div className="overview-section">
          <h2 style={{}}>Design Process</h2>
        </div>
        </div>
        <img src={designProcess} className="header-image" alt="Design Process" style={{ height: 'auto', width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
        <div className="internship-container">
        <div className="overview-section">
          <h2>Process</h2>
          <p style={{fontWeight: 'lighter'}}>
           We first plugged the API into the code using Postman and querying. Without proper documentation on the previous contract auditor, we also familiarized ourselves with proprietary APIs and working with secrets. Then, once all data was queried into the code, we were able to start mapping through data to start validation of IDs and more information. By constantly updating the front-end to display the validations in a meaningful way, we were able to display matches and non-matches in a table with checks and xs and further filtering to help end users maximize the tool.
          </p>
        </div>
        <div className="overview-section">
          <h2>Impact</h2>
          <p style={{fontWeight: 'lighter'}}>
            My team successfully created a data validation tool that flags discrepancies between Optum's customer portals and the back-end API data. Not only will this directly impact consumers, as their benefits and plan information will be accurate on their portal, but it also prevents billing errors and reduces cost management for Optum. Furthermore, customer satisfaction is met and more trust is enabled, positively impacting customer retention. 
          </p>
        </div>
        <div className="overview-section">
          <h2>Key Takeaways</h2>
          <p style={{fontWeight: 'lighter'}}>
            In my first role as a software engineering intern, I was timid in my capacity to contribute significantly to an ambitious MVP. Despite this, I successfully stepped up to address areas where I could fill gaps and make valuable contributions to the team. Having a background in Human-Computer Interaction, I was able to offer a user-centered mindset, working closely with the product team and meeting with the end user to gain feedback and develop further feature refinement. In gaining front-end experience, I also learned how to communicate with the back-end developers and learned the importance of fully understanding front and back end for effective collaboration, problem-solving, informed decision-making, and debugging.
          </p>
        </div>
        </div>
    </div>
  );
};

export default OptumInternship;
