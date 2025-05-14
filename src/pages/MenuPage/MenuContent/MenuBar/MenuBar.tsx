import React from 'react';
import MenuBarStyles from './MenuBar.module.scss';
import {beerBar, cocktailBar, nonAlcoholBar, strongBar, wineBar} from "./testBar";
import {useSelector} from "react-redux";
import {RootState} from "../../../../entity/index.entity";

const MenuBar = () => {
    const isBar = useSelector((state: RootState) => state.mainSlice.isBar);
    return (
        <>
            {isBar && (
                <div>
                    <img
                        src={'/headerBar.svg'}
                        alt={'headerBar'}
                        className={MenuBarStyles.headerBar}
                    />
                </div>
            )}
            <div className={MenuBarStyles.wrapper}>

                <div className={MenuBarStyles.beerTitle} id="ПИВО">
                    ПИВО
                </div>
                <div className={MenuBarStyles.beerList}>
                    {beerBar.map(el => (
                        <div key={el.id} className={MenuBarStyles.beerListItem}>
                            <div className={MenuBarStyles.beerListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuBarStyles.beerListImgItem}
                                />
                            </div>
                            <div className={MenuBarStyles.beerListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuBarStyles.beerListDescription}>
                                <div className={MenuBarStyles.beerListDescriptionPrice}>
                                    {el.price}р
                                </div>
                                <div className={MenuBarStyles.beerListDescriptionWeight}>
                                    ({el.weight}мл)
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={MenuBarStyles.wine}>
                    <div className={MenuBarStyles.wineTitle} id="ВИНО">
                        ВИНО
                    </div>
                    <div className={MenuBarStyles.wineList}>
                        {wineBar.map((el, index) => (
                            <div key={el.id} className={MenuBarStyles.wineListItem}>
                                <div className={MenuBarStyles.wineListImg}>
                                    <img
                                        src={el.src}
                                        alt={el.title}
                                        className={MenuBarStyles.wineListImgItem}
                                    />
                                </div>
                                <div className={MenuBarStyles.wineListTitle} style={{whiteSpace: 'pre-line'}}>
                                    {el.title}
                                </div>
                                <div className={MenuBarStyles.wineListSubTitle} style={{whiteSpace: 'pre-line'}}>
                                    {el.subTitle}
                                </div>
                                <div className={MenuBarStyles.wineListDescription}>
                                    <div className={MenuBarStyles.wineListDescriptionPrice}>
                                        {el.price}р
                                    </div>
                                    <div className={MenuBarStyles.wineListDescriptionWeight}>
                                        ({el.weight}мл)
                                    </div>
                                    <div className={MenuBarStyles.wineListDescriptionAnd}> |</div>
                                    <div className={MenuBarStyles.wineListDescriptionPrice}>
                                        {el.secondPrice}р
                                    </div>
                                    <div className={MenuBarStyles.wineListDescriptionWeight}>
                                        ({el.secondWeight}мл)
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={MenuBarStyles.wineTitle} id="КОКТЕЙЛИ">
                    КОКТЕЙЛИ
                </div>
                <div className={MenuBarStyles.wineList}>
                    {cocktailBar.map(el => (
                        <div key={el.id} className={MenuBarStyles.wineListItem}>
                            <div className={MenuBarStyles.wineListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuBarStyles.wineListImgItem}
                                />
                            </div>
                            <div className={MenuBarStyles.wineListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuBarStyles.wineListSubTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.subTitle}
                            </div>
                            <div className={MenuBarStyles.wineListDescription}>
                                <div className={MenuBarStyles.wineListDescriptionPrice}>
                                    {el.price}р
                                </div>
                                <div className={MenuBarStyles.wineListDescriptionWeight}>
                                    ({el.weight}мл)
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={MenuBarStyles.wineTitle} id="КРЕПКОЕ">
                    КРЕПКОЕ
                </div>
                <div className={MenuBarStyles.wineList}>
                    {strongBar.map(el => (
                        <div key={el.id} className={MenuBarStyles.wineListItem}>
                            <div className={MenuBarStyles.wineListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuBarStyles.wineListImgItem}
                                />
                            </div>
                            <div className={MenuBarStyles.wineListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuBarStyles.wineListDescription}>
                                <div className={MenuBarStyles.wineListDescriptionPrice}>
                                    {el.price}р
                                </div>
                                <div className={MenuBarStyles.wineListDescriptionWeight}>
                                    ({el.weight}мл)
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={MenuBarStyles.wineTitle} id="БЕЗАЛКОГОЛЬНОЕ">
                    БЕЗАЛКОГОЛЬНОЕ
                </div>
                <div className={MenuBarStyles.wineList}>
                    {nonAlcoholBar.map(el => (
                        <div key={el.id} className={MenuBarStyles.wineListItem}>
                            <div className={MenuBarStyles.wineListImg}>
                                <img
                                    src={el.src}
                                    alt={el.title}
                                    className={MenuBarStyles.wineListImgItem}
                                />
                            </div>
                            <div className={MenuBarStyles.wineListTitle} style={{whiteSpace: 'pre-line'}}>
                                {el.title}
                            </div>
                            <div className={MenuBarStyles.wineListDescription}>
                                <div className={MenuBarStyles.wineListDescriptionPrice}>
                                    {el.price}р
                                </div>
                                <div className={MenuBarStyles.wineListDescriptionWeight}>
                                    ({el.weight}мл)
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MenuBar;