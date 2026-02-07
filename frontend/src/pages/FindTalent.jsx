import React, { useState } from 'react';
import styles from './FindTalent.module.css';

const FindTalent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSkill, setSelectedSkill] = useState('All');

    // Mock student data
    const students = [
        {
            id: 1,
            name: 'Alex Johnson',
            username: '@alex_j',
            bio: 'Aspiring Frontend Developer with a passion for UI/UX.',
            skills: ['React', 'JavaScript', 'CSS'],
            avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=0D8ABC&color=fff'
        },
        {
            id: 2,
            name: 'Sarah Lee',
            username: '@sarah_dev',
            bio: 'Backend Engineer specializing in Node.js and Python.',
            skills: ['Node.js', 'Python', 'MongoDB'],
            avatar: 'https://ui-avatars.com/api/?name=Sarah+Lee&background=22c55e&color=fff'
        },
        {
            id: 3,
            name: 'Mike Chen',
            username: '@mike_designs',
            bio: 'Creative Graphic Designer with 3+ years of experience.',
            skills: ['Design', 'Photoshop', 'Illustrator'],
            avatar: 'https://ui-avatars.com/api/?name=Mike+Chen&background=f59e0b&color=fff'
        },
        {
            id: 4,
            name: 'Emily Davis',
            username: '@emily_writes',
            bio: 'Expert Content Writer and SEO Specialist.',
            skills: ['Writing', 'SEO', 'Marketing'],
            avatar: 'https://ui-avatars.com/api/?name=Emily+Davis&background=ef4444&color=fff'
        },
        {
            id: 5,
            name: 'Priya Sharma',
            username: '@priya_codes',
            bio: 'Fullstack Developer with a focus on React and Node.js.',
            skills: ['React', 'Node.js', 'SQL'],
            avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=8b5cf6&color=fff'
        }
    ];

    const allSkills = ['All', 'React', 'JavaScript', 'Node.js', 'Python', 'Design', 'Writing', 'SEO'];

    const filteredStudents = students.filter(student => {
        const matchesSearch = student.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesSkill = selectedSkill === 'All' || student.skills.includes(selectedSkill);
        return matchesSearch && matchesSkill;
    });

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Find Talent</h1>
                <p className={styles.subtitle}>Discover and hire the best students for your micro-gigs.</p>
            </header>

            <div className={styles.controls}>
                <input
                    type="text"
                    placeholder="Search by username or skill..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className={styles.filterSelect}
                    value={selectedSkill}
                    onChange={(e) => setSelectedSkill(e.target.value)}
                >
                    {allSkills.map(skill => (
                        <option key={skill} value={skill}>{skill}</option>
                    ))}
                </select>
            </div>

            <div className={styles.studentsGrid}>
                {filteredStudents.map(student => (
                    <div key={student.id} className={styles.studentCard}>
                        <div className={styles.cardContent}>
                            <img src={student.avatar} alt={student.username} className={styles.avatar} />
                            <h3 className={styles.usernameHeader}>{student.username}</h3>
                            <p className={styles.bio}>{student.bio}</p>
                            <div className={styles.skills}>
                                {student.skills.map(skill => (
                                    <span key={skill} className={styles.skillTag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                        <button className={styles.viewProfileBtn}>View Profile</button>
                    </div>
                ))}
            </div>

            {filteredStudents.length === 0 && (
                <div className={styles.noResults}>
                    <p>No students found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default FindTalent;
