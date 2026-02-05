import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import styles from './Home.module.css';

const Home = () => {
    const [animationsDone, setAnimationsDone] = useState(false);

    return (
        <div className={styles.main}>
            <Navbar isVisible={animationsDone} />

            <main>
                <Hero onAnimationComplete={() => setAnimationsDone(true)} />

                <div className={`${styles.ctaContainer} ${animationsDone ? styles.visible : styles.hidden}`}>
                    <button className={styles.ctaButton}>
                        Get started
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Home;
