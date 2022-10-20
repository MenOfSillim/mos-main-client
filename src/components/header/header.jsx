import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "./header.module.css";

const Header = () => {

    const isPc = useMediaQuery({
        query : "(min-width: 1024px)"
    });

    const isTablet = useMediaQuery({
        query : "(min-width: 768px) and (max-width: 1023px)"
    });

    const isMobile = useMediaQuery({
        query : "(max-width: 767px)"
    });

    const moveToUrl = (url) => {
        console.log(`${url}`);
        window.location.replace(`${url}`);
    };

    return (
        <header className={styles.header}>
            { isPc &&
                <>
                    <div className={styles.logo} onClick={()=>moveToUrl('/')}>
                        <img className={styles.img} src="/images/logo.png" alt="logo" />
                    </div>
                    <div className={styles.nav}>
                        {/* <div><a className={styles.menu} href="/about">ABOUT</a></div> */}
                        <div><a className={styles.menu} href="/">MOS</a></div>
                        <div><a className={styles.menu} href="/project">PROJECT</a></div>
                        <div><a className={styles.menu} href="/contact">CONTACT</a></div>
                    </div>
                </>
            }
            { isTablet &&
                <> 
                    <div className={styles.logo} onClick={()=>moveToUrl('/')}>
                        <img className={styles.taImg} src="/images/logo.png" alt="logo" />
                    </div>
                    <div className={styles.taNav}>
                        {/* <div><a className={styles.taMenu} href="/about">ABOUT</a></div> */}
                        <div><a className={styles.taMenu} href="/">MOS</a></div>
                        <div><a className={styles.taMenu} href="/project">PROJECT</a></div>
                        <div><a className={styles.taMenu} href="/contact">CONTACT</a></div>
                    </div>
                </>
            }
            { isMobile &&
                <> 
                    <div className={styles.logo} onClick={()=>moveToUrl('/')}>
                        <img className={styles.moImg} src="/images/logo.png" alt="logo" />
                    </div>
                    <div className={styles.moNav}>
                        {/* <div><a className={styles.moMenu} href="/about">ABOUT</a></div> */}
                        <div><a className={styles.moMenu} href="/">MOS</a></div>
                        <div><a className={styles.moMenu} href="/project">PROJECT</a></div>
                        <div><a className={styles.moMenu} href="/contact">CONTACT</a></div>
                    </div>
                </>
            }
            
        </header>   
    )
};

export default Header;