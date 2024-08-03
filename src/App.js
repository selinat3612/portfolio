// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom'; // Import routing components
// import AmazonInternship from './AmazonInternship'; // Import your page component

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<MainContent />} />
//       <Route path="/amazon" element={<AmazonInternship />} />
//     </Routes>
//   </Router>
// );

// export default App;

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming you have a separate CSS file for App component
import EducationTimeline from './EducationTimeline';
import AmazonInternship from './AmazonInternship';
import Crashforces from './Crashforces';
import OptumInternship from './Optum';
import LibertyMutual from './LibertyMutual';
import Outlook from './Outlook';
import LogicLoom from './LogicLoom';
import Gallery from './Gallery';
import me from './imgs/me.jpg';
import AmazonRoboticsImage from './imgs/amazon.png';
import CrashForces from './imgs/CrashForcesLogo1.png';
import optumimg from './imgs/optum.png';
import Liberty from './imgs/libertymutual.png';
import outlookimg from './imgs/outlook.png';
import Logic from './imgs/logicloom.png';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import NavbarComponent from './NavbarComponent'; 
import PasswordProtect from './PasswordProtect';

const MainContent = () => {

  return (
    <div>
       <NavbarComponent />
      <div id="home" className="section">
        <div className="homeText">
          <h1 className="header2">Hey there! I'm Selina</h1>
          <div id="blurb" style={{ marginRight: '65%', marginTop: '2%' }}>
            <p>A fourth-year human-computer interaction student at WPI, I have cultivated a diverse skillset that blends design and software skills through my interdisciplinary major. My background allows me to bridge the gap between design and development, leveraging innovative design skills to create user-centered solutions.</p>
            <div id="aboutMe">
              <p>In my free time, you can find me:</p>
              <p>• Trying out new recipes to cook and bake</p>
              <p>• Exploring new coffee shops ☕️</p>
              <p>• Scrapbooking</p>
              <p>• Spending time with family and friends</p>
            </div>
          </div>
          <img src={me} className="me" style={{ marginLeft: '45%', marginTop: '-34%' }} alt="Selina"></img>
        </div>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#8e7cc3" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div id="experience" className="section">
        <h1 className="header">Experience</h1>
        <div style={{ display: 'flex', gap: '5%' }}>
          <Card sx={{ width: 400 }}>
            <CardActionArea component={Link} to="/amazon">
              <CardMedia
                component="img"
                height="170"
                image={AmazonRoboticsImage}
                alt="amazon robotics"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amazon - UX Intern
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jun - Aug 2024
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 400 }}>
            <CardActionArea component={Link} to="/crashforces">
              <CardMedia
                component="img"
                height="170"
                image={CrashForces}
                alt="crash forces"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Startup - UX Designer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Oct 2023 - March 2024
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 400 }}>
            <CardActionArea component={Link} to="/optum">
              <CardMedia
                component="img"
                height="170"
                image={optumimg}
                alt="optum"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Optum - SWE Intern
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jun - Aug 2023
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div style={{ display: 'flex', gap: '5%', marginTop: '3%' }}>
          <Card sx={{ width: 400 }}>
            <CardActionArea  component={Link} to="/liberty">
              <CardMedia
                component="img"
                height="150"
                image={Liberty}
                alt="Liberty Mutual"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Liberty Mutual - TechStart Intern
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jun - Aug 2022
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 400 }}>
            <CardActionArea component={Link} to="/logicloom">
              <CardMedia
                component="img"
                height="150"
                image={Logic}
                alt="Logic Loom"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Logic Loom - HCI Course Project
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jan - March 2024
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 400 }}>
            <CardActionArea component={Link} to="/outlook">
              <CardMedia
                component="img"
                height="150"
                image={outlookimg}
                alt="Outlook"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Outlook - UXD Course Project
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aug - Dec 2023
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <div id="design" className="section">
        <h1 style={{ paddingBottom: '2%' }}>Design</h1>
        <Gallery />
      </div>
    </div>
  );
};

const App = () => (
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/amazon" element={<PasswordProtect element={AmazonInternship} />} />
    <Route path="/crashforces" element={<PasswordProtect element={CrashForces} />}/>
    <Route path="/optum" element={<OptumInternship />} />
    <Route path="/liberty" element={<LibertyMutual />} />
    <Route path="/logicloom" element={<LogicLoom />} />
    <Route path="/outlook" element={<Outlook />} />
  </Routes>
);

export default App;
