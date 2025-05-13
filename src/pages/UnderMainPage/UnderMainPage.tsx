import React, {useRef} from 'react';
import UnderMainPageStyles from './UnderMainPage.module.scss';
import Slider from "../../components/Slider/Slider";
import {SlideItem, UnderMainPageProps} from "../../entity/index.entity";
import {motion, useInView} from 'framer-motion';
import Header from "../../components/Header/Header";
import HexagonButton from "../../components/HexagonButton/HexagonButton";
import {useNavigate} from "react-router-dom";

const UnderMainPage: React.FC<UnderMainPageProps> = ({
                                                         mainPageRef,
                                                         isMainPageVisible,
                                                         setIsMainPageVisible
                                                     }) => {

    const scrollerItems = ['underMainPagePhoto1', 'underMainPagePhoto2', 'underMainPagePhoto3', 'underMainPagePhoto4'];
    const duplicatedImages = [...scrollerItems, ...scrollerItems];
    const slides: SlideItem[] = duplicatedImages.map(item => ({
        image: `/${item}.svg`,
        text: 'Текст под фото'
    }));
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });
    const navigate = useNavigate();

    return (
        <div className={UnderMainPageStyles.wrapper}>
            <Header
                stickyMode={true}
                mainPageRef={mainPageRef}
                setIsMainPageVisible={setIsMainPageVisible}
            />

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
                    <HexagonButton onClick={() => navigate('/aboutGastro')}>
                        О НАС
                    </HexagonButton>
                </div>
            </div>

        </div>
    )
}

export default UnderMainPage;