import React from 'react';
import MenuPageStyles from './MenuPage.module.scss';
import {menuHeaderItem} from "../../entity/index.entity";

const MenuPage = () => {

    const menuHeader: menuHeaderItem[] = [
        {
            text: 'ОСНОВНЫЕ БЛЮДА'
        },
        {
            text: 'СОБЫТИЙНОЕ МЕНЮ'
        },
        {
            text: 'НАПИТКИ'
        },
        {
            text: 'ДЕССЕРТЫ'
        },
        {
            text: 'ЗАКУСКИ'
        },
        {
            text: 'САЛАТЫ'
        }
    ];

    return (
        <div className={MenuPageStyles.wrapper}>
            <div className={MenuPageStyles.title}>МЕНЮ</div>
            <div className={MenuPageStyles.menuHeader}>
                {menuHeader.map((elem, index) => (
                    <div key={index} className={MenuPageStyles.menuItem}>
                        <div className={MenuPageStyles.menuHeaderText}>{elem.text}</div>
                    </div>
                ))}
            </div>
            <div className={MenuPageStyles.filter}>
                <img
                    src="/MenuPageFilter.svg"
                    alt="MenuPageFilter"
                    className={MenuPageStyles.filterItem}
                />
            </div>
            <div className={MenuPageStyles.mainDishes}>ОСНОВНЫЕ БЛЮДА</div>
            <div></div>
        </div>
    );
}

export default MenuPage;
