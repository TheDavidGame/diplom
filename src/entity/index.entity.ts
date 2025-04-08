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

export interface menuHeaderItem {
    text: string;
}