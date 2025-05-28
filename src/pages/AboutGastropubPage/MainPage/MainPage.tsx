import React, {forwardRef} from 'react';
import MainPageStyles from './MainPage.module.scss';
import {MainPageProps} from "../../../entity/index.entity";

const MainPage = forwardRef<HTMLDivElement, MainPageProps>((props, ref) => {
    return (
        <div ref={ref} className={MainPageStyles.wrapper}>
            <div className={MainPageStyles.mainVideo}>
                <video
                    className={MainPageStyles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/aboutGastroMainVideo.png"
                >
                    <source src="/aboutGastroMainVideo.webm" type="video/webm" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
        </div>
    );
});

export default MainPage;