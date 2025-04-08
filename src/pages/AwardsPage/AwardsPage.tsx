import React from 'react';
import AwardsPageStyles from './AwardsPage.module.scss';

const AWARDS_IMAGES = [
    '/awardsPageFirst.svg',
    '/awardsPageSecond.svg',
    '/awardsPageThird.svg',
    '/awardsPageFourth.svg'
];

const AwardsPage = () => {
    return (
        <div className={AwardsPageStyles.wrapper}>
            <div className={AwardsPageStyles.title}>НАШИ НАГРАДЫ</div>

            <div className={AwardsPageStyles.awardsWrapper}>
                {AWARDS_IMAGES.map((src, index) => (
                    <img
                        loading="lazy"
                        key={index}
                        src={src}
                        alt={`Awards ${index + 1}`}
                    />
                ))}
            </div>

            <div className={AwardsPageStyles.mainImageWrapper}>
                <img
                    src="/awardsPageImage.svg"
                    alt="Основное изображение наград"
                    className={AwardsPageStyles.mainImage}
                />
            </div>
        </div>
    );
};

export default AwardsPage;