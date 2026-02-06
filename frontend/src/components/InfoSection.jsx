import React from 'react';
import styles from './InfoSection.module.css';
import studentImage from '../assets/student_working.svg';
import companyImage from '../assets/company_office.svg';

const InfoSection = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2, // Increased threshold to ensure it's partially in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.container} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.intro}>
                <p>
                    Limerence is a next-generation micro-gig platform<br />
                    built for students and startups that move fast we connect<br />
                    skilled verified students with real, ultra-short tasks. Real pay. Done in days.
                </p>
            </div>

            <div className={styles.section}>
                <div className={styles.imageWrapper}>
                    <img src={studentImage} alt="Student working" className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.heading}>For students</h2>
                    <p className={styles.text}>
                        No long internships, no weekly<br />
                        commitments, just fast, focused gigs, that<br />
                        fit around classes and life delivering real pay, certifications.
                    </p>
                </div>
            </div>

            <div className={`${styles.section} ${styles.reverse}`}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>For companies</h2>
                    <p className={styles.text}>
                        Startups get affordable,<br />
                        reliable help on-demand,<br />
                        no lengthy hiring, no HR headaches.
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={companyImage} alt="Company office" className={styles.image} />
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
