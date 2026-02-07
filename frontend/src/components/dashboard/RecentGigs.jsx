import React from 'react';
import styles from './DashboardWidgets.module.css';

const RecentGigs = () => {
    const gigs = [
        { id: 1, title: 'Logo Design for Startup', company: 'TechNova', price: '₹500', tags: ['Design', 'Creative'] },
        { id: 2, title: 'React Component Fix', company: 'WebSolutions', price: '₹800', tags: ['React', 'Bug Fix'] },
        { id: 3, title: 'Content Writing (500 words)', company: 'DailyBlog', price: '₹300', tags: ['Writing', 'SEO'] },
    ];

    return (
        <div className={styles.widgetContainer}>
            <h3 className={styles.widgetTitle}>Recent Gigs</h3>
            <div className={styles.gigsList}>
                {gigs.map(gig => (
                    <div key={gig.id} className={styles.gigCard}>
                        <div className={styles.gigHeader}>
                            <h4 className={styles.gigTitle}>{gig.title}</h4>
                            <span className={styles.gigPrice}>{gig.price}</span>
                        </div>
                        <p className={styles.gigCompany}>{gig.company}</p>
                        <div className={styles.tags}>
                            {gig.tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                        <button className={styles.applyBtn}>Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentGigs;
