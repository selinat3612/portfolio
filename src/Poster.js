import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import './AmazonInternship.css';
import poster from './imgs/TranPosterProject.jpg';
import inspo from './imgs/converseInspo.jpg';
import mockup from './imgs/converseMockup.jpg';

const PosterPage = () => {
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
  <div className="internship-container">
      <div className="art">
          <div>
              <h2 style={{marginTop: '5%'}}>Converse Poster</h2>
              <h3 style={{fontWeight: 'lighter'}}>Poster design for Graphic Design course</h3>
              <h3 style={{fontWeight: 'lighter', marginTop: '8%'}}>Designed in Illustrator</h3>
              <div className="detail-item" style={{marginTop: '15%'}}>
                  <h2>Assignment</h2>
                  <p style={{fontSize: '19px', fontWeight: 'lighter'}}>Create a poster with an attention grabber headline. Think of type’s visual hierarchy ( size, weight) and place images and type to achieve a successful visual communication. </p>
              </div>
          </div>
      <div>
          <img src={poster} onClick={handleImageClick} className="poster" alt="poster"></img>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} style={modalOverlayStyles}>
          <div className="modal-content" style={modalContentStyles}>
            <img src={poster} style={{ width: '100%', height: '100%' }} alt="Enlarged poster" />
          </div>
        </div>
      )}
      </div>
      <img src={mockup} className="poster" style={{ width: '100%', height: '100%', marginTop: '5%'}} alt="mockup"></img>
      <h2 style={{marginTop: '5%', textAlign: 'center'}}>Research & Analysis</h2>
        <h3 style={{marginTop: '2%', textAlign: 'center', fontWeight: 'lighter'}}>Analysis of Converse's Brand</h3>
        <p style={{fontSize: '19px', fontWeight: 'lighter', textAlign: 'center', marginTop: '2%'}}>Converse is known for the iconic star logo and their slogan: Shoes are boring. Wear sneakers. Their brand revolves around rebellious and timeless streetwear that resonates with their target audience.</p>
        <img src={inspo} className="poster" style={{ width: '100%', height: '100%', marginTop: '5%'}} alt="inspo"></img>
        <h2 style={{marginTop: '5%', textAlign: 'center'}}>Ideation</h2>
        <h3 style={{marginTop: '2%', textAlign: 'center', fontWeight: 'lighter'}}>Slogan & Imagery</h3>
        <p style={{fontSize: '19px', fontWeight: 'lighter', textAlign: 'center', marginTop: '2%'}}>I immediately thought of "Step into Style" as a slogan. It opened a world of imagery in my design process. From the type, the background and foreground, and colors, I knew I wanted to capture the brand's streetwear and rebellion in the poster.</p>
        <h2 style={{marginTop: '5%', textAlign: 'center'}}>Design</h2>
        <h3 style={{marginTop: '2%', textAlign: 'center', fontWeight: 'lighter'}}>The knitty gritty</h3>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10%', marginTop: '5%', gap: '10%', marginRight: '5%'}}>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10%'}}>
            <h3>Typography</h3>
            <p style={{fontWeight: 'lighter'}}>Sans-serif and bold. The word STYLE has a dotted outline that represents the white contrast stitching on black Converse. It also has a cement-like texture since the word is being stepped on inside the shadow.</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap:'10%'}}>
            <h3>Foreground</h3>
            <p style={{fontWeight: 'lighter'}}>I wanted the focus to be the person stepping on the word STYLE, and the slogan to be in the middleground. To achieve this, the end of INTO is slightly tucked into the pant leg. And STYLE is warped as part of the shadow. The focus is on the left shoe with the logo, while the right show is still in the middleground.</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10%'}}>
            <h3>Background</h3>
            <p style={{fontWeight: 'lighter'}}>I was inspired by skateboarding and alleyways for the background. The texture has a cement and brick wall feel. And the gradient of yellow to pink shows the person stepping towards the future, that is Converse.</p>
          </div>
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

export default PosterPage;
