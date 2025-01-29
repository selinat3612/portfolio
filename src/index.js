// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import from react-router-dom
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';
// import './index.css';
// import EducationTimeline from './EducationTimeline';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import AmazonRoboticsImage from './imgs/amazon.png';
// import CrashForces from './imgs/CrashForcesLogo1.png';
// import Optum from './imgs/optum.png';
// import Liberty from './imgs/libertymutual.png';
// import Outlook from './imgs/outlook.png';
// import Logic from './imgs/logicloom.png';
// import PhotoAlbum from "react-photo-album";
// import Gallery from './Gallery';
// import me from './imgs/me.jpg';

// const AmazonInternship = () => (
//   <div style={{ padding: '20px' }}>
//     <h1>Amazon - UX Intern</h1>
//     <p>Detailed information about your internship experience at Amazon.</p>
//     <p>This is where you can add a thorough description of your role, responsibilities, projects, and achievements during your time at Amazon.</p>
//   </div>
// );

// const App = () => {
//   const [activeLink, setActiveLink] = useState('');

//   const handleSelect = (eventKey) => {
//     setActiveLink(eventKey);
//   };

//   const handleBrandClick = () => {
//     setActiveLink('');
//   };

//   const linkStyle = (link) => ({
//     color: activeLink === link ? '#8e7cc3' : '#000', 
//     fontWeight: activeLink === link ? 'bold' : 'normal'
//   });

//   return (
//     <div>
//       <Navbar bg="light" variant="light" expand="lg" fixed="top" onSelect={handleSelect}>
//       <div className="container-fluid">
//         <Navbar.Brand href="#home"  onClick={handleBrandClick} eventKey="brand" style={{ marginLeft: '10%' }}>Selina Tran</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto" style={{ marginLeft: '65%' }}>
//             <Nav.Link href="#experience" eventKey="experience" style={linkStyle('experience')}>Experience</Nav.Link>
//             <Nav.Link href="#design" eventKey="design" style={linkStyle('design')}>Design</Nav.Link>
//             <Nav.Link href="/resume.pdf" target="_blank" eventKey="resume" style={linkStyle('resume')}>Resume</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>

//       <div id="home" className="section">
//         <div className="homeText">
//           <h1 className="header2">Hey there! I'm Selina</h1>
//           <div id="blurb" style={{marginRight: '65%', marginTop: '2%'}}>
//           <p>A fourth-year human-computer interaction student at WPI, I have cultivated a diverse skillset that blends design and software skills through my interdisciplinary major. My background allows me to bridge the gap between design and development, leveraging innovative design skills to create user-centered solutions.</p>
//           <div id="aboutMe">
//             <p>In my free time, you can find me:</p>
//             <p>• Trying out new recipes to cook and bake</p>
//             <p>• Exploring new coffee shops ☕️</p>
//             <p>• Scrapbooking</p>
//             <p>• Spending time with family and friends</p>
//           </div>
//           </div>
//           <img src={me} className="me" style={{marginLeft: '45%', marginTop: '-34%'}}></img>
//         </div>
//         <div className="wave">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//             <path fill="#8e7cc3" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//           </svg>
//         </div>
//       </div>
//       <div id="experience" className="section">
//         <h1 className="header">Experience</h1>
//         <div style={{display: 'flex', gap: '5%'}}>
//         <Card sx={{ width: 400 }}>
//         <CardActionArea component={Link} to="/amazon">
//               <CardMedia
//                 component="img"
//                 height="170"
//                 image={AmazonRoboticsImage}
//                 alt="amazon robotics"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Amazon - UX Intern
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Jun - Aug 2024
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//         </Card>
//         <Card sx={{ width: 400 }}>
//         <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="170"
//                 image={CrashForces}
//                 alt="crash forces"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Startup - UX Designer
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Oct 2023 - March 2024
//                 </Typography>
//               </CardContent>
//           </CardActionArea>
//         </Card>
//         <Card sx={{ width: 400 }}>
//         <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="170"
//                 image={Optum}
//                 alt="optum"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Optum - SWE Intern
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Jun - Aug 2023
//                 </Typography>
//               </CardContent>
//           </CardActionArea>
//         </Card>
//         </div>
//         <div style={{display: 'flex', gap: '5%', marginTop: '3%', }}>
//         <Card sx={{ width: 400 }}>
//         <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="150"
//                 image={Liberty}
//                 alt="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Liberty Mutual - TechStart Intern
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Jun - Aug 2022
//                 </Typography>
//               </CardContent>
//           </CardActionArea>
//         </Card>
//         <Card sx={{ width: 400 }}>
//         <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="150"
//                 image={Logic}
//                 alt="crash forces"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 Logic Loom - HCI Course Project
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 Jan - March 2024
//                 </Typography>
//               </CardContent>
//           </CardActionArea>
//         </Card>
//         <Card sx={{ width: 400 }}>
//         <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="150"
//                 image={Outlook}
//                 alt="outlooklog"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 Outlook - UXD Course Project
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 Aug - Dec 2023
//                 </Typography>
//               </CardContent>
//           </CardActionArea>
//         </Card>
//         </div>
//       </div>
//       <div id="design" className="section">
//         <h1 style={{paddingBottom: '2%'}}>Design</h1>
//         <Gallery />
//       </div>
//     </div>
//   );
// };


// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <Router> {/* Wrap App with Router */}
//     <App />
//   </Router>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router basename="/portfolio">
    <App />
  </Router>
);
