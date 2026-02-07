import React, { useState } from 'react';
import styles from './FindGigs.module.css';

const FindGigs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    // Mock Data
    const allGigs = [
        { id: 1, title: 'Logo Design for Startup', company: 'TechNova', price: '₹500', category: 'Design', tags: ['Logo', 'Brand'] },
        { id: 2, title: 'React Component Fix', company: 'WebSolutions', price: '₹800', category: 'Development', tags: ['React', 'Bug Fix'] },
        { id: 3, title: 'Content Writing (500 words)', company: 'DailyBlog', price: '₹300', category: 'Writing', tags: ['Blog', 'SEO'] },
        { id: 4, title: 'Social Media Banner', company: 'FashionHub', price: '₹400', category: 'Design', tags: ['Social', 'Canva'] },
        { id: 5, title: 'Python Script for Scraping', company: 'DataCo', price: '₹1200', category: 'Development', tags: ['Python', 'Scrapy'] },
        { id: 6, title: 'Video Editing for Reel', company: 'InfluencerX', price: '₹1000', category: 'Multimedia', tags: ['Premiere', 'Reels'] },
    ];

    const filteredGigs = allGigs.filter(gig => {
        const matchesSearch = gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            gig.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || gig.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Find Gigs</h1>
                <p className={styles.subtitle}>Browse micro-gigs tailored for your skills.</p>
            </header>

            <div className={styles.controls}>
                <input
                    type="text"
                    placeholder="Search for gigs..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className={styles.filterSelect}
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Writing">Writing</option>
                    <option value="Multimedia">Multimedia</option>
                </select>
            </div>

            <div className={styles.gigsGrid}>
                {filteredGigs.map(gig => (
                    <div key={gig.id} className={styles.gigCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.categoryBadge}>{gig.category}</span>
                            <span className={styles.price}>{gig.price}</span>
                        </div>
                        <h3 className={styles.gigTitle}>{gig.title}</h3>
                        <p className={styles.companyName}>{gig.company}</p>

                        <div className={styles.tags}>
                            {gig.tags.map((tag, i) => (
                                <span key={i} className={styles.tag}>{tag}</span>
                            ))}
                        </div>

                        <button className={styles.applyBtn}>Apply Now</button>
                    </div>
                ))}
            </div>

            {filteredGigs.length === 0 && (
                <div className={styles.noResults}>
                    <p>No gigs found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default FindGigs;
