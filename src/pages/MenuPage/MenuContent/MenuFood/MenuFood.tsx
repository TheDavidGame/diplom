import React from 'react';
import MenuFoodStyles from './MenuFood.module.scss';
import {eventsFood} from "./testFood";

const MenuFood = () => {
    return (
        <div className={MenuFoodStyles.wrapper}>
            <div className={MenuFoodStyles.events}>
                <div className={MenuFoodStyles.eventsTitle}>
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

            </div>
            <div className={MenuFoodStyles.menuFoodStar}>
                <img
                    src={'/menuFoodStar.svg'}
                    alt='menuFoodStar'
                />

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default MenuFood;