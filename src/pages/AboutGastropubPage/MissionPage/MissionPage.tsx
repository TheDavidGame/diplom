import React, {useRef} from 'react';
import MissionPageStyles from './MissionPage.module.scss';
import {ParallaxText} from "../../../components/ParallaxText/ParallaxText";
import {motion, useInView} from "framer-motion";

const MissionPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });
    return (
        <div className={MissionPageStyles.wrapper}>
            <div className={MissionPageStyles.stripes}>
                <div className={MissionPageStyles.stripe}
                     style={{top: '250px', left: '-15%', transform: 'rotate(-12deg)'}}>
                    <ParallaxText baseVelocity={-2}>СОБЫТИЕ ГАСТРОНОМ</ParallaxText>
                </div>
                <div className={MissionPageStyles.stripe}
                     style={{top: '300px', left: '-10%', transform: 'rotate(5deg)'}}>
                    <ParallaxText baseVelocity={2}>НОВОЕ ИСКУССТВО</ParallaxText>
                </div>

            </div>

            <div className={MissionPageStyles.main}>
                <motion.div
                    className={MissionPageStyles.mainTitle}
                    ref={ref}
                    initial={{y: 100, opacity: 0}}
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
                    style={{position: 'relative'}}
                >
                    МИССИЯ
                </motion.div>
                <div className={MissionPageStyles.mainDescription}>
                    Наша миссия — вдохновлять людей через <br/> искусство и культуру
                </div>
            </div>
        </div>
    );
};

export default MissionPage;