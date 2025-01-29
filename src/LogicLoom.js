import React, { useEffect } from 'react';
import NavbarComponent from './NavbarComponent';
import logicloom from './imgs/logicloom.png';
import './AmazonInternship.css';
import PhotoGrid from './PhotoGrid';
import moodboard from './imgs/moodboard.png';
import analysis from './imgs/analysis.png';
import design from './imgs/loomDesign.jpg';
import mockup from './imgs/loomMockup.jpg';

const LogicLoom = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div>
    <div className="header-image-container">
        <img src={logicloom} className="header-image" alt="logic loom" />
    </div>
    <div className="internship-container">
      <h1 style={{textAlign: 'center', marginTop: '7%'}}>Logic Loom</h1>
      <h2 style={{textAlign: 'center', marginBottom: '8%', fontWeight: 'lighter'}}>Final project for HCI Course</h2>
        <div className="details-section">
          <div className="detail-item">
            <h2>Duration</h2>
            <p>January - March 2024</p>
          </div>
          <div className="detail-item">
            <h2>Role</h2>
            <p>UX Researcher & Designer</p>
          </div>
          <div className="detail-item">
            <h2>Tools</h2>
            <p>Figma</p>
          </div>
        </div>
        <div className="overview-section">
          <h2 style={{marginBottom: '2%'}}>Overview</h2>
          <p>
          Logic Loom, also called Loom, is an app that provides users with a one-stop platform that brings a diverse range of their daily puzzles and ensures that users never miss a day of their streak. The app would be a streamlined experience, promoting accessibility and intuitiveness, providing an enjoyable and relaxing puzzle experience to perfectly wind down your day. 
          </p>
        </div>
        <div className="overview-section">
          <h2 style={{marginBottom: '2%'}}>Design Process</h2>
          <img src={design} className="header-image" alt="logic loom" />
        </div>
        <div className="overview-section">
          <h2 style={{marginBottom: '2%'}}>User Problems and Research</h2>
          <p>
          Daily Wordle users who also frequent Sudoku, Connections, Word Hunt, and other logic games have to dig through many websites or apps just to play the game. 
