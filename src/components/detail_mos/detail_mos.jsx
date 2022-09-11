import React, { useState } from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import styles from "./detail_mos.module.css";

const DetailMos = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
	setPosition({ x: data.x, y: data.y }); 
  };

  return (
    <div className={styles.detail}>
      <Draggable onDrag={(e, data) => trackPos(data)} >
          <div className={`${styles.skin} ${styles.skinKellogg}`}></div>
      </Draggable>
      <Draggable onDrag={(e, data) => trackPos(data)} >
          <div className={`${styles.skin} ${styles.skinRubok}`}></div>
      </Draggable>
      <Draggable onDrag={(e, data) => trackPos(data)} >
          <div className={`${styles.skin} ${styles.skinDavid}`}></div>
      </Draggable>
      <Draggable onDrag={(e, data) => trackPos(data)} >
          <div className={`${styles.skin} ${styles.skinLeo}`}></div>
      </Draggable>
    </div>
  )
};

export default DetailMos;
