import React from 'react';
import './PhotoGrid.css'; // Make sure to create this CSS file
import logic1 from './imgs/logic1.png';
import logic2 from './imgs/logic2.png';
import logic3 from './imgs/logic3.png';
import logic4 from './imgs/logic4.png';
import logic5 from './imgs/logic5.png';
import logic6 from './imgs/logic6.png';
import logic7 from './imgs/logic7.png';
import logic8 from './imgs/logic8.png';

const photos = [
    logic1,
    logic2,
    logic3,
    logic4,
    logic5,
    logic6,
    logic7,
    logic8,
];

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div key={index} className="photo-item">
                    <img src={photo} alt={`Photo ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
