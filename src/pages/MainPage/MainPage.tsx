import React from 'react';
import MainPageStyles from './MainPage.module.scss';

const MainPage = () => {

    return (
        <div className={MainPageStyles.wrapper}>
            <img
                src="/bkcgrndMainPage.svg"
                alt="mainBackground"
                className={MainPageStyles.background}
            />

            <img
                src="/mainPageLogo.svg"
                alt="mainPageLogo"
                className={MainPageStyles.mainPageLogo}
            />

            <img
                src="/mainPageGroupFirst.svg"
                alt="group 1"
                className={MainPageStyles.mainPageGroupFirst}
            />
            <img
                src="/mainPageGroupSecond.svg"
                alt="group 2"
                className={MainPageStyles.mainPageGroupSecond}
            />

            <img
                src="/mainPageGroupThird.svg"
                alt="group 3"
                className={MainPageStyles.mainPageGroupThird}
            />
            <img
                src="/mainPageGroupFourth.svg"
                alt="group 4"
                className={MainPageStyles.mainPageGroupFourth}
            />

            <img
                src="/mainPhoto.svg"
                alt="main content"
                className={MainPageStyles.mainPhoto}
            />

            <div className={MainPageStyles.ctaBlock}>
                <span className={MainPageStyles.ctaText}>Смотреть дальше</span>
                <img
                    src="/mainPageArrow.svg"
                    alt="arrow"
                    className={MainPageStyles.mainPageArrow}
                />
            </div>
        </div>
    )
}

export default MainPage;