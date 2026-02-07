import React from 'react';
import styles from '../pages/StudentDashboard.module.css'; // Reusing layout styles
import widgetStyles from '../components/dashboard/DashboardWidgets.module.css'; // Reusing widget styles

const CompanyDashboard = () => {
    // Mock Data
    const activeGigs = 5;
    const totalApplications = 28;
    const recentApplications = [
        { id: 1, applicant: 'Alex Johnson', gig: 'Logo Design', time: '10m ago' },
        { id: 2, applicant: 'Sarah Lee', gig: 'React Component Fix', time: '1h ago' },
        { id: 3, applicant: 'Mike Chen', gig: 'Python Script', time: '3h ago' },
    ];

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.welcomeTitle}>Company Dashboard</h1>
                <p className={styles.welcomeSubtitle}>Manage your gigs and find talent.</p>
            </header>

            <div className={styles.dashboardGrid}>
                {/* Stats Widgets */}
                <div className={styles.leftColumn}>
                    <div className={widgetStyles.widgetContainer}>
                        <h3 className={widgetStyles.widgetTitle}>Overview</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ backgroundColor: '#eff6ff', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3b82f6' }}>{activeGigs}</div>
                                <div style={{ color: '#64748b' }}>Active Gigs</div>
                            </div>
                            <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#22c55e' }}>{totalApplications}</div>
                                <div style={{ color: '#64748b' }}>Total Applications</div>
                            </div>
                        </div>
                    </div>

                    <div className={widgetStyles.widgetContainer}>
                        <h3 className={widgetStyles.widgetTitle}>Recent Applications</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {recentApplications.map(app => (
                                <div key={app.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                                    <div>
                                        <div style={{ fontWeight: '600', color: '#1f2937' }}>{app.applicant}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Applied for: {app.gig}</div>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{app.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className={styles.rightColumn}>
                    <div className={widgetStyles.widgetContainer}>
                        <h3 className={widgetStyles.widgetTitle}>Quick Actions</h3>
                        <button style={{
                            width: '100%', padding: '1rem', marginBottom: '1rem',
                            backgroundColor: '#3b82f6', color: 'white', border: 'none',
                            borderRadius: '8px', fontWeight: '600', cursor: 'pointer'
                        }}>
                            Post a New Gig
                        </button>
                        <button style={{
                            width: '100%', padding: '1rem',
                            backgroundColor: 'white', color: '#3b82f6', border: '1px solid #3b82f6',
                            borderRadius: '8px', fontWeight: '600', cursor: 'pointer'
                        }}>
                            View All Gigs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
