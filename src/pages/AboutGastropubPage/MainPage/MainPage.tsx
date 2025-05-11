import React, {forwardRef} from 'react';
import MainPageStyles from './MainPage.module.scss';
import {MainPageProps} from "../../../entity/index.entity";

const MainPage = forwardRef<HTMLDivElement, MainPageProps>((props, ref) => {
    return (
        <div ref={ref} className={MainPageStyles.wrapper}>
            <div className={MainPageStyles.mainPhoto}>
                <img src="/aboutGastroMainPhoto.svg" alt="aboutGastroMainPhoto"
                     className={MainPageStyles.mainPhotoItem}/>
            </div>
        </div>
    );
});

export default MainPage;