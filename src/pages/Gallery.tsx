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


            <div className="row">
                <div className="col-md-3">
                    <img src={baileyAtSnowdonia} alt="Bailey at Snowdonia" />
                    <div className="caption">Bailey at Snowdonia</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyAtBeach} alt="Bailey at the Beach" />
                    <div className="caption">Bailey enjoying the beach</div>
                </div>
                <div className="col-md-3">
                    <img src={babyBailey} alt="Baby Bailey" />
                    <div className="caption">Baby Bailey</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyWithTeddy} alt="Bailey with a teddy" />
                    <div className="caption">Bailey and his teddy</div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <img src={baileyInLivingRoom} alt="Bailey in the living room" />
                    <div className="caption">Bailey on the sofa</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyNose} alt="Bailey's nose close-up" />
                    <div className="caption">Bailey's cute nose</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyInSnow} alt="Bailey in the snow" />
                    <div className="caption">Bailey playing in the snow</div>
                </div>
                <div className="col-md-3">
                    <img src={adorableBailey} alt="Bailey being adorable" />
                    <div className="caption">Adorable Bailey</div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <img src={baileyFunnyFace} alt="Bailey funny face" />
                    <div className="caption">Bailey pulling a funny face</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyWithBall} alt="Bailey with a ball" />
                    <div className="caption">Bailey with a ball</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyWithHam} alt="Bailey with ham" />
                    <div className="caption">Bailey with ham</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyConeOfShame} alt="Bailey with the cone of shame" />
                    <div className="caption">Bailey with the cone</div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <img src={baileyInSun} alt="Bailey in the sun" />
                    <div className="caption">Bailey in the sun</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyInGarden} alt="Bailey in the garden" />
                    <div className="caption">Bailey in the garden</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyNextToWashingMachine} alt="Bailey next to the washing machine" />
                    <div className="caption">Bailey next to the washing machine</div>
                </div>
                <div className="col-md-3">
                    <img src={baileyChilling} alt="Bailey with a hat" />
                    <div className="caption">Bailey chilling</div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
