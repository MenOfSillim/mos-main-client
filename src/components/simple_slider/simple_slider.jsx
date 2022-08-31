import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simple_slider.module.css";
import styled from "styled-components";

const SimpleSlider = () => {
    const settings = {
        arrows: false,
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
        width: 25vw;
        height: 25vw;
      }
    `;

    return (
        <div className={styles.container}>
           <Slider className={styles.slider} {...settings}>
                <Div>
                    <a href="https://pcria.menofsillim.club/">
                        <div className={`${styles.frame} ${styles.pcria}`} />
                    </a>
                </Div>
                <Div>
                    <a href="https://findyourperfume.menofsillim.club/">
                        <div className={`${styles.frame} ${styles.findyourperfume}`} />
                    </a>
                </Div>
                <Div>
                    <a href="https://youtube.menofsillim.club/">
                        <div className={`${styles.frame} ${styles.youtube}`} />
                    </a>
                </Div>
                <Div>
                    {/* <a href="https://pcria.menofsillim.club/"> */}
                        <div className={`${styles.frame} ${styles.dashboard}`} />
                    {/* </a> */}
                </Div>
            </Slider>
        </div>
    )
};

export default SimpleSlider;