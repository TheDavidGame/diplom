import React, {useRef} from 'react';
import AboutUsPageStyles from './AboutUsPage.module.scss';
import Slider from "../../components/Slider/Slider";
import {motion, useInView} from 'framer-motion';
import HexagonButton from "../../components/HexagonButton/HexagonButton";
import {useNavigate} from "react-router-dom";
import {setIsBar} from "../../services/slices/mainSlice";
import {useDispatch} from "react-redux";
import {useMobile} from "../../utils";

const AboutUsPage = () => {
    const scrollerItems = [{
        image: '/mainFood/menuFood1.png',
        text: 'ЧЕВАПЧИМИЧИ',
    }, {
        image: '/mainFood/menuFood2.png',
        text: 'ЧИЛИ ЧИКЕН',
    }, {
        image: '/mainFood/menuFood3.png',
        text: 'ВЕСТЕРН БОУНС',
    }, {
        image: '/mainFood/menuFood4.png',
        text: 'БЭЙБИ ПОТАТА',
    }];
    const slides = [...scrollerItems, ...scrollerItems];
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);

    const isInView1 = useInView(ref1, {
        once: true,
        margin: "0px 0px -30% 0px"
    });

    const isInView2 = useInView(ref2, {
        once: true,
        margin: "0px 0px -30% 0px"
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useMobile();

    const navigateItem = (text: string) => {
        if (text === "МЕНЮ") dispatch(setIsBar(false));
        if (text === "БАРНАЯ КАРТА") dispatch(setIsBar(true));
        navigate('/menu');
    };

    return (
        <div className={AboutUsPageStyles.wrapper}>
            <div className={AboutUsPageStyles.artFoodWrapper}>
                <img
                    src="/artFoodWrapperPhoto.svg"
                    alt="artFoodWrapperPhoto"
                    className={AboutUsPageStyles.artFoodWrapperPhoto}
                />

                <img
                    src="/artFoodWrapperStar.svg"
                    alt="artFoodWrapperStar"
                    className={AboutUsPageStyles.artFoodWrapperStar}
                />

                <div className={AboutUsPageStyles.artFoodDescription}>
                    <motion.div
                        className={AboutUsPageStyles.artFoodDescriptionTitle}
                        ref={ref1}
                        initial={{y: 100, opacity: 0}}
                        animate={isInView1 ? {
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
                        Искусство и еда
                    </motion.div>
                    <div className={AboutUsPageStyles.artFoodDescriptionText}>
                        Забудьте о скучных местах! <br/>
                        Откройте для себя особое <br/>
                        пространство, где искусство <br/>
                        и кулинария объединяются.
                    </div>
                    <div className={AboutUsPageStyles.artFoodDescriptionBtn}>
                        <HexagonButton onClick={() => navigateItem('МЕНЮ')}>
                            НАШЕ МЕНЮ
                        </HexagonButton>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: '#FF5101'}}>
                <img
                    src="/artFoodSliderArrowTop.svg"
                    alt="artFoodSliderArrowTop"
                    className={AboutUsPageStyles.artFoodSliderArrowTop}
                />
                <Slider
                    slides={slides}
                    showText={true}
                />
                <img
                    src="/artFoodSliderArrowBot.svg"
                    alt="artFoodSliderArrowBot"
                    className={AboutUsPageStyles.artFoodSliderArrowBot}
                />
            </div>

            <div className={AboutUsPageStyles.artFoodWrapperBar}>
                <img
                    src="/artFoodBarPhoto.svg"
                    alt="artFoodBarPhoto"
                    className={AboutUsPageStyles.artFoodBarPhoto}
                />
                <div className={AboutUsPageStyles.artFoodBarDescription}>
                    <img
                        src="/artFoodWrapperStar.svg"
                        alt="artFoodWrapperStar"
                        className={AboutUsPageStyles.artFoodBarDescriptionStar}
                    />
                    <motion.div
                        className={AboutUsPageStyles.artFoodBarDescriptionTitle}
                        ref={ref2}
                        initial={{y: 100, opacity: 0}}
                        animate={isInView2 ? {
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
                        {isMobile ?
                            <span>
                                Крафт и коктейли

                            </span>
                            :
                            <span>
                            Крафт <br/>
                                и коктейли
                            </span>
                        }

                    </motion.div>
                    <div className={AboutUsPageStyles.artFoodBarDescriptionText}>
                        {isMobile ?
                            <span>
                                Каждый напиток — <br/>
                                джазовая импровизация: <br/>
                                непредсказуемый, но всегда <br/>
                                гармоничный.
                            </span>
                            :
                            <span>
                                Каждый напиток — джазовая <br/>
                                импровизация: непредсказуемый, <br/>
                                но всегда гармоничный.
                            </span>
                        }

                    </div>
                    <div className={AboutUsPageStyles.artFoodBarDescriptionBtn}>
                        <HexagonButton onClick={() => navigateItem('БАРНАЯ КАРТА')}>
                            БАРНАЯ КАРТА
                        </HexagonButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage;