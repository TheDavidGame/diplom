import React, {useRef, useState, useEffect} from 'react';
import UnderMainPageStyles from './UnderMainPage.module.scss';

interface UnderMainPageProps {
    mainPageRef: React.RefObject<HTMLDivElement | null>;
    isMainPageVisible: boolean;
    setIsMainPageVisible: (visible: boolean) => void;
}

const UnderMainPage: React.FC<UnderMainPageProps> = ({
                                                         mainPageRef,
                                                         isMainPageVisible,
                                                         setIsMainPageVisible
                                                     }) => {
    const scrollerItems = ['testImage', 'testImage', 'testImage', 'testImage', 'testImage'];
    const duplicatedImages = [...scrollerItems, ...scrollerItems];
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

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

                <div className={UnderMainPageStyles.burger}>
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

            <div className={UnderMainPageStyles.scroller}>
                <div className={UnderMainPageStyles.scrollerContainer}>
                    {duplicatedImages.map((item) => (
                        <div key={item} className={UnderMainPageStyles.scrollerItem}>
                            <img
                                src={`/${item}.jpg`}
                                alt={`Gallery ${item}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={UnderMainPageStyles.underScroller}>
                <div className={UnderMainPageStyles.underScrollerText}>
                    Наша вселенная возникла после культурного взрыва.
                    Музыка, игры, встречи, стихи, море напитков и вкусной еды
                </div>

                <div className={UnderMainPageStyles.underScrollerAboutUs}>
                    <img src="/aboutUsUnderScroller.svg" alt="aboutUsUnderScroller"/>
                </div>
            </div>
        </div>
    )
}

export default UnderMainPage;