import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    // Mock user data - replace with actual user data from context/prop later
    const user = {
        name: 'Alex Johnson',
        username: '@alex_j',
        avatar: 'https://i.pravatar.cc/150?u=alex_j' // Placeholder
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.profileSection}>
                <div className={styles.avatarContainer}>
                    <img src={user.avatar} alt="Profile" className={styles.avatar} />
                </div>
                <div className={styles.userInfo}>
                    <h3 className={styles.username}>{user.username}</h3>
                    <p className={styles.realName}>{user.name}</p>
                </div>
            </div>

            <nav className={styles.nav}>
                <NavLink to="/dashboard" end className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Overview
                </NavLink>
                <NavLink to="/dashboard/profile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Profile
                </NavLink>
                <NavLink to="/dashboard/messages" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Messages
                </NavLink>
                <NavLink to="/dashboard/find-gigs" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Find Gigs
                </NavLink>
                <NavLink to="/dashboard/settings" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
                    Settings
                </NavLink>
            </nav>

            <div className={styles.logoSection}>
                <h1 className={styles.logo}>Limerence</h1>
            </div>
        </aside>
    );
};

export default Sidebar;
