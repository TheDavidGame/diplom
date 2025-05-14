import React, {useRef} from 'react';
import TasteEventPageStyles from './TasteEventPage.module.scss';
import HexagonButton from "../../../components/HexagonButton/HexagonButton";
import {HashLink} from "react-router-hash-link";
import {motion, useInView} from "framer-motion";

const TasteEventPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });
    return (
        <>
            <div className={TasteEventPageStyles.wrapper}>
                <img src="/tasteEventPageLeftStar.svg" alt="tasteEventPageLeftStar" className={TasteEventPageStyles.leftStar}/>
                <img src="/tasteEventPageRightStar.svg" alt="tasteEventPageRightStar" className={TasteEventPageStyles.rightStar}/>

                <motion.div
                    className={TasteEventPageStyles.title}
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
                    ВКУС СОБЫТИЯ
                </motion.div>
                <div className={TasteEventPageStyles.description}>
                    Наше меню состоит из основных блюд и особых <br/>
                    событийных явств и напитков, вдохновленных разными <br/>
                    культурами и стилями, от классического джаза до арт-<br/>
                    хаусного кинематографа
                </div>
                <div className={TasteEventPageStyles.btn}>
                    <HashLink smooth to="/menu/#eventMenu">
                        <HexagonButton>
                            СОБЫТИЙНОЕ МЕНЮ
                        </HexagonButton>
                    </HashLink>

                </div>
            </div>

            <img src="/tasteEventPageFooter.svg" alt="tasteEventPageFooter" className={TasteEventPageStyles.footer}/>
        </>
    );
};

export default TasteEventPage;