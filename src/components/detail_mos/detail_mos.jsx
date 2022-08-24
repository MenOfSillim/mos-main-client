import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./detail_mos.module.css";

const DetailMos = () => {

  // const navigate = useNavigate();
  // navigate("/mos")

  return (
    <div className={styles.detail}>
    <div className={`${styles.skin} ${styles.skinKellogg}`}></div>
    <div className={`${styles.skin} ${styles.skinRubok}`}></div>
    <div className={`${styles.skin} ${styles.skinDavid}`}></div>
    <div className={`${styles.skin} ${styles.skinLeo}`}></div>
  </div>
  )
};

export default DetailMos;
