import React, { useState } from "react";
import Draggable from "react-draggable";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styles from "./detail_mos.module.css";

const DetailMos = () => {

  const isPc = useMediaQuery({
    query : "(min-width: 1024px)"
  });

  const isTablet = useMediaQuery({
      query : "(min-width: 768px) and (max-width: 1023px)"
  });

  const isMobile = useMediaQuery({
      query : "(max-width: 767px)"
  });

  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
	setPosition({ x: data.x, y: data.y }); 
  };
  
  const nodeRef = React.useRef(null);
  
  return (
    <>
    { isPc &&
      <div className={styles.detail}>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.skin} ${styles.skinKellogg}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.skin} ${styles.skinRubok}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.skin} ${styles.skinDavid}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.skin} ${styles.skinLeo}`}></div>
        </Draggable>
      </div>
    }
    { isTablet &&
      <div className={styles.taDetail}>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.taSkin} ${styles.skinKellogg}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.taSkin} ${styles.skinRubok}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.taSkin} ${styles.skinDavid}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.taSkin} ${styles.skinLeo}`}></div>
        </Draggable>
      </div>
    }
    { isMobile &&
      <div className={styles.moDetail}>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.moSkin} ${styles.skinKellogg}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.moSkin} ${styles.skinRubok}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.moSkin} ${styles.skinDavid}`}></div>
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}  nodeRef={nodeRef}>
            <div ref={nodeRef} className={`${styles.moSkin} ${styles.skinLeo}`}></div>
        </Draggable>
      </div>
    }
    </>
  )
};

export default DetailMos;
