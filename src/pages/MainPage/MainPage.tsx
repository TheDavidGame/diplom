import React, {forwardRef} from 'react';
import MainPageStyles from './MainPage.module.scss';
import {MainPageProps} from "../../entity/index.entity";
import {useMobile} from "../../utils";

const MainPage = forwardRef<HTMLDivElement, MainPageProps>((props, ref) => {
    const isMobile = useMobile();

    return (
        <div ref={ref} className={MainPageStyles.wrapper}>
            <img
                src="/bkcgrndMainPage.png"
                alt="mainBackground"
                className={MainPageStyles.background}
            />

            {isMobile ?
                <img
                    src="/mobile/mainPageLogoMobile.png"
                    alt="mainPageLogo"
                    className={MainPageStyles.mainPageLogo}
                />
                :
                <img
                    src="/mainPageLogo.svg"
                    alt="mainPageLogo"
                    className={MainPageStyles.mainPageLogo}
                />
            }


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

            <video
                className={MainPageStyles.backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/mainPageVideo.webm" type="video/webm" />
                Ваш браузер не поддерживает видео.
            </video>

            <div className={MainPageStyles.ctaBlock}>
                {isMobile ?
                    <img
                        src="/mobile/mainPageArrowMobile.png"
                        alt="mainPageLogo"
                        className={MainPageStyles.mainPageLogo}
                    />
                    :
                    <img
                        src="/mainPageArrow.svg"
                        alt="arrow"
                        className={MainPageStyles.mainPageArrow}
                    />
                }
            </div>
        </div>
    )
});

export default MainPage;