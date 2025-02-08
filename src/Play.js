import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Make sure you're using Routes and Route correctly
import NavbarComponent from './NavbarComponent';
import './AmazonInternship.css';
import { Gallery } from "react-grid-gallery";
import menu from './imgs/menu.png';
import Crashforces from './imgs/CrashForcesLogo1.png';
import greekweek24 from './imgs/greekweek2024.png';
import greekweek23 from './imgs/greekweek2023.png';
import unessay from './imgs/SpanishUnessay.jpg';
import poster from './imgs/TranPosterProject.jpg';
import greekweek25 from './imgs/gw25Design.png';
import GW25 from './GreekWeek25';
import MenuItem from './Menu';
import PosterPage from './Poster';
import GW23 from './GreekWeek23';
import GW24 from './GreekWeek24';
import UnessayPage from './Unessay';
import CrashforcesPage from './CF';
import logo2 from './imgs/logo2.png';

const PlaySite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This should be part of the JSX structure
  const handleClick = (index, item) => {
    switch (item.src) {
      case menu:
        navigate('/menu');
        break;
      case poster:
        navigate('/poster');
        break;
      case greekweek23:
        navigate('/gw23');
        break;
      case greekweek24:
        navigate('/gw24');
        break;
      case unessay:
        navigate('/unessay');
        break;
      case Crashforces:
        navigate('/crashforcespage');
        break;
      case greekweek25:
        navigate('/gw25');
        break;
      default:
        console.log('No route found for this image');
    }
  };

  const row1 = [
    {src: greekweek25, width: 400, height: 482},
    { src: menu, width: 420, height: 500 }
  ];

  const row2 = [
    { src: greekweek24, width: 280, height: 180 },
    { src: unessay, width: 340, height: 212 }
  ];

  const row3 = [
    { src: poster, width: 350, height: 212 },
    { src: Crashforces, width: 230, height: 212 }

  ];

  const row4 = [
    { src: greekweek23, width: 250, height: 212 },
  ];

  const galleryStyles = {
    maxWidth: '1200px',
    margin: '0 auto', // Center the gallery container
    padding: '0 5%', // Add padding to the sides
  };

  return (
    <div className="body1">
      <div className="playsite">
        <h1 className="style" style={{ textAlign: 'center' }}>Play</h1>
        <h3 style={{ textAlign: 'center', fontWeight: 'lighter', marginBottom: '5%' }}>
          Course projects, designs, and fun
        </h3>
        <div style={galleryStyles}>
          <Gallery images={row1} rowHeight={650} enableImageSelection={false} onClick={handleClick} />
          <Gallery images={row3} rowHeight={500} enableImageSelection={false} onClick={handleClick} />
          <Gallery images={row2} rowHeight={500} enableImageSelection={false} onClick={handleClick} />
          <Gallery images={row4} rowHeight={400} enableImageSelection={false} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default PlaySite;
