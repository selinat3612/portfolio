import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import './AmazonInternship.css';
import unessay from './imgs/SpanishUnessay.jpg';
import mia from './imgs/mia.jpg';
import neclas from './imgs/neclas.jpg';
import me from './imgs/me&rubiks.jpg';

const UnessayPage = () => {
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
              <h2 style={{marginTop: '5%'}}>Uncsrambling the LatinX Identity</h2>
              <h3 style={{fontWeight: 'lighter', marginTop: '8%'}}>Digital art for Spanish capstone course</h3>
              <h3 style={{fontWeight: 'lighter'}}>Winning design for MIA festival</h3>
              <h3 style={{fontWeight: 'lighter', marginTop: '8%'}}>Designed in Illustrator</h3>
              {/* <div className="detail-item" style={{marginTop: '15%'}}>
                  <h2>Assignment</h2>
                  <p style={{fontWeight: 'lighter'}}>Unessay: create anything in a medium of your choice to highlight the Latino-American experience and identity</p>
              </div> */}
          </div>
      <div>
          <img src={unessay} onClick={handleImageClick} className="unessay"  alt="logo"></img>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} style={modalOverlayStyles}>
          <div className="modal-content" style={modalContentStyles}>
            <img src={unessay} style={{ width: '100%', height: '100%' }} alt="unessay"/>
          </div>
        </div>
      )}
      </div>
      <div className="detail-item">
        <h1 style={{textAlign: 'center', marginTop:'5%'}}>“a little square from Rubik’s Cuba</h1>
        <h1 style={{textAlign: 'center'}}>que nadie nunca acoplará”</h1>
        <p style={{textAlign: 'center',fontWeight: 'lighter', marginTop: '2%'}}>Bilingual Blues by Gustavo Pérez-Firmat</p>
        <p style={{textAlign: 'center',fontWeight: 'lighter',  marginTop: '2%', marginLeft: '15%', marginRight: '15%'}}>Inspired by a line from one of the poems we read, the Rubik's cube represents an immigrant's growth in life from each layer in the cube.</p>
      </div>
      <div className="detail-item">
        <h1 style={{textAlign: 'center', marginTop:'5%'}}>Design & Analysis</h1>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '5%', gap: '10%'}}>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10%'}}>
            <h3>Bottom</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10%'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
              <p>Meaning</p>
              <p style={{fontWeight: 'lighter'}}>Diving into the bottom layer, one theme I thought was incredibly crucial was the schooling system and education in the United States from the novel we read “Always Running” by Luis J. Rodriguez. In the book, Rodriguez write that his days at school “forced [him] to be more withdrawn”. To illustrate this feeling of isolation, I drew what I imagined Rodriguez looking like in the classroom, isolated and lonely.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '7%'}}>
              <p>Design</p>
              <p style={{fontWeight: 'lighter'}}>The other cubes I depicted showed themes of poverty, having to pick up several jobs, having multiple career aspirations, and discrimination. Struggles of the language barrier are depicted through yelling at a brick wall. Then for colors, I chose green to be the base because money is one of the most significant struggles for many immigrant families. </p>
            </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10%'}}>
            <h3>Middle</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10%'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
              <p>Meaning</p>
              <p style={{fontWeight: 'lighter'}}>This section was dedicated to the identity crisis that we saw many characters experience, especially Pilar in Dreaming in Cuban by the Cuban-American Cristina Garcia. I chose to illustrate the identity crisis of Pilar because her character was born in Cuba but she only has memories of growing up in New York. Pilar’s experiences and identity are both shaped by her Cuban heritage and her new life in the United States, causing her to grapple with this challenge of adapting to the United States while holding onto her Cuban roots.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '7%'}}>
              <p>Design</p>
              <p style={{fontWeight: 'lighter'}}>To further depict this identity crisis, I illustrated a sea for Cuba on the left and the New York City skyline on the right. Then in the middle, is a home split in half with two styles, a typical Cuban home on the left and New York City apartments on the right. I drew this to show the duality that identity has. One can emigrate to a new country but still hold values from back home making identity split in half. The middle cube is particularly shown in shades of red to show the urgency of an identity crisis and the feeling of not knowing where you belong. </p>
            </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '14%'}}>
            <h3>Top</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10%'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
              <p>Meaning</p>
              <p style={{fontWeight: 'lighter'}}>I found the theme of food to be prevalent to show connections that families share regardless of what may be happening in life, like in Juliet Takes A Breath by the Puerto Rican writer Gabby Rivera. Next, is a graduation cap and diploma to show achievement in higher education. A reference to the line “dreaming in Spanish” from the book “Dreaming in Cuban” is shown with the pillow and dreaming showing that dreams can come true, and it can certainly be in Spanish. Then the last two cubes go hand in hand to show that home is where the heart is and heritage is incredibly significant in creating that home. </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '7%'}}>
              <p>Design</p>
              <p style={{fontWeight: 'lighter'}}>Using colors like light blue, yellow, and white, I illustrated hopeful scenes of Latino immigrant endeavors and aspirations. </p>
            </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '7%'}}>
            <h3>Topmost</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10%'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '6%'}}>
              <p>Meaning and Design</p>
              <p style={{fontWeight: 'lighter'}}>As I was researching what to depict for a future that is not yet defined in the United States, I found it difficult to develop illustrations for the very top layer. The very first step in solving a Rubik’s cube with the traditional algorithm is creating a daisy on the top. So looking at this cube and analyzing it is this person’s first metaphoric step in finding their identity as an immigrant. I chose to keep one cube of each of the other four colors on the top as well to show that you still carry all of those experiences with you in life. </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-item">
        <h1 style={{textAlign: 'center', marginTop:'5%'}}>Recognition</h1>
        <h2 style={{textAlign: 'center', marginTop:'3%'}}>Made in America Music Festival</h2>
        <div className="recog" style={{gap: '6%', marginTop: '5%'}}>
          <img src={mia} className="mia" style={{ }} alt="mia"></img>
          <p style={{fontWeight: 'lighter', marginTop: '5%'}}>This art piece was chosen for the 2023 Made In America Music Festival in Philadelphia. The MIA festival's art installation, Cause Village, chose me as a featured artist to spread awareness of social injustice for the Latinx community through my art with festival attendees by displaying the piece on a life size letter that helps spell out "Cause Village". Unfortunately, the festival was canceled but my passion in spreading this artwork and social injustice still lives. </p>
        </div>
        <h2 style={{textAlign: 'center', marginTop:'5%'}}>NECLAS Conference</h2>
        <div className="recog" style={{gap: '7%', marginTop: '5%', marginBottom: '10%'}}>
          <img src={neclas} className="neclas" alt="neclas"></img>
          <p style={{fontWeight: 'lighter', marginTop: '5%'}}>I was also fortunate enough to have been chosen to present the visually compelling digital artwork at the NECLAS (New England Council for Latino American Studies) Conference hosted at WPI, where I also shared insightful research findings. The presentation delved into various facets of the Latinx identity, exploring struggles and successes to articulate the inspiration and creative process behind my art piece. </p>
        </div>
        <img src={me} className="neclas" style={{ width: '70%', height: '70%', display: 'block', margin: '0 auto'}} alt="me"></img>
        <p style={{fontWeight: 'lighter', textAlign: 'center'}}>Me and my Rubik's Cube!</p>
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

export default UnessayPage;
