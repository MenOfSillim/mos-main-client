import React from 'react';
import styles from "./header.module.css";

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
        {/* <img className={styles.img} src="/images/logo.png" alt="logo" /> */}
        <h1 className={styles.title}>MOS</h1>
        </div>
        {/* <img className={styles.buttonImg} src="/images/search.png" alt="" /> */}
    </header>    
    );

export default Header;