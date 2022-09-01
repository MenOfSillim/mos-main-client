import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simple_slider.module.css";
import styled from "styled-components";

const SimpleSlider = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
      };
    
    const Div = styled.div`
      div {
        width: 25vw;
        height: 25vw;
      }
    `;

    const moveToUrl = (url) => {
        console.log(`${url}`);
        window.location.replace(`${url}`);
    };

    return (
        <div className={styles.container}>
           <Slider className={styles.slider} {...settings}>
                <Div>
                    <div className={`${styles.frame} ${styles.pcria}`} onClick={()=>moveToUrl('https://pcria.menofsillim.club/')} />
                </Div>
                <Div>
                    <div className={`${styles.frame} ${styles.findyourperfume}`} onClick={()=>moveToUrl('https://findyourperfume.menofsillim.club/')} />
                </Div>
                <Div>
                    <div className={`${styles.frame} ${styles.youtube}`} onClick={()=>moveToUrl('https://youtube.menofsillim.club/')} />
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