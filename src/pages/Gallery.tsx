import React from 'react';
import './Gallery.css';

import baileyAtSnowdonia from '../Imgs/Bailey at Snowdonia.jpg';
import baileyAtBeach from '../Imgs/Bailey at the beach.jpg';
import babyBailey from '../Imgs/baby.jpeg';
import baileyWithTeddy from '../Imgs/teddy.jpeg';
import baileyInLivingRoom from '../Imgs/IMG_20240827_183443918.jpg';
import baileyNose from '../Imgs/bailey nose.jpg';
import baileyInSnow from '../Imgs/snowy bailey .jpg';
import adorableBailey from '../Imgs/cutie.jpg';
import baileyFunnyFace from '../Imgs/Funny faceu.jpg';
import baileyWithBall from '../Imgs/BaIiley with ball.jpg';
import baileyWithHam from '../Imgs/Bailey with ham.jpg';
import baileyConeOfShame from '../Imgs/Bailey with the cone of shame.jpg';
import baileyInSun from '../Imgs/Bailey enjoying the sun.jpg';
import baileyInGarden from '../Imgs/Bailey in the garden.jpg';
import baileyNextToWashingMachine from '../Imgs/Bailey next to the washing machine.jpg';
import baileyChilling from '../Imgs/Bailey in the garden2.jpg';

const Gallery: React.FC = () => {
    return (
        <div className="container gallery">
            <div className="gallery-item">
                <img src={baileyAtSnowdonia} alt="Bailey at Snowdonia" />
            
            </div>
            <div className="gallery-item">
                <img src={baileyAtBeach} alt="Bailey at the Beach" />
                
            </div>
            <div className="gallery-item">
                <img src={babyBailey} alt="Baby Bailey" />
              
            </div>
            <div className="gallery-item">
                <img src={baileyWithTeddy} alt="Bailey with a teddy" />
             
            </div>
            <div className="gallery-item">
                <img src={baileyInLivingRoom} alt="Bailey in the living room" />
            
            </div>
            <div className="gallery-item">
                <img src={baileyNose} alt="Bailey's nose close-up" />
             
            </div>
            <div className="gallery-item">
                <img src={baileyInSnow} alt="Bailey in the snow" />
               
            </div>
            <div className="gallery-item">
                <img src={adorableBailey} alt="Bailey being adorable" />
            
            </div>
            <div className="gallery-item">
                <img src={baileyFunnyFace} alt="Bailey funny face" />
              
            </div>
            <div className="gallery-item">
                <img src={baileyWithBall} alt="Bailey with a ball" />
        
            </div>
            <div className="gallery-item">
                <img src={baileyWithHam} alt="Bailey with ham" />
        
            </div>
            <div className="gallery-item">
                <img src={baileyConeOfShame} alt="Bailey with the cone of shame" />
              
            </div>
            <div className="gallery-item">
                <img src={baileyInSun} alt="Bailey in the sun" />
              
            </div>
            <div className="gallery-item">
                <img src={baileyInGarden} alt="Bailey in the garden" />
               
            </div>
            <div className="gallery-item">
                <img src={baileyNextToWashingMachine} alt="Bailey next to the washing machine" />
          
            </div>
            <div className="gallery-item">
                <img src={baileyChilling} alt="Bailey chilling" />
            </div>
        </div>
    );
};

export default Gallery;
