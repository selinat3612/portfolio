import React from 'react';
import './Gallery.css'; // Import your CSS file for styling
import Menu from './imgs/menu.png';
import GW2024 from './imgs/greekweek2023.png';
import GW2023 from './imgs/greekweek2024.png';
import unessay from './imgs/SpanishUnessay.jpg';
import poster from './imgs/TranPosterProject.jpg';
import landing1 from './imgs/LandingPage1.png';
import landing2 from './imgs/LandingPage2.png';
import data from './imgs/Data.png';




const Gallery = () => {
  return (
    <div className="gallery">
      <img src={Menu} alt="Design 1" className="gallery-item" />
      <img src={GW2023} alt="Design 3" className="gallery-item" />
      <img src={unessay} alt="Design 4" className="gallery-item" />
      <img src={GW2024} alt="Design 2" className="gallery-item" />
      <img src={poster} alt="Design 4" className="gallery-item" />
      <img src={landing1} alt="Design 4" className="gallery-item" />
      <img src={landing2} alt="Design 4" className="gallery-item" />
      <img src={data} alt="Design 4" className="gallery-item" />
    </div>
  );
};

export default Gallery;