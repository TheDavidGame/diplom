import React from 'react';
import AppFooterStyles from './AppFooter.module.scss';

const AppFooter = () => {
    const list = [
        {
            id: 1,
            text: '2025 CULTURE BLAST'
        },
        {
            id: 2,
            text: 'ПОЛИТИКА ПРИВАТНОСТИ'
        },
        {
            id: 3,
            text: 'ПОЛИТИКА БРОНИРОВАНИЯ'
        },
    ]

    const iconsList = [
        {
            id: 1,
            src: '/appFooterTg.svg',
        },
        {
            id: 2,
            src: 'appFooterVk.svg',
        },
        {
            id: 3,
            src: 'appFooterInst.svg',
        },
    ]

    return (
        <div className={AppFooterStyles.wrapper}>
            <div className={AppFooterStyles.list}>
                {list.map(el => (
                    <div key={el.id} className={AppFooterStyles.listItem}>
                        {el.text}
                    </div>
                ))}
            </div>
            <div className={AppFooterStyles.icons}>
                {iconsList.map(el => (
                    <div key={el.id} className={AppFooterStyles.iconsItem}>
                        <img src={el.src} alt="el.src" className={AppFooterStyles.iconsImg}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppFooter;