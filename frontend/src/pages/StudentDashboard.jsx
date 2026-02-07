import React from 'react';
import Sidebar from '../components/Sidebar';
import RecentGigs from '../components/dashboard/RecentGigs';
import LimerentCertifications from '../components/dashboard/LimerentCertifications';
import ExternalCertifications from '../components/dashboard/ExternalCertifications';
import Notifications from '../components/dashboard/Notifications';
import styles from './StudentDashboard.module.css';

const StudentDashboard = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.mainContent}>
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
            </main>
        </div>
    );
};

export default StudentDashboard;
