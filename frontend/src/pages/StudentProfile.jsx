import React, { useEffect, useState } from 'react';
import styles from './StudentProfile.module.css';

const StudentProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    if (!user) return <div>Loading profile...</div>;

    // Use default values if some fields are missing in user object
    const displayName = user.name || 'Student Name';
    const displayUsername = user.username || '@username';
    const displayRole = user.role || 'Student';
    const displayBio = user.bio || 'Passionate learner and aspiring developer.';

    // Mock additional profile data not in auth response
    const stats = [
        { label: 'Gigs Completed', value: 12 },
        { label: 'Total Earnings', value: '₹5,200' },
        { label: 'Rating', value: '4.8/5' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.headerCard}>
                <div className={styles.coverPhoto}></div>
                <div className={styles.profileContent}>
                    <div className={styles.avatarWrapper}>
                        <img
                            src={`https://ui-avatars.com/api/?name=${displayName}&background=0D8ABC&color=fff`}
                            alt="Profile"
                            className={styles.avatar}
                        />
                    </div>
                    <div className={styles.infoSection}>
                        <div className={styles.mainInfo}>
                            <h1 className={styles.name}>{displayName}</h1>
                            <p className={styles.username}>{displayUsername}</p>
                            <span className={styles.roleBadge}>{displayRole}</span>
                        </div>
                        <button className={styles.editBtn}>Edit Profile</button>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.leftCol}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>About</h3>
                        <p className={styles.bio}>{displayBio}</p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Skills</h3>
                        <div className={styles.skillsList}>
                            {(user.skills || ['React', 'JavaScript', 'Design', 'Communication']).map((skill, i) => (
                                <span key={i} className={styles.skillTag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Your Stats</h3>
                        <div className={styles.statsGrid}>
                            {stats.map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
