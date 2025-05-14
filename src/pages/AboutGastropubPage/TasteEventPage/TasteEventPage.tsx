import React from 'react';
import TasteEventPageStyles from './TasteEventPage.module.scss';
import HexagonButton from "../../../components/HexagonButton/HexagonButton";
import {HashLink} from "react-router-hash-link";

const TasteEventPage = () => {
    return (
        <>
            <div className={TasteEventPageStyles.wrapper}>
                <img src="/tasteEventPageLeftStar.svg" alt="tasteEventPageLeftStar" className={TasteEventPageStyles.leftStar}/>
                <img src="/tasteEventPageRightStar.svg" alt="tasteEventPageRightStar" className={TasteEventPageStyles.rightStar}/>

                <div className={TasteEventPageStyles.title}>
                    ВКУС СОБЫТИЯ
                </div>
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