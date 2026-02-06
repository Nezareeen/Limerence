import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ isVisible }) => {
    const navigate = useNavigate();

    return (
        <nav className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.logo}>
                Limerence
            </div>

            <div className={styles.links}>
                <a href="#" className={styles.linkItem}>About</a>
                <a href="#" className={styles.linkItem}>Use Cases .</a>
            </div>

            <div className={styles.auth}>
                <button onClick={() => navigate('/auth')} className={styles.loginBtn}>
                    Log In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
