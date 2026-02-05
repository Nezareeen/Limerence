import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ isVisible }) => {
    return (
        <nav className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.logo}>
                Limerence
            </div>

            <div className={styles.links}>
                <a href="#about" className={styles.linkItem}>About</a>
                <a href="#use-cases" className={styles.linkItem}>Use Cases</a>
            </div>

            <div className={styles.auth}>
                <button className={styles.loginBtn}>
                    Log In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
