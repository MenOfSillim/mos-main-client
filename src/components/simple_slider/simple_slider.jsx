import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simple_slider.module.css";

const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
      };
    
    return (
        <div>
            <h2>Single Item</h2>
            <Slider {...settings}>
                <div className={`${styles.frame} ${styles.pcria}`} />
                <div className={`${styles.frame} ${styles.findyourperfume}`} />
                <div className={`${styles.frame} ${styles.youtube}`} />
                <div className={`${styles.frame} ${styles.dashboard}`} />
            </Slider>
        </div>
    )
};

export default SimpleSlider;