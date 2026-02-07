import React from 'react';
import styles from './DashboardWidgets.module.css';

const Notifications = () => {
    const notifications = [
        { id: 1, type: 'Hackathon', title: 'Smart India Hackathon 2026', date: 'Starts in 2 weeks', color: '#8b5cf6' },
        { id: 2, type: 'Ambassador', title: 'Microsoft Student Ambassador', date: 'Applications Open', color: '#0ea5e9' },
        { id: 3, type: 'Event', title: 'TechCrunch Disrupt Virtual', date: 'Tomorrow at 10 AM', color: '#f59e0b' },
    ];

    return (
        <div className={styles.widgetContainer}>
            <h3 className={styles.widgetTitle}>Notifications & Opportunities</h3>
            <div className={styles.notificationList}>
                {notifications.map(notif => (
                    <div key={notif.id} className={styles.notificationCard} style={{ borderLeftColor: notif.color }}>
                        <span className={styles.notifType} style={{ color: notif.color }}>{notif.type}</span>
                        <h4 className={styles.notifTitle}>{notif.title}</h4>
                        <p className={styles.notifDate}>{notif.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
