import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./detail_works.module.css";
import SimpleSlider from "../simple_slider/simple_slider";

const DetailWorks = () => {
    // const navigate = useNavigate();
    // navigate("/works");

    return (
        <div className={styles.detail}>
            <SimpleSlider className={styles.slider}/>
        </div>
    );
}



export default DetailWorks;
