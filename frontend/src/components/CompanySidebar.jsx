import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'; // Reusing Sidebar styles for consistency

const CompanySidebar = () => {
    // Mock user data
    const user = {
        name: 'TechNova',
        username: '@technovainc',
        avatar: 'https://ui-avatars.com/api/?name=TechNova&background=0D8ABC&color=fff'
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.profileSection}>
                <div className={styles.avatarContainer}>
                    <img src={user.avatar} alt="Profile" className={styles.avatar} />
                </div>
                <div className={styles.userInfo}>
                    <h3 className={styles.username}>{user.name}</h3>
                    <p className={styles.realName}>Company Account</p>
                </div>
            </div>

            <nav className={styles.nav}>
                <NavLink to="/company" end className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Overview
                </NavLink>
                <NavLink to="/company/post-gig" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Post a Gig
                </NavLink>
                <NavLink to="/company/find-talent" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Find Talent
                </NavLink>
                <NavLink to="/company/manage-gigs" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Manage Gigs
                </NavLink>
                <NavLink to="/company/messages" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Messages
                </NavLink>
                <NavLink to="/company/profile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Profile
                </NavLink>
                <NavLink to="/company/settings" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Settings
                </NavLink>
            </nav>

            <div className={styles.logoSection}>
                <h1 className={styles.logo}>Limerence</h1>
            </div>
        </aside>
    );
};

export default CompanySidebar;
