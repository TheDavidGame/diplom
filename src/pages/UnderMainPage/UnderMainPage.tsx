import React from 'react';
import UnderMainPageStyles from './UnderMainPage.module.scss';

const UnderMainPage = () => {
    return (
        <div className={UnderMainPageStyles.wrapper}>
            <div className={UnderMainPageStyles.header}>
                <img
                    src="/bckrndHeader.svg"
                    alt="Header background"
                    className={UnderMainPageStyles.background}
                />

                <div className={UnderMainPageStyles.burger}>
                    <img src="/burgerHeader.svg" alt="Menu" />
                </div>

                <div className={UnderMainPageStyles.logo}>
                    <img src="/logoHeader.svg" alt="Logo" />
                </div>

                <div className={UnderMainPageStyles.reservation}>
                    <img src="/reservationHeader.svg" alt="Reservation" />
                </div>
            </div>

            <div className={UnderMainPageStyles.underHeader}>
            </div>

            <div className={UnderMainPageStyles.scroller}>
            </div>

            <div className={UnderMainPageStyles.underScroller}>
            </div>
        </div>
    )
}

export default UnderMainPage;