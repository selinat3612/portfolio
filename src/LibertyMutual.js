import React, { useEffect } from 'react';
import NavbarComponent from './NavbarComponent';
import liberty from './imgs/libertymutual.png';
import './AmazonInternship.css';
import designprocess from './imgs/lmDesign.jpg';
import mockup from './imgs/atlasMockup.jpg';
import atlas from './imgs/atlas.jpg';

const LibertyMutual = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div>
    <div className="header-image-container">
        <img src={liberty} className="header-image" alt="liberty mutual" />
    </div>
    <div className="internship-container">
     <h1 style={{textAlign: 'center', paddingBottom: '5%'}}>Internal Website Analytics</h1>
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration</h2>
            <p>June - August 2022</p>
          </div>
          <div className="detail-item">
            <h2>Role</h2>
            <p>TechStart Intern</p>
          </div>
          <div className="detail-item">
            <h2>Tools</h2>
            <p>Heap Products Analytics</p>
            <p>SRM Ticketing, Figma</p>
          </div>
        </div>
        <div className="overview-section">
          <h2>Internship Overview</h2>
          <p>
            Summer of 2022, I joined Liberty Mutual’s L1 TechSupport team to aid the team in working daily SRM tickets. I resolved tickets covering a variety of applications such as Outlook, Teams, ZScaler, and onboarding.           </p>
          <p>
            I also participated in a hackathon during my internship. My team consisted of 6 interns under the “My Best Work” problem category. We hacked for a total of 16 hours and created a website called LM Hub, a center for Liberty Mutual employees to find all resources and learn more about teams in one place. After hacking, we concluded with a presentation of our work.           </p>
        </div>
        <div style={{backgroundColor: '#1A1446', borderRadius: '10px', marginTop: '5%', paddingBottom: '5%'}}>
          <h1 style={{textAlign: 'center', paddingTop: '5%', color: '#fff'}}>What's the problem?</h1>
          <h2 style={{textAlign: 'center', paddingTop: '2%', color: '#FFD000'}}>Internal websites need UX too.</h2>
        </div>
        <div className="overview-section">
          <h2>Problem Overview</h2>
          <p>
            At many companies, internal websites lack the polishing that occurs for external websites. Reasonably so, the focus of a company's design vision is to focus on the target user and consumer market. But these companies need to start thinking of their internal employees are customers too. Liberty Mutual's product management site needed this update.
          </p>
        </div>
        <div className="overview-section">
          <h2>Project Vision</h2>
          <p>
            Re-design the ATLAS website to make user navigation more efficient.
          </p>
        </div>
        <div className="overview-section">
          <h2>Design Process</h2>
          <img src={designprocess} className="header-image" alt="Design Process" style={{ height: 'auto', width: '110%', display: 'block', marginLeft: '-5%'}}/>
        </div>
        <div className="overview-section">
          <h2>Process</h2>
          <p>Once I got certified in Heap Analytics, I started mapping data points throughout the website to start tracking users data. From this, I analyzed what buttons were being clicked, not clicked, how many steps it took to get to a page, and more. My team and I created dashboards to present quantitative data to the team and backup our findings.</p>
        </div>
        <div className="overview-section">
          <h2>Impact</h2>
          <p>Once my team finished our project of data analysis, I visualized the proposals by creating high-fidelity mockups in Figma for successful handoff to the team. I wanted to ensure our findings were backed by visual evidence to help support frontend changes. This was my first website re-design for a large company and I'm excited at the thought of internal employees having more efficient workflows in their daily life. </p>
        </div>
        <img src={mockup} className="header-image" alt="Design Process" style={{ height: 'auto', width: '110%', display: 'block', marginLeft: '-5%', marginTop: '7%'}}/>
        <img src={atlas} className="header-image" alt="Design Process" style={{ height: 'auto', width: '110%', display: 'block', marginLeft: '-5%', marginTop: '7%'}}/>

      </div>
  </div>
  );
};

export default LibertyMutual;
