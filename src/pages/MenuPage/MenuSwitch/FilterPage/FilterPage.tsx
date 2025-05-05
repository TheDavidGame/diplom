import React from 'react';
import FilterPageStyles from './FilterPage.module.scss';
import {dietTypes, exclusions} from "./filterOptions";
import {FilterPageProps, RootState} from "../../../../entity/index.entity";
import {useDispatch, useSelector} from "react-redux";
import {clearFilters, setSelectedDiet, toggleExclusion} from "../../../../services/slices/mainSlice";

const FilterPage = ({ onClose }: FilterPageProps) => {

    const dispatch = useDispatch();
    const selectedDiet = useSelector((state: RootState) => state.mainSlice.selectedDiet);
    const selectedExclusions = useSelector((state: RootState) => state.mainSlice.selectedExclusions);

    const handleDietSelect = (id: string) => {
        dispatch(setSelectedDiet(id));
    };

    const handleToggleExclusion = (id: string) => {
        dispatch(toggleExclusion(id));
    };

    const handleClearFilters = () => {
        dispatch(clearFilters());
    };

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
                            onClick={() => handleDietSelect(diet.id)}
                            className={`${FilterPageStyles.topFilterItem} ${selectedDiet === diet.id ? FilterPageStyles.topFilterItemActive : ''}`}

                        >
                            {diet.label}
                            <div className={FilterPageStyles.underline}></div>
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
                            onClick={() => handleToggleExclusion(item.id)}
                            className={`${FilterPageStyles.bottomFilterItem} ${selectedExclusions.includes(item.id) ? FilterPageStyles.bottomFilterItemActive : ''}`}
                        >
                            {item.label}
                            <div className={FilterPageStyles.underline}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={FilterPageStyles.submit}>
                <div className={FilterPageStyles.submitClearBtn} onClick={handleClearFilters}>Очистить фильтры</div>
                <div className={FilterPageStyles.submitBtn} onClick={onClose}>
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