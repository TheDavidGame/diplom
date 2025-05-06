import {Dish, FilterType} from "../entity/index.entity";

export const filterDishes = (
    dishes: Dish[],
    selectedFilters: FilterType[]
): Dish[] => {
    return dishes.filter(dish => {
        const allHidden = dish.hiddenFor || [];
        return !selectedFilters.some(filter => allHidden.includes(filter));
    });
};
