import React from 'react';
import styles from './DashboardWidgets.module.css';

const LimerentCertifications = () => {
    const certs = [
        { id: 1, title: 'Professional Skills', price: '₹149', originalPrice: '₹499', description: 'Master workplace etiquette.' },
        { id: 2, title: 'Interview Etiquette', price: '₹119', originalPrice: '₹299', description: 'Ace your next interview.' },
        { id: 3, title: 'Spoken English', price: 'Free', originalPrice: '₹999', description: 'Communicate with confidence.' },
    ];

    return (
        <div className={styles.widgetContainer}>
            <h3 className={styles.widgetTitle}>Limerent Certifications</h3>
            <div className={styles.certGrid}>
                {certs.map(cert => (
                    <div key={cert.id} className={styles.certCard}>
                        <div className={styles.certHeader}>
                            <h4 className={styles.certTitle}>{cert.title}</h4>
                            {cert.price === 'Free' ? (
                                <span className={styles.freeBadge}>Free</span>
                            ) : (
                                <span className={styles.priceBadge}>{cert.price}</span>
                            )}
                        </div>
                        <p className={styles.certDesc}>{cert.description}</p>
                        <button className={styles.enrollBtn}>Enroll Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LimerentCertifications;
