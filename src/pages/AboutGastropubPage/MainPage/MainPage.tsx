import React from 'react';
import MainPageStyles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={MainPageStyles.wrapper}>
            <div className={MainPageStyles.mainPhoto}>
                <img src="/aboutGastroMainPhoto.svg" alt="aboutGastroMainPhoto"
                     className={MainPageStyles.mainPhotoItem}/>
            </div>
        </div>
    );
};

export default MainPage;