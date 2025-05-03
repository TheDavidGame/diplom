import React from 'react';
import BurgerModalPageStyles from './BurgerModalPage.module.scss';
import {menuHeaderItem} from "../../entity/index.entity";
import HeaderStyles from '../../components/Header/Header.module.scss'

const BurgerModalPage = () => {

    const menuList: menuHeaderItem[] = [
        {
            text: 'ГЛАВНАЯ'
        },
        {
            text: 'МЕНЮ'
        },
        {
            text: 'БАРНАЯ КАРТА'
        },
        {
            text: 'СОБЫТИЯ'
        },
        {
            text: 'О НАС'
        }
    ];

    const footerList: menuHeaderItem[] = [
        {
            text: '2025 CULTURE BLAST'
        },
        {
            text: 'ПОЛИТИКА ПРИВАТНОСТИ'
        },
        {
            text: 'ПОЛИТИКА БРОНИРОВАНИЯ'
        },
    ]

    const footerIconsList: menuHeaderItem[] = [
        {
            text: '/burgerModalIconsTg.svg'
        },
        {
            text: '/burgerModalIconsVk.svg'
        },
        {
            text: '/burgerModalIconsInst.svg'
        },
    ]

    return (
        <div className={BurgerModalPageStyles.wrapper}>
            <div
                className={`${HeaderStyles.header}`}
            >
                <img
                    src="/bckrndHeader.svg"
                    alt="Header background"
                    className={HeaderStyles.background}
                />

                <div className={HeaderStyles.burger}>
                    <img src="/burgerHeader.svg" alt="Menu"/>
                </div>

                <div className={HeaderStyles.logo}>
                    <img src="/logoHeader.svg" alt="Logo"/>
                </div>

                <div className={HeaderStyles.reservation}>
                    <img src="/reservationHeader.svg" alt="Reservation"/>
                </div>
            </div>

            <div className={BurgerModalPageStyles.list}>
                {menuList.map((el, index) => (
                    <>
                        <div className={BurgerModalPageStyles.listItem} key={index}>
                            {el.text}
                            <div className={BurgerModalPageStyles.underline}></div>
                        </div>
                        <div className={BurgerModalPageStyles.listArrow}>
                            <img src="/BurgerModalListItemArrow.svg" alt="star" className={BurgerModalPageStyles.listArrowItem}/>
                        </div>
                    </>
                ))}
            </div>

            <div className={BurgerModalPageStyles.star}>
                <img src="/burgerModalPageStar.svg" alt="star"/>
            </div>

            <div className={BurgerModalPageStyles.footer}>
                <div className={BurgerModalPageStyles.footerItems}>
                    {footerList.map((elem, index) => (
                        <div key={index} className={BurgerModalPageStyles.footerItem}>
                            {elem.text}
                        </div>
                    ))}
                </div>

                <div className={BurgerModalPageStyles.footerIconsItems}>
                    {footerIconsList.map((elem, index) => (
                        <div key={index} className={BurgerModalPageStyles.footerIconsItem}>
                            <img src={elem.text} alt="icons"/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BurgerModalPage;
