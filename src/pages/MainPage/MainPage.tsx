import React, {forwardRef} from 'react';
import MainPageStyles from './MainPage.module.scss';
import {MainPageProps} from "../../entity/index.entity";

const MainPage = forwardRef<HTMLDivElement, MainPageProps>((props, ref) => {
    return (
        <div ref={ref} className={MainPageStyles.wrapper}>
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
            <img
                src="/mainPageStar.svg"
                alt="main content"
                className={MainPageStyles.mainPhotoStar}
            />

            <div className={MainPageStyles.ctaBlock}>
                <img
                    src="/mainPageArrow.svg"
                    alt="arrow"
                    className={MainPageStyles.mainPageArrow}
                />
            </div>
        </div>
    )
});

export default MainPage;