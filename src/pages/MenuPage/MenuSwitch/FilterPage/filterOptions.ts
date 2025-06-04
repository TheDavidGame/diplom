import {FilterOption} from "../../../../entity/index.entity";

export const dietTypes: FilterOption[] = [
    { id: 'vegetarian', label: 'Вегетарианец' },
    { id: 'vegan', label: 'Веган' },
];

export const exclusions: FilterOption[] = [
    { id: 'spicy', label: 'Острое' },
    { id: 'gluten', label: 'Глютен' },
    { id: 'nuts', label: 'Орехи' },
    { id: 'soy', label: 'Сою' },
    { id: 'sesame', label: 'Кунжут' },
    { id: 'peanuts', label: 'Арахис' },
    { id: 'seafood', label: 'Морепродукты' },
    { id: 'onion', label: 'Лук' },
    { id: 'tomatoes', label: 'Помидоры' },
    { id: 'beans', label: 'Бобы' },
    { id: 'other', label: 'Другое' },
];

export const exclusionsMobile: FilterOption[] = [
    { id: 'spicy', label: 'Острое' },
    { id: 'gluten', label: 'Глютен' },
    { id: 'nuts', label: 'Орехи' },
    { id: 'soy', label: 'Сою' },
    { id: 'sesame', label: 'Кунжут' },
    { id: 'peanuts', label: 'Арахис' },
    { id: 'onion', label: 'Лук' },
    { id: 'beans', label: 'Бобы' },
    { id: 'seafood', label: 'Морепродукты' },
    { id: 'tomatoes', label: 'Помидоры' },
];
