import React from 'react';
import MenuFoodStyles from './MenuFood.module.scss';
import {eventsFood, mainFood, saladsFood, snacksFood} from "./testFood";

const MenuFood = () => {
    return (
        <div className={MenuFoodStyles.wrapper}>
            <div className={MenuFoodStyles.events}>
                <div className={MenuFoodStyles.eventsTitle} id="СОБЫТИЙНОЕ МЕНЮ">
                    СОБЫТИЙНОЕ МЕНЮ
                </div>
                <div className={MenuFoodStyles.eventsList}>
                    {eventsFood.map(el => (
                        <div key={el.id} className={MenuFoodStyles.eventsListItem}>
                            <div className={MenuFoodStyles.eventsListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuFoodStyles.eventsListImgItem}
                                />
                            </div>
                            <div className={MenuFoodStyles.eventsListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuFoodStyles.eventsListSubTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.subTitle}
                            </div>
                            <div className={MenuFoodStyles.eventsListDescription}>
                                <div className={MenuFoodStyles.eventsListDescriptionPrice}>
                                    {el.price}р
                                </div>
                                <div className={MenuFoodStyles.eventsListDescriptionWeight}>
                                    ({el.weight}г)
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={MenuFoodStyles.menuFoodStar}>
                    <img
                        src={'/menuFoodStar.svg'}
                        alt='menuFoodStar'
                    />

                </div>
            </div>

            <div className={MenuFoodStyles.main}>
                <div className={MenuFoodStyles.mainTitle} id="ОСНОВНЫЕ БЛЮДА">
                    ОСНОВНЫЕ БЛЮДА
                </div>
                <div className={MenuFoodStyles.mainList}>
                    {mainFood.map((el, index) => (
                        <div key={el.id} className={MenuFoodStyles.mainListItem}>
                            <div className={MenuFoodStyles.mainListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuFoodStyles.mainListImgItem}
                                />
                            </div>
                            <div className={MenuFoodStyles.mainListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuFoodStyles.mainListSubTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.subTitle}
                            </div>
                            <div className={MenuFoodStyles.mainListDescription}>
                                {
                                    index !== mainFood.length - 1 ? (
                                        <>
                                            <div className={MenuFoodStyles.mainListDescriptionPrice}>
                                                {el.price}р
                                            </div>
                                            <div className={MenuFoodStyles.mainListDescriptionWeight}>
                                                ({el.weight}г)
                                            </div>
                                        </>) : null
                                }

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={MenuFoodStyles.salads}>
                <div className={MenuFoodStyles.snacksTitle} id="САЛАТЫ">
                    САЛАТЫ
                </div>
                <div className={MenuFoodStyles.snacksList}>
                    {saladsFood.map((el) => (
                        <div key={el.id} className={MenuFoodStyles.snacksListItem}>
                            <div className={MenuFoodStyles.snacksListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuFoodStyles.snackssnacksImgItem}
                                />
                            </div>
                            <div className={MenuFoodStyles.snacksListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuFoodStyles.snacksListSubTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.subTitle}
                            </div>
                            <div className={MenuFoodStyles.snacksListDescription}>
                                <div className={MenuFoodStyles.snacksListDescriptionPrice}>
                                    {el.price}р
                                </div>
                                <div className={MenuFoodStyles.snacksListDescriptionWeight}>
                                    ({el.weight}г)
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={MenuFoodStyles.snacks}>
                <div className={MenuFoodStyles.snacksTitle} id="ЗАКУСКИ">
                    ЗАКУСКИ
                </div>
                <div className={MenuFoodStyles.snacksList}>
                    {snacksFood.map((el) => (
                        <div key={el.id} className={MenuFoodStyles.snacksListItem}>
                            <div className={MenuFoodStyles.snacksListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuFoodStyles.snackssnacksImgItem}
                                />
                            </div>
                            <div className={MenuFoodStyles.snacksListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuFoodStyles.snacksListSubTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.subTitle}
                            </div>
                            <div className={MenuFoodStyles.snacksListDescription}>
                                <div className={MenuFoodStyles.snacksListDescriptionPrice}>
                                    {el.price}р
                                </div>
                                <div className={MenuFoodStyles.snacksListDescriptionWeight}>
                                    ({el.weight}г)
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MenuFood;