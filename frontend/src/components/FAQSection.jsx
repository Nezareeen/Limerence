import React, { useState, useEffect, useRef } from 'react';
import styles from './FAQSection.module.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(3); // Default open index based on image (4th item is index 3)
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll fade-in logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.disconnect();
        };
    }, []);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How short are the gigs on Limerence, and will they fit around my college schedule?",
            answer: "Most gigs are designed to be completed in a few hours or over a weekend, perfectly fitting around your academic commitments."
        },
        {
            question: "Do I really get paid or a certificate, and how does the payment work?",
            answer: "Yes, you get paid real money for every completed gig. Payments are processed securely upon task completion."
        },
        {
            question: "What if I'm not certified yet or don't have much experience — can I still get gigs?",
            answer: "Absolutely! We verify your student status, and many gigs are entry-level suitable for building your portfolio."
        },
        {
            question: "How short are the gigs on Limerence, and will they fit around my college schedule?",
            answer: "You can post a gig and start receiving applications within hours. Because we focus only on ultra-short tasks (≤7 days), students respond quickly. All applicants are verified college students with skill badges (and optional Limerence micro-certifications). You filter by skills, review profiles/portfolios, and do a quick interview — most matches happen in 1-2 days. Companies consistently get reliable, fresh talent for urgent needs like landing-page fixes or pitch-deck polish."
        },
        {
            question: "What does it cost me to use Limerence, and when do I pay?",
            answer: "Posting a gig is free. You only pay when you hire a student and the work is completed to your satisfaction."
        },
        {
            question: "What happens if the student doesn't complete the gig or the work isn't up to standard?",
            answer: "We offer a satisfaction guarantee. If the work isn't up to standard, you can request revisions or a refund."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className={`${styles.container} ${isVisible ? styles.visible : ''}`}
        >
            <h2 className={styles.heading}>Frequently asked questions</h2>
            <div className={styles.list}>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggleItem(index)}
                    >
                        <div className={styles.questionRow}>
                            <h3 className={styles.question}>{item.question}</h3>
                            <span className={styles.icon}>
                                {activeIndex === index ? '▲' : '▼'}
                            </span>
                        </div>
                        <div
                            className={styles.answerWrapper}
                            style={{ maxHeight: activeIndex === index ? '500px' : '0' }}
                        >
                            <div className={styles.answer}>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
