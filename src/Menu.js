import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import './AmazonInternship.css';
import menu from './imgs/menu.png';
import menuInspo from './imgs/menuInspo.jpg';
import phoInspo from './imgs/phoInspo.jpg';
import phoDesigns from './imgs/phoDesigns.jpg';

const MenuPage = () => {
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
                <h2 style={{marginTop: '5%'}}>Pho Real House</h2>
                <h3 style={{fontWeight: 'lighter'}}>Menu design for Grad UX Design course</h3>
                <h3 style={{fontWeight: 'lighter', marginTop: '8%'}}>Designed in Illustrator</h3>
                <h3 style={{fontWeight: 'lighter'}}>Mockups created in Canva</h3>
                <div className="detail-item" style={{marginTop: '20%'}}>
                    <h2>Assignment</h2>
                    <p style={{fontSize: '19px', fontWeight: 'lighter'}}>Picture yourself as a graphic designer working for a trendy new restaurant. Your mission is to design a  menu that showcases the restaurant's dishes, highlights special offerings, and reflects the establishment's brand. </p>
                </div>
            </div>
                  <div>
                      <img
                          src={menu}
                          onClick={handleImageClick}
                          className="enlarge"
                          style={{  }}
                          alt="menu"
                      />
                  </div>
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal} style={modalOverlayStyles}>
            <div className="modal-content" style={modalContentStyles}>
              <img src={menu} style={{ width: '100%', height: '100%' }} alt="Enlarged menu" />
            </div>
          </div>
        )}
        </div>
        <h2 style={{marginTop: '5%', textAlign: 'center'}}>Research & Analysis</h2>
        <h3 style={{marginTop: '2%', textAlign: 'center', fontWeight: 'lighter'}}>Competitive analysis of current Pho restaurants</h3>
        <p style={{fontSize: '19px', fontWeight: 'lighter', textAlign: 'center', marginTop: '2%'}}>Current menus follow the traditional color scheme of white and red or green. The typography is for both are serif and small text. Although the restaurants shown below offer a wide variety of food, it's often very overwhelming for a new customer.</p>
        <img src={menuInspo} className="inspo" style={{ width: '100%', height: '100%', marginTop: '2%'}} alt="menuInspo"></img>
        <h2 style={{marginTop: '5%', textAlign: 'center'}}>Ideate</h2>
        <h3 style={{marginTop: '2%', textAlign: 'center', fontWeight: 'lighter'}}>Drawing inspiration from quintessential aspects of Vietnamese cuisine</h3>
        <img src={phoInspo} className="phoInspo" style={{ width: '100%', height: '100%', marginTop: '-1%'}} alt="phoInspo"></img>
        <h2 style={{marginTop: '5%', textAlign: 'center', marginTop: '-3%'}}>Design</h2>
        <h3 style={{marginTop: '2%', textAlign: 'center', fontWeight: 'lighter'}}>Concept illustrations and color palette</h3>
        <img src={phoDesigns} className="phoDesigns" style={{ width: '90%', height: '90%', marginTop: '-1%', display: 'block', margin: '0 auto', marginTop: '5%'}} alt="phoDesigns"></img>
        <h2 style={{marginTop: '5%', textAlign: 'center', marginTop: '3%'}}>Outcome</h2>
        <p style={{fontSize: '19px', fontWeight: 'lighter', textAlign: 'center', marginTop: '2%'}}> In class, I learned that customers like narratives and storytelling.
            Therefore, I tried to incorporate visual storytelling through the house and coffee. The name of the
            restaurant is Pho Real House, a play on the slang “for real” and house. I wanted to illustrate
            outdoor street-style house restaurants, much like in Vietnam, for the authentic feel. And
            similarly, Vietnamese iced coffee is notorious for its drip espresso mechanism, so I decided to
            illustrate both of those using Inkscape. To give the menu more youthfulness, I made the S in
            “BEVS” hang off of the drip coffee and the right side of the H in “PHO” noodles. Lastly, to
            maintain the heritage of Pho restaurants, I kept every menu item in Vietnamese with an English
            subtitle.</p>
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
  maxWidth: '40vw',  // Maximum width is 90% of the viewport width
  maxHeight: '40vh',  // Maximum height is 90% of the viewport height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  };
export default MenuPage;
