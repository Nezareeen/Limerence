import React, { useState, useEffect } from 'react';
import styles from './StudentProfile.module.css'; // Reusing profile styles

const CompanyProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    if (!user) return <div>Loading...</div>;

    const companyName = user.name || 'TechNova Inc.';
    const industry = 'Technology & Software';
    const email = user.email || 'contact@technova.com';
    const bio = user.bio || 'Leading innovation in software solutions for startups and enterprises.';

    return (
        <div className={styles.container}>
            <div className={styles.headerCard}>
                <div className={styles.coverPhoto} style={{ background: 'linear-gradient(to right, #1e293b, #334155)' }}></div>
                <div className={styles.profileContent}>
                    <div className={styles.avatarWrapper}>
                        <img
                            src={`https://ui-avatars.com/api/?name=${companyName}&background=0D8ABC&color=fff`}
                            alt="Profile"
                            className={styles.avatar}
                        />
                    </div>
                    <div className={styles.infoSection}>
                        <div className={styles.mainInfo}>
                            <h1 className={styles.name}>{companyName}</h1>
                            <p className={styles.username}>{industry}</p>
                            <span className={styles.roleBadge} style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>Verified Company</span>
                        </div>
                        <button className={styles.editBtn}>Edit Profile</button>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.leftCol}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>About Us</h3>
                        <p className={styles.bio}>{bio}</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Contact</h3>
                        <p style={{ color: '#475569' }}>Email: {email}</p>
                        <p style={{ color: '#475569' }}>Website: www.technova.com</p>
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Stats</h3>
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>12</span>
                                <span className={styles.statLabel}>Gigs Posted</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>8</span>
                                <span className={styles.statLabel}>Hires Made</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
