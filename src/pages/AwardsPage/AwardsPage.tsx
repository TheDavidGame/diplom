import React, {useRef} from 'react';
import AwardsPageStyles from './AwardsPage.module.scss';
import { motion, useInView } from 'framer-motion';

const AWARDS_IMAGES = [
    '/awardsPageFirst.svg',
    '/awardsPageSecond.svg',
    '/awardsPageThird.svg',
    '/awardsPageFourth.svg'
];

const AwardsPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });

    return (
        <div className={AwardsPageStyles.wrapper}>
            <motion.div
                className={AwardsPageStyles.title}
                ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? {
                    y: 0,
                    opacity: 1,
                    top: '20%',
                    transition: {
                        type: "spring",
                        stiffness: 80,
                        damping: 10
                    }
                } : {}}
                style={{ position: 'relative' }}
            >
                НАШИ НАГРАДЫ
            </motion.div>

            <div className={AwardsPageStyles.awardsWrapper}>
                {AWARDS_IMAGES.map((src, index) => (
                    <img
                        loading="lazy"
                        key={index}
                        src={src}
                        alt={`Awards ${index + 1}`}
                    />
                ))}
            </div>

            <div className={AwardsPageStyles.mainImageWrapper}>
                <img
                    src="/awardsPageImage.svg"
                    alt="Основное изображение наград"
                    className={AwardsPageStyles.mainImage}
                />
            </div>
        </div>
    );
};

export default AwardsPage;