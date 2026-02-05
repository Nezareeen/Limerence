import React, { useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = ({ onAnimationComplete }) => {
    const line1 = "Where talent craves";
    const line2 = "opportunity";
    const charAnimationDuration = 0.5;
    const staggerDelay = 0.05;

    // Calculate total layout duration
    const totalChars = line1.length + line2.length;
    const totalDuration = (totalChars * staggerDelay + charAnimationDuration) * 1000;

    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationComplete();
        }, totalDuration + 500);

        return () => clearTimeout(timer);
    }, [onAnimationComplete, totalDuration]);

    const renderLine = (text, startIndex) => (
        <div key={text} className={styles.lineWrapper}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={styles.char}
                    style={{
                        display: char === " " ? "inline-block" : "inline",
                        animation: `globalFadeIn ${charAnimationDuration}s ease-out forwards`,
                        animationDelay: `${(startIndex + index) * staggerDelay}s`,
                    }}
                >
                    {char}
                </span>
            ))}
        </div>
    );

    return (
        <div className={styles.container}>
            <h2 className={styles.logoHeading}>
                Limerence
            </h2>

            <div
                className={styles.textContainer}
                onClick={() => window.location.reload()}
            >
                {renderLine(line1, 0)}
                {renderLine(line2, line1.length)}
            </div>
        </div>
    );
};

export default Hero;
