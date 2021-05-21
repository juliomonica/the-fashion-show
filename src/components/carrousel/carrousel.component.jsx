import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from '../../assets/images/slide-1.jpg';
import slide_two from '../../assets/images/slide-2.jpg';
import slide_three from '../../assets/images/slide-3.jpg';

import './carrousel.styles.css';

const Carrousel = () => {

    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }

    return(
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
            </Slider>

        </div>
    )

}

export default Carrousel;