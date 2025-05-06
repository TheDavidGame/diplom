import React from 'react';
import MenuFoodStyles from './MenuFood.module.scss';
import {eventsFood, mainFood, saladsFood, snacksFood} from "./testFood";
import {useSelector} from "react-redux";
import {RootState} from "../../../../entity/index.entity";
import {filterDishes} from "../../../../utils";

const MenuFood = () => {
    const selectedExclusions = useSelector((state: RootState) => state.mainSlice.selectedExclusions);

    const filteredEvents = filterDishes(eventsFood, selectedExclusions);
    const filteredMain = filterDishes(mainFood, selectedExclusions);
    const filteredSalads = filterDishes(saladsFood, selectedExclusions);
    const filteredSnacks = filterDishes(snacksFood, selectedExclusions);

    return (
        <div className={MenuFoodStyles.wrapper}>
            {filteredEvents.length > 0 && (
                <div className={MenuFoodStyles.events}>
                    <div className={MenuFoodStyles.eventsTitle} id="СОБЫТИЙНОЕ МЕНЮ">
                        СОБЫТИЙНОЕ МЕНЮ
                    </div>
                    <div className={MenuFoodStyles.eventsList}>
                        {filteredEvents.map(el => (
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
                                    {!el.hiddenFor?.includes('vegan') && !el.hiddenFor?.includes('vegetarian') && (
                                        <img src="/veganIcon.svg" alt="veganIcon" className={MenuFoodStyles.icons}/>
                                    )}
                                    {el.hiddenFor?.includes('spicy') && (
                                        <img src="/spicyIcon.svg" alt="spicyIcon" className={MenuFoodStyles.icons}/>
                                    )}
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
            )}

            {filteredMain.length > 0 && (
                <div className={MenuFoodStyles.main}>
                    <div className={MenuFoodStyles.mainTitle} id="ОСНОВНЫЕ БЛЮДА">
                        ОСНОВНЫЕ БЛЮДА
                    </div>
                    <div className={MenuFoodStyles.mainList}>
                        {filteredMain.map((el, index) => (
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
                                    {!el.hiddenFor?.includes('vegan') && !el.hiddenFor?.includes('vegetarian') && (
                                        <img src="/veganIcon.svg" alt="veganIcon" className={MenuFoodStyles.icons}/>
                                    )}
                                    {el.hiddenFor?.includes('spicy') && (
                                        <img src="/spicyIcon.svg" alt="spicyIcon" className={MenuFoodStyles.icons}/>
                                    )}
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
            )}

            {filteredSalads.length > 0 && (
                <div className={MenuFoodStyles.salads}>
                    <div className={MenuFoodStyles.snacksTitle} id="САЛАТЫ">
                        САЛАТЫ
                    </div>
                    <div className={MenuFoodStyles.snacksList}>
                        {filteredSalads.map((el) => (
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
                                    {!el.hiddenFor?.includes('vegan') && !el.hiddenFor?.includes('vegetarian') && (
                                        <img src="/veganIcon.svg" alt="veganIcon" className={MenuFoodStyles.icons}/>
                                    )}
                                    {el.hiddenFor?.includes('spicy') && (
                                        <img src="/spicyIcon.svg" alt="spicyIcon" className={MenuFoodStyles.icons}/>
                                    )}
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
            )}

            {filteredSnacks.length > 0 && (
                <div className={MenuFoodStyles.snacks}>
                    <div className={MenuFoodStyles.snacksTitle} id="ЗАКУСКИ">
                        ЗАКУСКИ
                    </div>
                    <div className={MenuFoodStyles.snacksList}>
                        {filteredSnacks.map((el) => (
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
                                    {!el.hiddenFor?.includes('vegan') && !el.hiddenFor?.includes('vegetarian') && (
                                        <img src="/veganIcon.svg" alt="veganIcon" className={MenuFoodStyles.icons}/>
                                    )}
                                    {el.hiddenFor?.includes('spicy') && (
                                        <img src="/spicyIcon.svg" alt="spicyIcon" className={MenuFoodStyles.icons}/>
                                    )}
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
            )}
        </div>
    );
};

export default MenuFood;