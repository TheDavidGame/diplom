import React, {useRef, useState, useEffect} from 'react';
import UnderMainPageStyles from './UnderMainPage.module.scss';
import Slider from "../../components/Slider/Slider";
import {SlideItem, UnderMainPageProps} from "../../entity/index.entity";
import Modal from "../../components/Modal/Modal";
import BurgerModalPage from "../BurgerModalPage/BurgerModalPage";
import {motion, useInView} from 'framer-motion';
import MainPageStyles from "../MainPage/MainPage.module.scss";

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
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });

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
                <motion.div
                    className={UnderMainPageStyles.underHeaderText}
                    ref={ref}
                    initial={{y: 100, opacity: 0}}
                    animate={isInView ? {
                        y: 0,
                        opacity: 1,
                        top: '20%',
                        transition: {
                            type: "spring",
                            stiffness: 80,
                            damping: 10
                        }
                    } : {}}
                    style={{position: 'relative'}}
                >
                    МЕСТО СИЛЫ <br/> ЛЮБИТЕЛЕЙ ДЖАЗА <br/> И ОБЩЕНИЯ
                </motion.div>
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

            <div style={{backgroundColor: '#FBF5EE'}}>
                <Slider
                    slides={slides}
                    showText={false}
                />
            </div>

            <div className={UnderMainPageStyles.underScroller}>
                <img
                    src="/underMainPageStarLeft.svg"
                    alt="underMainPageStarLeft"
                    className={UnderMainPageStyles.underScrollerStarLeft}
                />
                <img
                    src="/underMainPageStarRight.svg"
                    alt="underMainPageStarRight"
                    className={UnderMainPageStyles.underScrollerStarRight}
                />
                <img
                    src="/mainPageLogo.svg"
                    alt="mainPageLogo"
                    className={UnderMainPageStyles.underScrollerLogo}
                />

                <div className={UnderMainPageStyles.underScrollerText}>
                    Наша вселенная возникла после культурного взрыва.
                    <br/> Музыка, игры, встречи, стихи, море напитков и <br/> вкусной еды
                </div>

                <div className={UnderMainPageStyles.underScrollerAboutUs}>
                    <img src="/aboutUsUnderScroller.svg" alt="aboutUsUnderScroller"/>
                </div>
            </div>

            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <BurgerModalPage/>
                </Modal>
            )}
        </div>
    )
}

export default UnderMainPage;