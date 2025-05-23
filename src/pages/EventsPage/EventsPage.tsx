import React, {forwardRef, useEffect, useRef, useState} from 'react';
import EventPageStyles from './EventsPage.module.scss';
import {EventSlideItem} from "../../entity/index.entity";
import {motion, useInView} from 'framer-motion';
import {useMobile} from "../../utils";
import HexagonButton from "../../components/HexagonButton/HexagonButton";

const EventsPage = forwardRef<HTMLDivElement>((props, eventRef) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [visibleEvents, setVisibleEvents] = useState(2);
    const isMobile = useMobile();

    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });
    const slides: EventSlideItem[] = [
        {
            image: '/eventSliderItemFirst.svg',
            date: 'ПН, 12 ИЮЛЯ',
            text: 'Джазовый сет от наших музыкантов. Lounge, bossa-nova. Начало в 19:00'
        },
        {
            image: '/eventSliderItemSecond.svg',
            date: 'ВТ—ЧТ, 13—15 ИЮЛЯ',
            text: 'Турнир по шахматам. Начало в 18:00'
        },
        {
            image: '/eventSliderItemFirst.svg',
            date: 'ПТ, 16 ИЮЛЯ',
            text: 'Концерт Lasta R’evero, под аккомпонемент Six Guys'
        },
        {
            image: '/eventSliderItemFirst.svg',
            date: 'СБ—ВС, 17—18 ИЮЛЯ',
            text: 'Джазовый сет от наших музыкантов. Lounge, bossa-nova. Начало в 19:00 '
        }
    ];

    const handleShowMore = () => {
        setVisibleEvents(prev => Math.min(prev + 2, slides.length));
    };

    const handleHide = () => {
        setVisibleEvents(2);
    };

    useEffect(() => {
        const calculateSlideWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                return 424;
            }
            return 300;
        };

        setSlideWidth(calculateSlideWidth());
        window.addEventListener('resize', () => setSlideWidth(calculateSlideWidth()));
        return () => window.removeEventListener('resize', () => setSlideWidth(calculateSlideWidth()));
    }, []);

    const handlePrev = () => {
        setCurrentSlide(prev => (prev > 0 ? prev - 3 : slides.length - 1));
    };

    const handleNext = () => {
        setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 3 : 0));
    };

    const getOffset = () => {
        const gap = 40;
        return -currentSlide * (slideWidth + gap);
    };

    return (
        <div ref={eventRef} className={EventPageStyles.wrapper} id='event'>
            <div className={EventPageStyles.header}>
                <img
                    src={'/eventsPageHeader.svg'}
                    alt={'eventsPageHeader'}
                    className={EventPageStyles.headerItem}
                />
            </div>
            <motion.div
                className={EventPageStyles.title}
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
                СОБЫТИЯ
            </motion.div>

            {!isMobile ? (
                    <div className={EventPageStyles.slider}>
                        <div
                            className={EventPageStyles.sliderContent}
                            style={{
                                transform: `translateX(${getOffset()}px)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={EventPageStyles.slide}
                                    style={{width: `${slideWidth}px`}}
                                >
                                    <img
                                        src={slide.image}
                                        alt="Event"
                                        className={EventPageStyles.slideImage}
                                    />
                                    <div className={EventPageStyles.slideDate}>
                                        {slide.date}
                                    </div>
                                    <div className={EventPageStyles.slideText}>
                                        {slide.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={EventPageStyles.navigation}>
                            <button className={EventPageStyles.arrowButton} onClick={handlePrev}>
                                <img src="/eventsSliderPrev.svg" alt="Previous"/>
                            </button>

                            <div className={EventPageStyles.dotsContainer}>
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${EventPageStyles.dot} ${
                                            index === currentSlide ? EventPageStyles.activeDot : ''
                                        }`}
                                        onClick={() => setCurrentSlide(index)}
                                    >
                                        <img
                                            src={index === currentSlide
                                                ? "/eventsSliderActiveDot.svg"
                                                : "/eventsSliderInactiveDot.svg"}
                                            alt="dot"
                                        />
                                    </button>
                                ))}
                            </div>

                            <button className={EventPageStyles.arrowButton} onClick={handleNext}>
                                <img src="/eventsSliderNext.svg" alt="Next"/>
                            </button>
                        </div>
                    </div>)
                :
                (<div className={EventPageStyles.mobileWrapper}>
                    <div className={EventPageStyles.mobileEvents}>
                        {slides.slice(0, visibleEvents).map((slide, index) => (
                            <div
                                key={index}
                                className={EventPageStyles.mobileSlilde}
                            >
                                <img
                                    src={slide.image}
                                    alt="Event"
                                    className={EventPageStyles.mobileSlideImage}
                                />
                                <div className={EventPageStyles.mobileSlideDate}>
                                    {slide.date}
                                </div>
                                <div className={EventPageStyles.mobileSlideText}>
                                    {slide.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={EventPageStyles.mobileButtons}>
                        {visibleEvents < slides.length && (
                            <HexagonButton  onClick={handleShowMore}>
                                Показать дальше
                            </HexagonButton>
                        )}
                        {visibleEvents > 2 && (
                            <button
                                onClick={handleHide}
                                className={EventPageStyles.hideButton}
                            >
                                Скрыть
                            </button>
                        )}
                    </div>
                </div>)
            }
            <div className={EventPageStyles.footer}>
                <img
                    src={'/eventsPageFooter.svg'}
                    alt={'eventsPageFooter'}
                    className={EventPageStyles.footerItem}
                />
            </div>
        </div>
    );
});

export default EventsPage;