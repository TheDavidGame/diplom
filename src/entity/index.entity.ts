import React from "react";

export interface MainPageProps {
    ref?: React.Ref<HTMLDivElement>;
}

export interface EventSlideItem {
    image: string;
    date: string;
    text: string;
}

export interface SlideItem {
    image: string;
    text?: string;
}

export interface ImageSliderProps {
    slides: SlideItem[];
    showText: boolean;
}

export interface UnderMainPageProps {
    mainPageRef: React.RefObject<HTMLDivElement | null>;
    isMainPageVisible: boolean;
    setIsMainPageVisible: (visible: boolean) => void;
}

export interface HeaderProps {
    stickyMode?: boolean;
    mainPageRef?: React.RefObject<HTMLDivElement | null>;
    setIsMainPageVisible?: (visible: boolean) => void;
}

export interface menuHeader {
    text: string;
    url: string;
}

export interface BurgerModalPageProps {
    onClose: () => void;
}

export interface menuHeaderItem {
    text: string;
}

export interface menuSwitchFood {
    title?: string;
    text: string;
}

export interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    modalType?: string;
}

export interface RootState {
    mainSlice: MainSliceState;
}

export interface MainSliceState {
    isBar: boolean;
    selectedExclusions: FilterType[];
}

export interface FilterPageProps {
    onClose: () => void;
}

export type FilterType =
    | 'vegetarian'
    | 'vegan'
    | 'spicy'
    | 'gluten'
    | 'nuts'
    | 'soy'
    | 'sesame'
    | 'peanuts'
    | 'seafood'
    | 'onion'
    | 'tomatoes'
    | 'beans'

export interface Dish {
    id: string | number;
    title: string;
    subTitle: string;
    price: number;
    weight: number;
    src: string;
    hiddenFor?: FilterType[];
}

export interface FilterOption {
    id: FilterType;
    label: string
}

export interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity?: number;
}

export interface HexagonButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
