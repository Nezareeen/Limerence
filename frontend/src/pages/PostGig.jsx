import React, { useState } from 'react';
import styles from './PostGig.module.css';

const PostGig = () => {
    const [gigData, setGigData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        skills: ''
    });

    const handleChange = (e) => {
        setGigData({ ...gigData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gig posted successfully! (Mock)');
        setGigData({ title: '', description: '', price: '', category: '', skills: '' });
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Post a New Gig</h1>
                <p className={styles.subtitle}>Create a micro-gig and find the perfect student.</p>
            </header>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Gig Title</label>
                    <input
                        type="text" name="title" className={styles.input}
                        placeholder="e.g. Logo Design for Startup"
                        value={gigData.title} onChange={handleChange} required
                    />
                </div>

                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Category</label>
                        <select name="category" className={styles.select} value={gigData.category} onChange={handleChange} required>
                            <option value="">Select Category</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Writing">Writing</option>
                            <option value="Multimedia">Multimedia</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Price (₹)</label>
                        <input
                            type="number" name="price" className={styles.input}
                            placeholder="e.g. 500"
                            value={gigData.price} onChange={handleChange} required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Required Skills (comma separated)</label>
                    <input
                        type="text" name="skills" className={styles.input}
                        placeholder="e.g. Photoshop, Illustrator, Creativity"
                        value={gigData.skills} onChange={handleChange} required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Description</label>
                    <textarea
                        name="description" className={styles.textarea} rows="6"
                        placeholder="Describe the task in detail..."
                        value={gigData.description} onChange={handleChange} required
                    ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>Post Gig</button>
            </form>
        </div>
    );
};

export default PostGig;
