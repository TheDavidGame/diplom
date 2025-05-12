import React from 'react';
import LiveCulturePageStyles from './LiveCulturePage.module.scss';

const LiveCulturePage = () => {
    return (
        <div className={LiveCulturePageStyles.wrapper}>
            <div className={LiveCulturePageStyles.top}>
                <div className={LiveCulturePageStyles.topLeftStar}>
                    <img src="/filterLeftStar.svg" alt="filterLeftStar" className={LiveCulturePageStyles.leftStarItem} />
                </div>
                <div className={LiveCulturePageStyles.topRightStar}>
                    <img src="/filterRightStar.svg" alt="filterRightStar" className={LiveCulturePageStyles.rightStarItem} />
                </div>
                <div className={LiveCulturePageStyles.topTitle}>
                    ЖИВАЯ КУЛЬТУРА
                </div>
                <div className={LiveCulturePageStyles.topDescription}>
                    У нас регулярно проходят джазовые <br/> вечера, поэтические чтения, лекции и <br/> просмотры фильмов
                </div>
                <div className={LiveCulturePageStyles.topBtn}>

                </div>
            </div>
            <div className={LiveCulturePageStyles.bottom}>

            </div>
        </div>
    );
};

export default LiveCulturePage;