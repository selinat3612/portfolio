import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import './AmazonInternship.css';
import gw24 from './imgs/greekweek2024.png';

const GW24 = () => {
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
              <h3 style={{fontWeight: 'lighter'}}>Logo design for Greek Week 2024</h3>
              <h3 style={{fontWeight: 'lighter', marginTop: '8%'}}>Designed in Illustrator</h3>
              <div className="detail-item" style={{marginTop: '15%'}}>
                  <h2>Inspired by Greek Week theme "Greekelodeon" to illustrate Greek Life letters around the central logo covered in slime</h2>
              </div>
          </div>
      <div>
          <img src={gw24} onClick={handleImageClick} className="gw2" alt="logo"></img>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} style={modalOverlayStyles}>
          <div className="modal-content" style={modalContentStyles}>
            <img src={gw24} style={{ width: '100%', height: '100%' }} alt="logo" />
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
  backgroundColor: '#fff',
padding: '20px',
borderRadius: '8px',
maxWidth: '60vw',  // Maximum width is 90% of the viewport width
maxHeight: '60vh',  // Maximum height is 90% of the viewport height
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
};
export default GW24;
