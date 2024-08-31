import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { NextArrow, PrevArrow } from './CustomeArrow';

function HomeBanner(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay:true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return(
        <>
            <div className="home-slider">
                <Slider {...settings}>
                    <div className="slider-item">
                        <img src="images/slider_1.jpg" alt="Slide 1"  height={1000} width={1900} />
                        <div className="slider-txt">Your world wide <strong>LOGISTICS & COMMERCE</strong></div>
                    </div>
                    <div className="slider-item">
                        <img src="images/slider_2.jpg" alt="Slide 2"  height={1000} width={1900} />
                        <div className="slider-txt">Your world wide <strong>LOGISTICS & COMMERCE</strong></div>
                    </div>
                    <div className="slider-item">
                        <img src="images/slider_3.jpg" alt="Slide 3"  height={1000} width={1900} />
                        <div className="slider-txt">Your world wide <strong>LOGISTICS & COMMERCE</strong></div>
                    </div>                    
                </Slider>
            </div>
        </>
    );
}

export default HomeBanner;