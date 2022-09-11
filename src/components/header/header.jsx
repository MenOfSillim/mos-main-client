import React from 'react';
import styles from "./header.module.css";

const Header = () => {

    const moveToUrl = (url) => {
        console.log(`${url}`);
        window.location.replace(`${url}`);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={()=>moveToUrl('/')}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
            </div>
            {/* <img className={styles.buttonImg} src="/images/search.png" alt="" /> */}
            <div className={styles.nav}>
                <div><a className={styles.menu} href="/mos">MOS</a></div>
                <div><a className={styles.menu} href="/works">WORKS</a></div>
                <div><a className={styles.menu} href="/contact">CONTACT</a></div>
            </div>
        </header>    
    )
};

export default Header;