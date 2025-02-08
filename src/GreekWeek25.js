import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import './AmazonInternship.css';
import gw25Design from './imgs/gw25Design.png';
import comicshirt from './imgs/comicshirt.jpg';
import gompei from './imgs/gompei.jpg';

const GW25 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
      setModalOpen(true);
  };

  const closeModal = () => {
      setModalOpen(false);
  };

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

return (
<div>
  <NavbarComponent />

  <div className="internship-container">
      <div className="art">
          <div>
              <h2 style={{marginTop: '5%'}}>WPI Greek Week</h2>
              <h3 style={{fontWeight: 'lighter'}}>Shirt design for Greek Week 2025</h3>
              <h3 style={{fontWeight: 'lighter', marginTop: '8%'}}>Designed in Illustrator</h3>
              <div className="detail-item" style={{marginTop: '10%'}}>
                  <h2>Inspired by an old comic book panel, I illustrated greek letters around the slogan "Heroes wear letters." Pleasantly, I found our beloved goat, Gomepi, from an illustration from a 1960 WPI Journal. </h2>
              </div>
              <h3 style={{marginTop: '5%'}}>Inspiration</h3>
              <a href="https://www.pinterest.com/pin/32088216065692703/" target="_blank"><img src={gompei} style={{width: '300px', height: 'auto'}}></img></a>
              <img src={comicshirt} style={{width: '300px', height: 'auto', marginTop: '5%', marginBottom: '10%'}}></img>
          </div>
      <div>
          <img src={gw25Design} onClick={handleImageClick} style={{width: '400px', height: 'auto'}} className="gw2" alt="logo"></img>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} style={modalOverlayStyles}>
          <div className="modal-content" style={modalContentStyles}>
            <img src={gw25Design} style={{ width: '80%', height: '80%' }} alt="logo" />
          </div>
        </div>
      )}
      </div>
  </div>
</div>
);
};
const modalOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',  // Cover the full width of the viewport
  height: '100%',  // Cover the full height of the viewport
  backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Keep the dark overlay
  display: 'flex',  // Use flexbox to center the modal
  justifyContent: 'center',  // Horizontally center
  alignItems: 'center',  // Vertically center
};

const modalContentStyles = {
padding: '20px',
borderRadius: '8px',
maxWidth: '60vw',  // Maximum width is 90% of the viewport width
maxHeight: '60vh',  // Maximum height is 90% of the viewport height
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
};
export default GW25;
