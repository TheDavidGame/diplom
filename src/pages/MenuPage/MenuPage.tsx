import React from 'react';
import MenuPageStyles from './MenuPage.module.scss';
import {EventSlideItem} from "../../entity/index.entity";

const MenuPage = () => {

    const slides: EventSlideItem[] = [
        {
            image: '/eventSliderItemFirst.svg',
            date: 'ПН, 12 ИЮЛЯ',
            text: 'Джазовый сет от наших музыкантов. Lounge, bossa-nova. Начало в 19:00'
        },
        {
            image: '/eventSliderItemSecond.svg',
            date: 'ВТ—ЧТ, 13—15 ИЮЛЯ',
            text: 'Турнир по шахматам. Начало в 18:00'
        },
        {
            image: '/eventSliderItemFirst.svg',
            date: 'ПТ, 16 ИЮЛЯ',
            text: 'Концерт Lasta R’evero, под аккомпонемент Six Guys'
        },
        {
            image: '/eventSliderItemFirst.svg',
            date: 'СБ—ВС, 17—18 ИЮЛЯ',
            text: 'Джазовый сет от наших музыкантов. Lounge, bossa-nova. Начало в 19:00 '
        }
    ];

    return (
        <div className={MenuPageStyles.wrapper}>
            <div>МЕНЮ</div>
            <div>

            </div>
            <div>

            </div>
            <div>ОСНОВНЫЕ БЛЮДА</div>
            <div></div>
        </div>
    );
}

export default MenuPage;
