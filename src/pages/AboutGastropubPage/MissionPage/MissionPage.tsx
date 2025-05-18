import React, {useRef} from 'react';
import MissionPageStyles from './MissionPage.module.scss';
import {ParallaxText} from "../../../components/ParallaxText/ParallaxText";
import {motion, useInView} from "framer-motion";
import {useMobile} from "../../../utils";

const MissionPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });
    const isMobile = useMobile();

    return (
        <div className={MissionPageStyles.wrapper}>
            <div className={MissionPageStyles.stripes}>

                <div className={`${MissionPageStyles.stripe} ${MissionPageStyles.stripeFirst}`}>
                    <ParallaxText baseVelocity={-2}>СОБЫТИЕ ГАСТРОНОМ</ParallaxText>
                </div>
                <div className={`${MissionPageStyles.stripe} ${MissionPageStyles.stripeSecond}`}>
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
                {isMobile ?
                    <div className={MissionPageStyles.mainDescription}>
                        Наша миссия — <br/> вдохновлять людей через <br/> искусство и культуру
                    </div>
                :
                    <div className={MissionPageStyles.mainDescription}>
                        Наша миссия — вдохновлять людей через <br/> искусство и культуру
                    </div>
                }

            </div>
        </div>
    );
};

export default MissionPage;