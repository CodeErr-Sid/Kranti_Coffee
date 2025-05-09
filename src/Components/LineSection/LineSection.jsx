import React, { useEffect, useRef, useState } from 'react';
import styles from './LineSection.module.css'; // Import CSS Module
import assets from '../../data/assets.js';
import { motion } from 'framer-motion'
import { content as contentArray } from '../../data/VerticalSlider.js';

const LineSection = () => {
    const childLineRef = useRef(null);
    const lineSectionRef = useRef(null);
    const [ballStates, setBallStates] = useState(contentArray.map(() => false));

    const updateLineProgress = () => {
        const rect = lineSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const balls = document.querySelectorAll(`.${styles.ball}`);

        const start = windowHeight * 0.5;
        const end = windowHeight * 0.5;

        if (rect.top < start && rect.bottom > 0) {
            const progress = Math.min(
                Math.max((start - rect.top) / (end + rect.height - start), 0),
                1
            );

            if (childLineRef.current) {
                childLineRef.current.style.height = `${progress * 100}%`;
            }

            const newBallStates = [...ballStates];
            balls.forEach((ball, index) => {
                const ballRect = ball.getBoundingClientRect();
                const lineRect = childLineRef.current.getBoundingClientRect();

                if (lineRect.bottom >= ballRect.top && lineRect.top <= ballRect.bottom) {
                    newBallStates[index] = true;
                } else {
                    newBallStates[index] = false;
                }
            });

            setBallStates(newBallStates);
        } else {
            if (childLineRef.current) childLineRef.current.style.height = '0%';
            setBallStates(contentArray.map(() => false));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateLineProgress);
        return () => window.removeEventListener('scroll', updateLineProgress);
    }, [contentArray]);

    // Intersection Observer to trigger animations on visibility
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const contentElement = entry.target;
                if (entry.isIntersecting) {
                    // When element is visible, add animation class
                    contentElement.classList.add(styles.visible);
                } else {
                    // Reset animations when not visible
                    contentElement.classList.remove(styles.visible);
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

        const elements = document.querySelectorAll(`.${styles.leftContent}`);
        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect(); // Cleanup on unmount
    }, []);

    return (
        <div id='isourcing' className='relative min-h-[400vh] overflow-x-hidden'>
            <h1 className="uppercase font-tanAegan font-normal text-2xl text-center pt-24 pb-4 text-primary">our Sourcing</h1>

            <div className='w-1/3 mx-auto mb-16 lg:mb-4'>
                <img loading="lazy" src={assets.fourHandles} alt="" />
            </div>

            <section className={styles.lineSection} ref={lineSectionRef}>
                <img loading="lazy" src={assets.coffeeBean} className='absolute -top-12 w-16 z-[4]' alt="" />

                <div className={styles.verticalLine}>
                    <div className={styles.childLine} ref={childLineRef}></div>
                </div>

                {contentArray.map((item, index) => (
                    <div className={styles.segment} key={index}>
                        <div className={styles.leftContent}>
                            <div className={styles.stickyBox}>
                                <div className={styles.stickyHeader}>
                                    <div className='bg-white p-2 rounded-sm'>
                                        <img loading="lazy" src={item.icon} alt="" className='w-[30px] h-[30px]' />
                                    </div>
                                    <h1 className='bg-primary text-center font-tanAegan text-secondary font-normal text-xs leading-1 lg:text-sm flex-1'>{item.title}</h1>
                                </div>
                                <div className={styles.lineContent}>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                        <div className={styles.center}>
                            <div
                                className={`${styles.ball} ${ballStates[index] ? styles.active : ''}`}
                            >
                                <img src='/kranti-favicon.jpg' alt="logo" />
                            </div>
                        </div>
                        <div className={styles.rightContent}></div>
                    </div>
                ))}
            </section>

            <img loading="lazy" src={assets.coffeePowerSpilled} className='absolute top-[23rem] w-1/3 right-0' alt="" />
            <motion.img loading="lazy"
                src={assets.coffeeTopView}
                className="absolute top-[43rem] w-1/4 left-0"
                alt=""
                animate={{
                    rotate: 360, // Rotate 360 degrees
                }}
                transition={{
                    repeat: Infinity, // Infinite loop
                    repeatType: 'loop', // Loop the animation
                    duration: 10, // Adjust duration for speed of rotation
                    ease: 'linear', // Continuous, smooth animation
                }}
            />
            <img loading="lazy" src={assets.coffeeBeanShovel} className='absolute max-[320px]:top-[73%] top-[65%] w-1/3 right-0' alt="" />
            <img loading="lazy" src={assets.naturalSoil} className='w-full absolute bottom-0 z-[3]' alt="" />
        </div>
    );
};

export default LineSection;
