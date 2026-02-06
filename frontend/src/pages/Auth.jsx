import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Auth.module.css';
import authImage from '../assets/Auth page.png';
// Import animejs correctly for ESM usage if needed, or use the installed Beta.
// Based on installed version 4.3.0-beta.2, importing named exports.
import {
    animate,
    createTimeline,
    stagger,
    text,
    utils,
} from 'animejs';

const Auth = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('student');
    const [mode, setMode] = useState('register');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const titleRef = useRef(null);
    const logoRef = useRef(null);

    // Form states
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [studentData, setStudentData] = useState({
        name: '', username: '', email: '', password: '', confirmPassword: '',
        skills: ['', '', ''], availability: '', location: '', locationType: '', bio: ''
    });
    const [companyData, setCompanyData] = useState({
        name: '', email: '', password: '', confirmPassword: '', bio: '', establishedYear: ''
    });

    useEffect(() => {
        const applyExplodingEffect = (element) => {
            if (!element) return;

            // Ensuring we don't re-split significantly on re-renders without cleanup
            // Ideally, 'text.split' modifies the DOM.
            const split = text.split(element, {
                chars: {
                    class: 'char',
                    // clone: 'top', // Removed clone to simplify for now, can re-add if needed for specific visual
                    wrap: 'clip',
                },
            });

            const chars = split.chars;

            const onEnter = () => {
                createTimeline().add(chars, {
                    x: {
                        to: () => utils.random(-3, 3) + 'rem',
                        duration: () => utils.random(150, 500),
                    },
                    y: () => utils.random(-5, 5) + 'rem',
                    rotate: () => utils.random(-180, 180),
                    duration: () => utils.random(200, 750),
                    ease: 'outCirc',
                    composition: 'blend',
                }, stagger(5, { from: 'random' }));
            };

            const onLeave = () => {
                createTimeline().add(chars, {
                    x: { to: 0, delay: 75 },
                    y: 0,
                    duration: () => utils.random(200, 400),
                    rotate: {
                        to: 0,
                        delay: 150,
                        duration: () => utils.random(300, 400),
                    },
                    ease: 'inOut(2)',
                    composition: 'blend',
                }, stagger(10, { from: 'random' }));
            };

            element.addEventListener('pointerenter', onEnter);
            element.addEventListener('pointerleave', onLeave);

            return () => {
                element.removeEventListener('pointerenter', onEnter);
                element.removeEventListener('pointerleave', onLeave);
                // Ideally revert split text here if possible, or just leave it since component unmounts
            };
        };

        const cleanupTitle = applyExplodingEffect(titleRef.current);
        const cleanupLogo = applyExplodingEffect(logoRef.current);

        return () => {
            if (cleanupTitle) cleanupTitle();
            if (cleanupLogo) cleanupLogo();
        };
    }, []);

    const handleRoleSwitch = (newRole) => {
        setRole(newRole);
        setError('');
    };

    const handleModeSwitch = () => {
        setMode(mode === 'login' ? 'register' : 'login');
        setError('');
    };

    const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleStudentChange = (e) => {
        if (e.target.name.startsWith('skill-')) {
            const index = parseInt(e.target.name.split('-')[1]);
            const newSkills = [...studentData.skills];
            newSkills[index] = e.target.value;
            setStudentData({ ...studentData, skills: newSkills });
        } else {
            setStudentData({ ...studentData, [e.target.name]: e.target.value });
        }
    };

    const handleCompanyChange = (e) => setCompanyData({ ...companyData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const url = mode === 'login'
            ? 'http://localhost:5000/api/auth/login'
            : role === 'student'
                ? 'http://localhost:5000/api/auth/register/student'
                : 'http://localhost:5000/api/auth/register/company';

        const payload = mode === 'login'
            ? loginData
            : role === 'student'
                ? studentData
                : companyData;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('userInfo', JSON.stringify(data));
                navigate('/'); // Redirect to Home
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.formContainer}>
                    <Link to="/" className={styles.logo}>Limerence</Link>

                    <h1 className={styles.title}>
                        {mode === 'login' ? 'Welcome back' : 'Create an account'}
                    </h1>

                    {mode === 'register' && (
                        <div className={styles.roleToggle}>
                            <button
                                className={`${styles.roleBtn} ${role === 'student' ? styles.activeRole : ''}`}
                                onClick={() => handleRoleSwitch('student')}
                            >
                                Student
                            </button>
                            <button
                                className={`${styles.roleBtn} ${role === 'company' ? styles.activeRole : ''}`}
                                onClick={() => handleRoleSwitch('company')}
                            >
                                Company
                            </button>
                        </div>
                    )}

                    {error && <div className={styles.error}>{error}</div>}

                    <form onSubmit={handleSubmit} className={styles.form}>
                        {mode === 'login' && (
                            <>
                                <input
                                    className={styles.input} type="email" name="email"
                                    placeholder="Email" value={loginData.email} onChange={handleLoginChange} required
                                />
                                <input
                                    className={styles.input} type="password" name="password"
                                    placeholder="Password" value={loginData.password} onChange={handleLoginChange} required
                                />
                            </>
                        )}

                        {mode === 'register' && role === 'student' && (
                            <>
                                <input className={styles.input} type="text" name="name" placeholder="Full Name" onChange={handleStudentChange} required />
                                <input className={styles.input} type="text" name="username" placeholder="Username (No real name)" onChange={handleStudentChange} required />
                                <input className={styles.input} type="email" name="email" placeholder="Email" onChange={handleStudentChange} required />
                                <div className={styles.row}>
                                    <input className={styles.input} type="password" name="password" placeholder="Password" onChange={handleStudentChange} required />
                                    <input className={styles.input} type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleStudentChange} required />
                                </div>
                                <div className={styles.skillsContainer}>
                                    {[0, 1, 2].map(i => (
                                        <select key={i} name={`skill-${i}`} className={styles.select} onChange={handleStudentChange} required>
                                            <option value="">Select Skill {i + 1}</option>
                                            <option value="React">React</option>
                                            <option value="Node.js">Node.js</option>
                                            <option value="Python">Python</option>
                                            <option value="Design">Design</option>
                                            <option value="Writing">Writing</option>
                                        </select>
                                    ))}
                                </div>
                                <input className={styles.input} type="text" name="availability" placeholder="Availability (e.g., Weekends)" onChange={handleStudentChange} required />
                                <div className={styles.row}>
                                    <input className={styles.input} type="text" name="location" placeholder="City" onChange={handleStudentChange} required />
                                    <select name="locationType" className={styles.select} onChange={handleStudentChange} required>
                                        <option value="">Location Type</option>
                                        <option value="remote">Remote</option>
                                        <option value="on-site">On-site</option>
                                        <option value="hybrid">Hybrid</option>
                                    </select>
                                </div>
                                <textarea name="bio" className={styles.textarea} placeholder="One word bio" rows="2" onChange={handleStudentChange}></textarea>
                            </>
                        )}

                        {mode === 'register' && role === 'company' && (
                            <>
                                <input className={styles.input} type="text" name="name" placeholder="Company Name" onChange={handleCompanyChange} required />
                                <input className={styles.input} type="email" name="email" placeholder="Email" onChange={handleCompanyChange} required />
                                <div className={styles.row}>
                                    <input className={styles.input} type="password" name="password" placeholder="Password" onChange={handleCompanyChange} required />
                                    <input className={styles.input} type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleCompanyChange} required />
                                </div>
                                <input className={styles.input} type="number" name="establishedYear" placeholder="Established Year" onChange={handleCompanyChange} required />
                                <textarea name="bio" className={styles.textarea} placeholder="Company Bio (<300 words)" rows="4" onChange={handleCompanyChange}></textarea>
                            </>
                        )}

                        <button className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Processing...' : (mode === 'login' ? 'Log in' : 'Register')}
                        </button>
                    </form>

                    <p className={styles.switchMode}>
                        {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={handleModeSwitch} className={styles.link}>
                            {mode === 'login' ? 'Sign up' : 'Log in'}
                        </span>
                    </p>
                </div>
            </div>

            <div className={styles.rightSide}>
                <img src={authImage} alt="Auth Background" className={styles.bgImage} />
                <div className={styles.overlayText} style={{ pointerEvents: 'auto' }}>
                    <h2 ref={titleRef}>Micro-gigs.<br />Maximum impact.</h2>
                </div>
                <div className={styles.overlayLogo} style={{ pointerEvents: 'auto' }}>
                    <h1 ref={logoRef}>Limerence</h1>
                </div>
            </div>
        </div>
    );
};

export default Auth;
