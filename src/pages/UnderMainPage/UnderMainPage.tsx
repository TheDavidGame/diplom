import React, {useRef, useState, useEffect} from 'react';
import UnderMainPageStyles from './UnderMainPage.module.scss';
import Slider from "../../components/Slider/Slider";
import {SlideItem, UnderMainPageProps} from "../../entity/index.entity";
import Modal from "../../components/Modal/Modal";
import BurgerModalPage from "../BurgerModalPage/BurgerModalPage";

const UnderMainPage: React.FC<UnderMainPageProps> = ({
                                                         mainPageRef,
                                                         isMainPageVisible,
                                                         setIsMainPageVisible
                                                     }) => {
    const scrollerItems = ['testImage', 'testImage', 'testImage', 'testImage', 'testImage'];
    const duplicatedImages = [...scrollerItems, ...scrollerItems];
    const slides: SlideItem[] = duplicatedImages.map(item => ({
        image: `/${item}.jpg`,
        text: 'Текст под фото'
    }));
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsMainPageVisible(entry.isIntersecting);
            },
            {
                threshold: 0,
                root: null
            }
        );

        if (mainPageRef.current) {
            observer.observe(mainPageRef.current);
        }

        return () => {
            if (mainPageRef.current) observer.unobserve(mainPageRef.current);
        };
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={UnderMainPageStyles.wrapper}>
            <div style={{height: !isMainPageVisible ? headerHeight : 0}}/>

            <div
                ref={headerRef}
                className={`${UnderMainPageStyles.header} ${!isMainPageVisible ? UnderMainPageStyles.sticky : ''}`}
            >
                <img
                    src="/bckrndHeader.svg"
                    alt="Header background"
                    className={UnderMainPageStyles.background}
                />

                <div onClick={handleOpenModal} className={UnderMainPageStyles.burger}>
                    <img src="/burgerHeader.svg" alt="Menu"/>
                </div>

                <div className={UnderMainPageStyles.logo}>
                    <img src="/logoHeader.svg" alt="Logo"/>
                </div>

                <div className={UnderMainPageStyles.reservation}>
                    <img src="/reservationHeader.svg" alt="Reservation"/>
                </div>
            </div>

            <div className={UnderMainPageStyles.underHeader}>
                <div className={UnderMainPageStyles.underHeaderText}>
                    МЕСТО СИЛЫ ЛЮБИТЕЛЕЙ ДЖАЗА <br/> И ОБЩЕНИЯ
                </div>
                <div className={UnderMainPageStyles.underHeaderList}>
                    <img src="/starUnderMain.svg" alt="star"/>
                    <div>
                        ТАКО
                    </div>
                    <img src="/starUnderMain.svg" alt="star"/>
                    <div>
                        СНЭКИ
                    </div>
                    <img src="/starUnderMain.svg" alt="star"/>
                    <div>
                        КРАФТ
                    </div>
                    <img src="/starUnderMain.svg" alt="star"/>
                    <div>
                        ШОТЫ
                    </div>
                    <img src="/starUnderMain.svg" alt="star"/>
                </div>
            </div>

            <Slider
                slides={slides}
                showText={false}
            />

            <div className={UnderMainPageStyles.underScroller}>
                <div className={UnderMainPageStyles.underScrollerText}>
                    Наша вселенная возникла после культурного взрыва.
                    Музыка, игры, встречи, стихи, море напитков и вкусной еды
                </div>

                <div className={UnderMainPageStyles.underScrollerAboutUs}>
                    <img src="/aboutUsUnderScroller.svg" alt="aboutUsUnderScroller"/>
                </div>
            </div>

            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                   <BurgerModalPage />
                </Modal>
            )}
        </div>
    )
}

export default UnderMainPage;