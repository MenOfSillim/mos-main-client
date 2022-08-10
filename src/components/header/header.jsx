import React from 'react';
import styles from "./header.module.css";

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.png" alt="logo" />
        </div>
        {/* <img className={styles.buttonImg} src="/images/search.png" alt="" /> */}
        <div className={styles.nav}>
            <div className={styles.menu}>MOS</div>
            <div className={styles.menu}>WORKS</div>
            <div className={styles.menu}>CONTACT</div>
        </div>
    </header>    
    );

export default Header;