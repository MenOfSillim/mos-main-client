import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "./header.module.css";

const Header = () => {

    const isPc = useMediaQuery({
        query : "(min-width: 1024px)"
    });

    const isTablet = useMediaQuery({
        query : "(min-width: 768px) and (max-width: 1024px)"
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
                        <div><a className={styles.menu} href="/mos">MOS</a></div>
                        <div><a className={styles.menu} href="/works">WORKS</a></div>
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
                        <div><a className={styles.taMenu} href="/mos">MOS</a></div>
                        <div><a className={styles.taMenu} href="/works">WORKS</a></div>
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
                        <div><a className={styles.moMenu} href="/mos">MOS</a></div>
                        <div><a className={styles.moMenu} href="/works">WORKS</a></div>
                        <div><a className={styles.moMenu} href="/contact">CONTACT</a></div>
                    </div>
                </>
            }
            
        </header>   
    )
};

export default Header;