import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import UnderMissionPageStyles from './UnderMissionPage.module.scss';

const UnderMissionPage = () => {
    const { scrollYProgress } = useScroll();

    const rawScale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    const scale = useSpring(rawScale, {
        stiffness: 100,
        damping: 30,
        mass: 1,
    });

    return (
        <div className={UnderMissionPageStyles.wrapper}>
            <motion.img
                src="/underMissionPageStar.svg"
                alt="underMissionPageStar"
                style={{ scale }}
                draggable={false}
                loading="lazy"
            />
        </div>
    );
};

export default UnderMissionPage;
