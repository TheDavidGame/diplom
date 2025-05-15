import {Dish, FilterType} from "../entity/index.entity";
import {useEffect, useState} from "react";

export const filterDishes = (
    dishes: Dish[],
    selectedFilters: FilterType[]
): Dish[] => {
    return dishes.filter(dish => {
        const allHidden = dish.hiddenFor || [];
        return !selectedFilters.some(filter => allHidden.includes(filter));
    });
};

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};
