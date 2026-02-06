import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import styles from './Home.module.css';

const Home = () => {
    const [animationsDone, setAnimationsDone] = useState(false);

    return (
        <div className={styles.main}>
            <Navbar isVisible={animationsDone} />

            <main>
                <Hero onAnimationComplete={() => setAnimationsDone(true)} animationsDone={animationsDone} />
                <InfoSection />
                <FAQSection />
                <Footer />
            </main>
        </div>
    );
};

export default Home;
