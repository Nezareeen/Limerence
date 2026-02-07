import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CompanySidebar from '../components/CompanySidebar';
import styles from './DashboardLayout.module.css'; // Reusing Dashboard layout styles

const CompanyLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (!userInfo) {
            navigate('/auth');
            return;
        }

        const user = JSON.parse(userInfo);
        if (user.role && user.role !== 'company') {
            // If logged in as student, redirect to student dashboard
            navigate('/dashboard');
        }
    }, [navigate]);

    return (
        <div className={styles.container}>
            <CompanySidebar />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
        </div>
    );
};

export default CompanyLayout;
