import React, { useEffect, useRef, useState } from 'react';
import styles from './LineSection.module.css'; // Import CSS Module
import assets from '../../assets/assets';
import { CiLocationOn } from "react-icons/ci";


const LineSection = () => {
    const childLineRef = useRef(null);
    const lineSectionRef = useRef(null);
    const [ballStates, setBallStates] = useState([false, false, false, false]);

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
            setBallStates([false, false, false, false]);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateLineProgress);
        return () => window.removeEventListener('scroll', updateLineProgress);
    }, []);

    return (
        <div className='relative'>
            <h1 className="uppercase font-tanAegan font-normal text-2xl text-center pt-24 pb-4">our Sourcing</h1>
            <section className={styles.lineSection} ref={lineSectionRef}>
                <div className={styles.verticalLine}>
                    <div className={styles.childLine} ref={childLineRef}></div>
                </div>

                {[1, 2, 3, 4, 5].map((_, index) => (
                    <div className={styles.segment} key={index}>
                        <div className={styles.leftContent}>
                            <div className={styles.stickyHeader}>
                                <div className='bg-white p-2 rounded-sm' >
                                <CiLocationOn color='#114030' />
                                </div>
                                <h1 className='bg-primary text-end text-secondary font-quickSand font-semibold text-xl flex-1'>{`Line${index + 1}`}</h1>
                            </div>
                            <div className={styles.lineContent}></div>
                        </div>
                        <div className={styles.center}>
                            <div
                                className={`${styles.ball} ${ballStates[index] ? styles.active : ''}`}
                            ></div>
                        </div>
                        <div className={styles.rightContent}>{`Right Content ${index + 1}`}</div>
                    </div>
                ))}

            </section>

            <div className='w-1/3 absolute top-0 left-0'><img src={assets.coffeeLeaves} alt="" /></div>
            <div className='w-1/5 absolute top-[8%] right-[6%]'><img src={assets.coffeeBeans} alt="" /></div>
            <div className='w-1/5 absolute bottom-[8%] left-[6%]'><img src={assets.coffeeBeans} alt="" /></div>
            <div className='w-1/3 absolute bottom-0 right-[3%]'><img src={assets.coffeeBeansBag} alt="" /></div>
        </div>
    );
};

export default LineSection;
