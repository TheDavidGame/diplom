import React, {useRef} from 'react';
import LiveCulturePageStyles from './LiveCulturePage.module.scss';
import { HashLink } from 'react-router-hash-link';
import HexagonButton from "../../../components/HexagonButton/HexagonButton";
import {motion, useInView} from "framer-motion";

const LiveCulturePage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });
    return (
        <div className={LiveCulturePageStyles.wrapper}>
            <div className={LiveCulturePageStyles.top}>
                <div className={LiveCulturePageStyles.topLeftStar}>
                    <img src="/filterLeftStar.svg" alt="filterLeftStar" className={LiveCulturePageStyles.leftStarItem} />
                </div>
                <div className={LiveCulturePageStyles.topRightStar}>
                    <img src="/filterRightStar.svg" alt="filterRightStar" className={LiveCulturePageStyles.rightStarItem} />
                </div>
                <motion.div
                    className={LiveCulturePageStyles.topTitle}
                    ref={ref}
                    initial={{y: 100, opacity: 0}}
                    animate={isInView ? {
                        y: 0,
                        opacity: 1,
                        top: '10%',
                        transition: {
                            type: "spring",
                            stiffness: 80,
                            damping: 10
                        }
                    } : {}}
                    style={{position: 'relative'}}
                >
                    ЖИВАЯ КУЛЬТУРА
                </motion.div>
                <div className={LiveCulturePageStyles.topDescription}>
                    У нас регулярно проходят джазовые <br/> вечера, поэтические чтения, лекции и <br/> просмотры фильмов
                </div>
                <div className={LiveCulturePageStyles.topBtn}>
                    <HashLink smooth to="/#event">
                        <HexagonButton >
                            СОБЫТИЯ
                        </HexagonButton>
                    </HashLink>
                </div>
            </div>
            <div className={LiveCulturePageStyles.bottom}>
            </div>
        </div>
    );
};

export default LiveCulturePage;