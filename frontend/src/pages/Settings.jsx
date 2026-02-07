import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Settings.module.css';

const Settings = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data
        localStorage.removeItem('userInfo');
        // Redirect to Home
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Settings</h1>
                <p className={styles.subtitle}>Manage your account preferences.</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Account</h2>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.itemInfo}>
                            <span className={styles.label}>Email Notifications</span>
                            <span className={styles.desc}>Receive emails about new gigs.</span>
                        </div>
                        <label className={styles.switch}>
                            <input type="checkbox" defaultChecked />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.item}>
                        <div className={styles.itemInfo}>
                            <span className={styles.label}>Profile Visibility</span>
                            <span className={styles.desc}>Make your profile public to recruiters.</span>
                        </div>
                        <label className={styles.switch}>
                            <input type="checkbox" defaultChecked />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Security</h2>
                <div className={styles.card}>
                    <button className={styles.btnOutline}>Change Password</button>
                    <button className={`${styles.btnOutline} ${styles.danger} ${styles.logoutBtn}`} onClick={handleLogout}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
