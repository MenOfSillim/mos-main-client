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
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
        touchThreshold : 100,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [ // 반응형 웹 구현 옵션
					// {  
					// 	breakpoint: 960, //화면 사이즈 960px
					// 	settings: {
					// 		//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					// 		slidesToShow:3 
					// 	} 
					// },
					{ 
						breakpoint: 768, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow: 2 
						} 
					}
				    ],
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
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
                    <div className={`${styles.frame} ${styles.cardmaker}`} onClick={()=>moveToUrl('https://cardmaker.menofsillim.club/')} />
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