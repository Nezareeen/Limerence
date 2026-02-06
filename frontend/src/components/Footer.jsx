import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Desire to reciprocate</h2>

                <div className={styles.linksGrid}>
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Social</h3>
                        <a href="#" className={styles.link}>Instagram</a>
                        <a href="#" className={styles.link}>LinkedIn</a>
                        <a href="#" className={styles.link}>Youtube</a>
                        <a href="#" className={styles.link}>BlueSky</a>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Support</h3>
                        <a href="#" className={styles.link}>Product help</a>
                        <a href="#" className={styles.link}>File a bug</a>
                        <a href="#" className={styles.link}>Localize Limerence</a>
                        <a href="#" className={styles.link}>Security</a>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Company</h3>
                        <a href="#" className={styles.link}>Contact us</a>
                        <a href="#" className={styles.link}>Careers</a>
                        <a href="#" className={styles.link}>Leadership</a>
                        <a href="#" className={styles.link}>Press center</a>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <h1 className={styles.largeLogo}>Limerence</h1>
                    <div className={styles.legal}>
                        <span>Privacy</span>
                        <span>© 2026 All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
