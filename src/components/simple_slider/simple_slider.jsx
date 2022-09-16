import React, { Component, useCallback, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simple_slider.module.css";
import styled from "styled-components";

const SimpleSlider = () => {

    const [dragging, setDragging] = useState(false);

    const handleBeforeChange = useCallback(() => {   
        setDragging(true);  
    }, []); 
    
    const handleAfterChange = useCallback(() => {
        setDragging(false);  
    }, []);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
        touchThreshold : 100,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange
      };
    
    const Div = styled.div`
      div {
        width: 23vw;
        height: 23vw;
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
                    <div className={`${styles.frame} ${styles.prometheus}`} onClick={()=>moveToUrl('http://192.168.0.16:30500/')} />
                </Div>
                <Div>
                    <div className={`${styles.frame} ${styles.grafana}`} onClick={()=>moveToUrl('http://192.168.0.16:30501/')} />
                </Div>
                <Div>
                    <div className={`${styles.frame} ${styles.airflow}`} onClick={()=>moveToUrl('http://192.168.0.16:30400/')} />
                </Div>
            </Slider>
        </div>
    )
};

export default SimpleSlider;