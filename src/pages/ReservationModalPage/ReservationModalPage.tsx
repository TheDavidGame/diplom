import React from 'react';
import ReservationModalPageStyles from './ReservationModalPage.module.scss';

const ReservationModalPage = () => {

    return (
        <div className={ReservationModalPageStyles.wrapper}>
            <div className={ReservationModalPageStyles.leftStar}>
                <img
                    src={'/filterLeftStar.svg'}
                    alt={'filterLeftStar'}
                    className={ReservationModalPageStyles.leftStarItem}
                />
            </div>
            <div className={ReservationModalPageStyles.rightStar}>
                <img
                    src={'/filterRightStar.svg'}
                    alt={'filterRightStar'}
                    className={ReservationModalPageStyles.rightStarItem}
                />
            </div>
            <div className={ReservationModalPageStyles.top}>
                <div className={ReservationModalPageStyles.topTitle}>
                    БРОНИРОВАНИЕ
                </div>
            </div>


            <div className={ReservationModalPageStyles.submit}>
                <div className={ReservationModalPageStyles.submitBtn}>
                    <img
                        src={'/filterSubmitBtn.svg'}
                        alt={'filterSubmitBtn'}
                        className={ReservationModalPageStyles.submitBtnItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReservationModalPage;
