import React from 'react';
import RecentGigs from '../components/dashboard/RecentGigs';
import LimerentCertifications from '../components/dashboard/LimerentCertifications';
import ExternalCertifications from '../components/dashboard/ExternalCertifications';
import Notifications from '../components/dashboard/Notifications';
import styles from './StudentDashboard.module.css'; // Reusing existing styles for the grid

const DashboardHome = () => {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>Dashboard</h1>
                <p className={styles.welcomeSubtitle}>Find your next opportunity.</p>
            </header>

            <div className={styles.dashboardGrid}>
                <div className={styles.leftColumn}>
                    <RecentGigs />
                    <LimerentCertifications />
                </div>

                <div className={styles.rightColumn}>
                    <Notifications />
                    <ExternalCertifications />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
