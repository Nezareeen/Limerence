import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Settings.module.css'; // Reusing Settings styling

const CompanySettings = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Company Settings</h1>
                <p className={styles.subtitle}>Manage billing and account preferences.</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Preferences</h2>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.itemInfo}>
                            <span className={styles.label}>Application Alerts</span>
                            <span className={styles.desc}>Email me when someone applies.</span>
                        </div>
                        <label className={styles.switch}>
                            <input type="checkbox" defaultChecked />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Account</h2>
                <div className={styles.card}>
                    <button className={styles.btnOutline}>Billing Information</button>
                    <button className={`${styles.btnOutline} ${styles.danger} ${styles.logoutBtn}`} onClick={handleLogout}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanySettings;
