import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import './AmazonInternship.css';
import cflogo from './imgs/CrashForcesLogo1.png';
import cf1 from './imgs/LandingPage1.png';
import cf2 from './imgs/LandingPage2.png';
import cf3 from './imgs/Data.png';
import cf4 from './imgs/IndentationCar.png';
import mockup from './imgs/mockup.jpg';

const CrashforcesPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);  // Store the selected image

  // Function to handle image click
  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);  // Set the clicked image source
    setModalOpen(true);        // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);  // Clear the selected image when closing
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="internship-container">
        <div className="art">
          <div>
            <h2 style={{marginTop: '5%'}}>Startup Logo</h2>
            <h3 style={{ fontWeight: 'lighter' }}>Logo design for Crashforces</h3>
            <h3 style={{ fontWeight: 'lighter', marginTop: '8%' }}>Designed in Illustrator</h3>
            <div className="detail-item" style={{ marginTop: '10%' }}>
              <h2>Inspired by startup UX design work to also create logos and website illustrations</h2>
            </div>
          </div>
          <div>
            <img
              src={cflogo}
              onClick={() => handleImageClick(cflogo)}  // Pass image source to the click handler
              className="cf"
                         alt="logo"
            />
          </div>
        </div>
        
        {/* Display other images */}
        <img
          src={mockup}
          onClick={() => handleImageClick(mockup)}
          className="enlarge"
          style={{ width: '100%', height: '100%' }}
          alt="mockup"
        />

        <h1 style={{ textAlign: 'center', marginTop: '10%' }}>Website Illustrations</h1>
        <img
          src={cf1}
          onClick={() => handleImageClick(cf1)}
          className="enlarge"
          style={{ width: '100%', height: '100%', marginTop: '10%' }}
          alt="illustration1"
        />

        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10%', gap: '5%' }}>
          <img
            src={cf2}
            onClick={() => handleImageClick(cf2)}
            className="enlarge"
            style={{ width: '50%', height: '50%' }}
            alt="illustration2"
          />
          <img
            src={cf3}
            onClick={() => handleImageClick(cf3)}
            className="enlarge"
            style={{ width: '50%', height: '50%' }}
            alt="illustration3"
          />
        </div>

        <img
          src={cf4}
          onClick={() => handleImageClick(cf4)}
          className="enlarge"
          style={{ width: '70%', height: '70%', marginTop: '10%', display: 'block', margin: '0 auto' }}
          alt="illustration4"
        />
      </div>

      {/* Modal for displaying the enlarged image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} style={modalOverlayStyles}>
          <div className="modal-content" style={modalContentStyles}>
            <img src={selectedImage} style={modalImageStyles} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

// Modal overlay and content styles
const modalOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '70%',
  maxHeight: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const modalImageStyles = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain', 
};

export default CrashforcesPage;
