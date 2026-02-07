import React, { useState } from 'react';
import styles from './ManageGigs.module.css';

const ManageGigs = () => {
    // Mock Gigs Data
    const [gigs, setGigs] = useState([
        { id: 1, title: 'Logo Design for Startup', status: 'Active', applicants: 12, posted: '2 days ago' },
        { id: 2, title: 'React Component Fix', status: 'Active', applicants: 5, posted: '5 days ago' },
        { id: 3, title: 'Content Writing (500 words)', status: 'Closed', applicants: 8, posted: '1 week ago' },
    ]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this gig?')) {
            setGigs(gigs.filter(gig => gig.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Manage Gigs</h1>
                <p className={styles.subtitle}>Track and manage your posted opportunities.</p>
            </header>

            <div className={styles.gigsList}>
                {gigs.map(gig => (
                    <div key={gig.id} className={styles.gigItem}>
                        <div className={styles.gigInfo}>
                            <h3 className={styles.gigTitle}>{gig.title}</h3>
                            <div className={styles.meta}>
                                <span className={`${styles.statusBadge} ${styles[gig.status.toLowerCase()]}`}>{gig.status}</span>
                                <span className={styles.metaText}>Posted {gig.posted}</span>
                            </div>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.statCount}>{gig.applicants}</div>
                            <div className={styles.statLabel}>Applicants</div>
                        </div>

                        <div className={styles.actions}>
                            <button className={styles.editBtn}>Edit</button>
                            <button className={styles.deleteBtn} onClick={() => handleDelete(gig.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageGigs;
