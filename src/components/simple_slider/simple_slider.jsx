import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simple_slider.module.css";
import styled from "styled-components";

const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
      };
    
    const Div = styled.div`
      width: 100%;
      height: 100%;
      & div {
        width: 30vw;
        height: 30vw;
      }
    `;

    return (
        <div>
            <h2>Single Item</h2>
            <Slider {...settings}>
                <Div>
                    <div className={`${styles.frame} ${styles.pcria}`} />
                </Div>
                <Div>
                    <div className={`${styles.frame} ${styles.findyourperfume}`} />
                </Div>
                <Div>
                    <div className={`${styles.frame} ${styles.youtube}`} />
                </Div>
                <Div>
                    <div className={`${styles.frame} ${styles.dashboard}`} />
                </Div>
            </Slider>
        </div>
    )
};

export default SimpleSlider;