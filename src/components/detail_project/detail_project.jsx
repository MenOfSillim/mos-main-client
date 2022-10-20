import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./detail_project.module.css";
import SimpleSlider from "../simple_slider/simple_slider";

const DetailProject = () => {

    return (
        <div className={styles.detail}>
            <SimpleSlider className={styles.slider}/>
        </div>
    );
}



export default DetailProject;
