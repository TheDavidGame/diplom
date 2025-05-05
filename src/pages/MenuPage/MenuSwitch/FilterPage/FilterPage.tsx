import React from 'react';
import FilterPageStyles from './FilterPage.module.scss';
import {dietTypes, exclusions} from "./filterOptions";

const FilterPage = () => {

    return (
        <div className={FilterPageStyles.wrapper}>
            <div className={FilterPageStyles.leftStar}>
                <img
                    src={'/filterLeftStar.svg'}
                    alt={'filterLeftStar'}
                    className={FilterPageStyles.leftStarItem}
                />
            </div>
            <div className={FilterPageStyles.rightStar}>
                <img
                    src={'/filterRightStar.svg'}
                    alt={'filterRightStar'}
                    className={FilterPageStyles.rightStarItem}
                />
            </div>
            <div className={FilterPageStyles.top}>
                <div className={FilterPageStyles.topTitle}>
                    КТО Я
                </div>
                <div className={FilterPageStyles.topFilter}>
                    {dietTypes.map(diet => (
                        <div
                            key={diet.id}
                            className={`${FilterPageStyles.topFilterItem} `}
                            // ${selectedDiet === diet.id ? FilterPageStyles.active : ''}
                        >
                            {diet.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className={FilterPageStyles.bottom}>
                <div className={FilterPageStyles.bottomTitle}>Я НЕ ЕМ</div>
                <div className={FilterPageStyles.bottomFilter}>
                    {exclusions.map(item => (
                        <div
                            key={item.id}
                            className={`${FilterPageStyles.bottomFilterItem} `}
                            // ${selectedExclusions.includes(item.id) ? FilterPageStyles.active : ''}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className={FilterPageStyles.submit}>
                <div className={FilterPageStyles.submitClearBtn}>Очистить фильтры</div>
                <div className={FilterPageStyles.submitBtn}>
                    <img
                        src={'/filterSubmitBtn.svg'}
                        alt={'filterSubmitBtn'}
                        className={FilterPageStyles.submitBtnItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterPage;