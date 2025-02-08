import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import EducationTimeline from './EducationTimeline';
import AmazonInternship from './AmazonInternship';
import Crashforces from './Crashforces';
import OptumInternship from './Optum';
import WorkdayProject from './Workday';
import LibertyMutual from './LibertyMutual';
import Outlook from './Outlook';
import PlaySite from './Play';
import LogicLoom from './LogicLoom';
import Gallery from './Gallery';
import me from './imgs/me.jpg';
import AmazonRoboticsImage from './imgs/amazon.png';
import WorkdayImage from './imgs/workday.png';
import CrashForces from './imgs/CrashForcesLogo1.png';
import optumimg from './imgs/optum.png';
import Liberty from './imgs/libertymutual.png';
import outlookimg from './imgs/outlook.png';
import Logic from './imgs/logicloom.png';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import NavbarComponent from './NavbarComponent'; 
import PasswordProtect from './PasswordProtect';
import MenuPage from './Menu';
import PosterPage from './Poster';
import GW23 from './GreekWeek23';
import GW24 from './GreekWeek24';
import GW25 from './GreekWeek25';
import UnessayPage from './Unessay';
import CrashforcesPage from './CF';
import logo2 from './imgs/logo2.png';

const MainContent = () => {
  return (
    <div>
      <div id="homePage" className="homePage">
        <div className="mainPage">
          <div style={{marginTop: '10%', padding: '5%'}}>
            <h1 className="header2" style={{}}>Hey there! I'm Selina</h1>
            <div id="blurb" style={{ marginTop: '5%'}}>
              <p className="paragraph">A fourth-year human-computer interaction student at WPI, I have cultivated a diverse skillset that blends design and software skills through my interdisciplinary major. My background allows me to bridge the gap between design and development, leveraging innovative design skills to create user-centered solutions.</p>
              <div id="aboutMe" className="paragraph">
                <p>In my free time, you can find me:</p>
                <p>• Trying out new recipes to cook and bake</p>
                <p>• Exploring new coffee shops ☕️</p>
                <p>• Scrapbooking</p>
                <p>• Spending time with family and friends</p>
              </div>
              <div style={{marginTop: '5%', display: 'flex', gap: '10px'}}>
                <div>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevents default action
                    const experienceSection = document.getElementById("experience");
                    if (experienceSection) {
                      experienceSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="workButton"
                >
                  See my work ↓
                </button>
                </div>
                <div>
                  <Link to="/play" className="playButton">
                  Fun
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="me">
            <img src={me} className="me" style={{marginTop: '5%'}} alt="Selina"></img>
          </div>
        </div>
        {/* <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#8e7cc3" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </div>
      <div id="experience" className="experience" style={{marginTop: '5%'}}>
        <h1 className="style" style={{}}>Work</h1>
        <h3 style={{ textAlign: 'center', fontWeight: 'lighter', marginBottom: '5%' }}>
          UX Design and Internship Experience
        </h3>
        <Row className="g-4">
          {[
            {
              link: "/workday",
              image: WorkdayImage,
              title: "Workday - UI Course Project",
              date: "Jan - Feb 2025",
            },
            {
              link: "/amazon",
              image: AmazonRoboticsImage,
              title: "Amazon Robotics - UX Internship",
              date: "Jun - Aug 2024",
            },
            {
              link: "/crashforces",
              image: CrashForces,
              title: "Startup - UX Designer",
              date: "Oct 2023 - March 2024",
            },
            {
              link: "/optum",
              image: optumimg,
              title: "Optum - SWE Internship",
              date: "Jun - Aug 2023",
            },
            {
              link: "/liberty",
              image: Liberty,
              title: "Liberty Mutual - TechStart Intern",
              date: "Jun - Aug 2022",
            },
            {
              link: "/logicloom",
              image: Logic,
              title: "Logic Loom - HCI Course Project",
              date: "Jan - March 2024",
            },
            {
              link: "/outlook",
              image: outlookimg,
              title: "Outlook - UXD Course Project",
              date: "Aug - Dec 2023",
            },
          ].map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card>
                <CardActionArea component={Link} to={item.link}>
                  <CardMedia component="img" height="210" image={item.image} alt={item.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.date}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {/* <footer style={{marginTop: '20%'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
          <img src={logo2} style={{ width: '5%' }} alt="logo" />
        </div>
      </footer> */}
    </div>
  );
};

const App = () => (
  <>
  <NavbarComponent />
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/amazon" element={<PasswordProtect element={AmazonInternship} />} />
    <Route path="/crashforces" element={<PasswordProtect element={CrashForces} />} />
    <Route path="/optum" element={<OptumInternship />} />
    <Route path="/liberty" element={<LibertyMutual />} />
    <Route path="/logicloom" element={<LogicLoom />} />
    <Route path="/outlook" element={<Outlook />} />
    <Route path="/play" element={<PlaySite />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/poster" element={<PosterPage />} />
    <Route path="/gw23" element={<GW23 />} />
    <Route path="/gw24" element={<GW24 />} />
    <Route path="/gw25" element={<GW25 />} />
    <Route path="/unessay" element={<UnessayPage />} />
    <Route path="/crashforcespage" element={<CrashforcesPage />} />
    <Route path="/workday" element={<WorkdayProject />} />
  </Routes></>
);

export default App;
