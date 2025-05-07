import React from 'react';
import DoneReservationModalPageStyles from './DoneReservationModalPage.module.scss';
import { useNavigate } from 'react-router-dom';

const DoneReservationModalPage = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate('/');
    };
    return (
        <div className={DoneReservationModalPageStyles.wrapper}>
            <div className={DoneReservationModalPageStyles.leftStar}>
                <img src="/filterLeftStar.svg" alt="filterLeftStar"
                     className={DoneReservationModalPageStyles.leftStarItem}/>
            </div>
            <div className={DoneReservationModalPageStyles.rightStar}>
                <img src="/filterRightStar.svg" alt="filterRightStar"
                     className={DoneReservationModalPageStyles.rightStarItem}/>
            </div>

            <div className={DoneReservationModalPageStyles.top}>
                <div className={DoneReservationModalPageStyles.topStar}>
                    <img src="/DoneReservationStar.svg" alt="DoneReservationStar"
                         className={DoneReservationModalPageStyles.topStarItem}/>
                </div>

                <div className={DoneReservationModalPageStyles.topTitle}>Ждём вас!</div>

                <div className={DoneReservationModalPageStyles.topStar}>
                    <img src="/DoneReservationStar.svg" alt="DoneReservationStar"
                         className={DoneReservationModalPageStyles.topStarItem}/>
                </div>

            </div>

            <div className={DoneReservationModalPageStyles.bottom}>

                <div className={DoneReservationModalPageStyles.bottomTitle}>Столик успешно забронирован!</div>

            </div>


            <div className={DoneReservationModalPageStyles.submit}>
                <div className={DoneReservationModalPageStyles.submitBtn}>
                    <img
                        src="/doneReservationBtn.svg"
                        alt="doneReservationBtn"
                        className={DoneReservationModalPageStyles.submitBtnItem}
                        onClick={handleBackToHome}
                    />
                </div>
            </div>
        </div>
    );
};

export default DoneReservationModalPage;