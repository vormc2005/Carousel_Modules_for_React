import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../Images/bidbot.gif'
import image2 from '../Images/bidbot.gif'
import image3 from '../Images/bidbot.gif'
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={image1} alt="1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} alt="2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} alt="
                    3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel