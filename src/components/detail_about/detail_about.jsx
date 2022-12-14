import React from 'react';
import styles from "./detail_about.module.css";

const DetailAbout = () => {

    const moveToUrl = (url) => {
        console.log(`${url}`);
        window.location.replace(`${url}`);
    };

    return (
        <div className={styles.detail}>
            <img src="../../../public/images/background_mos.png"/>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <div className={styles.title}>what is the MOS</div>
                    <div className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </div>
                <div className={styles.platforms}>
                    <div className={styles.title}>our PLATFORMS</div>
                    <div className={styles.iconContainer}>
                        <div className={styles.platformIcons}>
                            <div className={styles.iconSlack}></div>
                            <div className={styles.iconGithub}></div>
                            <div className={styles.iconConfluence}></div>
                            <div className={styles.iconJira}></div>
                            <div className={styles.iconDocker}></div>
                        </div>
                    </div>
                </div>                
                <div className={styles.whatWeLearn}>
                    <div className={styles.title}>what we LEARN</div>
                    <div className={styles.collaboration}>
                        <div className={styles.subTitle}>Collaboration</div>
                        <div className={styles.subContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                    <div className={styles.communication}>
                        <div className={styles.subTitle}>Communication</div>
                        <div className={styles.subContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                    <div className={styles.convention}>
                        <div className={styles.subTitle}>Convention</div>
                        <div className={styles.subContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                    <div className={styles.techStack}>
                        <div className={styles.subTitle}>Tech Stack</div>
                        <div className={styles.subTechStack}>
                            <div className={`${styles.subContent} ${styles.subTitleStack}`}>Front-end</div>
                            <div className={styles.iconContainer}>
                                <div className={styles.icons}>
                                    <div className={`${styles.icon} ${styles.iconHtml}`}></div>
                                    <div className={`${styles.icon} ${styles.iconCss}`}></div>
                                    <div className={`${styles.icon} ${styles.iconJs}`}></div>
                                    <div className={`${styles.icon} ${styles.iconReact}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subTechStack}>
                            <div className={`${styles.subContent} ${styles.subTitleStack}`}>Back-end</div>
                            <div className={styles.iconContainer}>
                                <div className={styles.icons}>
                                    <div className={`${styles.icon} ${styles.iconJava}`}></div>
                                    <div className={`${styles.icon} ${styles.iconPython}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subTechStack}>
                            <div className={`${styles.subContent} ${styles.subTitleStack}`}>Solutions</div>
                            <div className={styles.iconContainer}>
                                <div className={styles.icons}>
                                    <div className={`${styles.icon} ${styles.iconKafka}`}></div>
                                    <div className={`${styles.icon} ${styles.iconAirflow}`}></div>
                                    <div className={`${styles.icon} ${styles.iconKeycloak}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subTechStack}>
                            <div className={`${styles.subContent} ${styles.subTitleStack}`}>SCM</div>
                            <div className={styles.iconContainer}>
                                <div className={styles.icons}>
                                    <div className={`${styles.icon} ${styles.iconDocker}`}></div>
                                    <div className={`${styles.icon} ${styles.iconGithub}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutMore}>
                        <div className={styles.title} onClick={()=>moveToUrl('/about/members')}>about our MEMBERS</div>
                        <div className={styles.title}>about our HISTORY</div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default DetailAbout;