Streaks are also a stressful incentive. Especially in the Wordle world, where you are trying to compete with friends and show off your skills, the only existing reminders are the occasional texts from your friends and family. 
But, what if you don't want do the Wordle in English? Maybe English isn't your first language or you're trying to learn a new language, there is no other way to play Wordle. 
Looking at statistics from a study in 2022, the age groups who are most likely to play Wordle are 18-34 and 55+. Since more people in the 55+ age group compared to the 35-54 age group is likely to play and enjoy Wordle, it is crucial that the game maintains its intuitiveness and accessibility. ​​​​​​​
          </p>
          <img src={analysis} style={{ width: '60%', marginTop: '5%', marginLeft: '20%'}}></img>
        </div>
        <div className="overview-section">
          <h2 style={{marginBottom: '2%'}}>Project Goals</h2>
          <ul>• Intuitive navigation to utilize all features</ul>
          <ul>• Promote learning languages</ul>
          <ul>• Provide comfort to play Wordle for those who are not comfortable with English</ul>
          <ul>• Provide a hub for logic game lovers </ul>
          <ul>• Boost engagement and competition between friends </ul>
          <ul>• Push notification feature for friends to remind you to complete your streak</ul>
        </div>
        <div className="overview-section">
        <div className="overview-section">
          <h2 style={{}}>Inspiration & Ideation</h2>
          <img src={moodboard} style={{ width: '100%', marginTop: '5%'}}></img>
        </div>
        <div className="overview-section">
          <h2 style={{marginBottom: '2%'}}>Key Features</h2>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '10%'}}>
            <h5>Streaks </h5>
            <p>User need: not losing streaks! Streaks are a huge driving factor to why players maintain a relationship with a game, platform, friends, etc. Users can set daily notifications and push notifications to their friends as a reminder!
            </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '8%'}}>
            <h5>Multi-language </h5>
            <p>User need: diversity. Most logic games are only available in English. By allowing users a multi-language feature, they can comfortably play in their native language or practice learning a new language! It allows users from around the world to play.
            </p>
            </div>
          </div>
        </div>
        <h2 style={{marginBottom: '2%', marginTop: '5%'}}>User Testing</h2>
        <p>To test the usability of my prototype, I focused on heuristic evaluation. Heuristic evaluation, developed by Jakob Nielsen, focuses on finding usability problems in a UI design. Here, a small set of evaluators examine the UI and independently check for compliance with heuristics. Neilsen's 10 heuristics are as follows: (H1) visibility of system status, (H2) match between system and real world, (H3) user control and freedom, (H4) consistency and standards, (H5) error prevention, (H6) recognition rather than recall, (H7) flexibility and efficiency of use, (H8) aesthetic and minimalist design, (H9) error recovery, (H10) help and documentation. 
        After conducting a heuristic evaluation on my prototype with 2 users, they both found different heuristics. Aggregating my findings, the prototype had the following heuristics:
        </p>
        <ul>• (H1) visibility - for friends to be on the front page and make the app a social-based app</ul>
        <ul>• (H2) match between system and real world with - the settings button was still showing up when in settings</ul>
        <ul>• (H3) user control and freedom - limited interaction and testing was straight forward due to lack of built out prototyping</ul>
        <ul>• (H7) flexibility and efficiency - add more functionality to notifications, manage account, and favorites </ul>
      </div>
        {/* <div className="overview-section">
          <h2 style={{marginBottom: '2%'}}>Analysis of Think-Aloud</h2>
          <p>Based on the evaluation results, I think the ‘Manage Favorites’ button will possibly be moved. According to Figure 1, the edit favorites task had the most re-tries on average compared to other tasks. Two of the participants went to their user profile page instead and looked for an edit favorites button and one participant clicked directly on the Favorites word on the homepage, which led to nothing. Since this app should also be friendly to those who are new to logic games, I think learnability could be improved. One of the participants did not frequently play logic games, requiring them to think harder when I prompted them to navigate to streaks. This could be improved in future work by having a few tutorial pop-up pages when the user downloads the app to break down all features. Another participant kept going back to change the language because it did not appear changed on the wireframe, however this is just a Figma flow issue that can be resolved. Otherwise, everything else seemed intuitive and all participants navigated as expected to complete each task. Participants were able to navigate to each task rather quickly but there were a few pauses in between the prompt and action. This could be improved by visual cues to complete these tasks quicker and more obvious designs with arrows and words. 
          </p>
        </div> */}
        <div className="overview-section">
          <h2 style={{marginBottom: '2%'}}>Final Prototype & Demo</h2>
          <p>Based on feedback from the think-aloud, I iterated once more to improve the app overall and especially on error prevention. I demoed the prototype in my class, CS 3041 (Human-Computer Interaction), and received thoughtful feedback on my peers' thoughts. As a friendly competition between peers, after each demo, a student would have to fill out a Google Form rating the student's app in innovation, impactful-ness, design, effort, and overall excellence. I am happy to report that I was ranked #1 in all categories! 
          </p>
        </div>
        <img src={mockup} style={{ width: '100%', marginTop: '5%'}}></img>
        <div className="overview-section" style={{marginBottom: '5%'}}>
          <h2 style={{marginBottom: '2%'}}>Future Work</h2>
          <p>I am very proud of how my prototype came out. I think the app provides an easy experience and a hub for logic game lovers to escape and enjoy their games in one place. Coincidentally, the NYT app had a recent update that I did not check while making these wireframes. However, the app now looks very similar to the design techniques I used for Logic Loom. In the future, I would want to include a more interactive streak tracking screen. I think it would be cool to have a map that you follow around like in Candy Land or Mario Party and earn badges or advantages along the way.</p>
        </div>
        <PhotoGrid />
      </div>
      
  </div>
);
};

export default LogicLoom;
