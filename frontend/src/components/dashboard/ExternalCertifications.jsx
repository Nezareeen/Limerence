import React from 'react';
import styles from './DashboardWidgets.module.css';

const ExternalCertifications = () => {
    const externalCerts = [
        { id: 1, title: 'Google Analytics Certification', provider: 'Google', expiry: 'Expires in 3 days', link: '#' },
        { id: 2, title: 'AWS Cloud Practitioner', provider: 'Amazon Web Services', expiry: 'Limited Time Free', link: '#' },
        { id: 3, title: 'Introduction to Cybersecurity', provider: 'Cisco', expiry: 'Always Free', link: '#' },
    ];

    return (
        <div className={styles.widgetContainer}>
            <h3 className={styles.widgetTitle}>External Certifications (Free)</h3>
            <div className={styles.externalList}>
                {externalCerts.map(cert => (
                    <div key={cert.id} className={styles.externalCard}>
                        <div className={styles.externalContent}>
                            <h4 className={styles.externalTitle}>{cert.title}</h4>
                            <p className={styles.externalProvider}>By {cert.provider}</p>
                            <span className={styles.expiryBadge}>{cert.expiry}</span>
                        </div>
                        <a href={cert.link} className={styles.externalLink}>Claim</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExternalCertifications;
