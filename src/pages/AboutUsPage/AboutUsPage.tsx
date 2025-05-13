import React, {useRef} from 'react';
import AboutUsPageStyles from './AboutUsPage.module.scss';
import Slider from "../../components/Slider/Slider";
import {SlideItem} from "../../entity/index.entity";
import {motion, useInView} from 'framer-motion';

const AboutUsPage = () => {
    // const scrollerItems = ['menuFood1', 'menuFood2', 'menuFood3', 'menuFood4', 'menuFood5'];
    const scrollerItems = [ {
        image: '/mainFood/menuFood1.svg',
        text: 'ЧЕВАПЧИМИЧИ',
    }, {
        image: '/mainFood/menuFood2.svg',
        text: 'ЧИЛИ ЧИКЕН',
    },{
        image: '/mainFood/menuFood3.svg',
        text: 'ВЕСТЕРН БОУНС',
    },{
        image: '/mainFood/menuFood4.svg',
        text: 'БЭЙБИ ПОТАТА',
    }];
    const slides = [...scrollerItems, ...scrollerItems];
    // const slides: SlideItem[] = duplicatedImages.map(item => ({
    //     image: `/mainFood/${item}.svg`,
    //     text: 'Текст под фото'
    // }));
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
                        Забудьте о скучных местах! <br />
                        Откройте для себя особое <br/>
                        пространство, где искусство <br/>
                        и кулинария объединяются.
                    </div>
                    <div className={AboutUsPageStyles.artFoodDescriptionBtn}>
                        <img
                            src="/artFoodDescriptionBtn.svg"
                            alt="artFoodWrapperPhoto"
                            className={AboutUsPageStyles.artFoodDescriptionBtn}
                        />
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
                        Крафт <br/>
                        и коктейли
                    </motion.div>
                    <div className={AboutUsPageStyles.artFoodBarDescriptionText}>
                        Каждый напиток — как джазовая <br/>
                        импровизация: непредсказуемый, <br/>
                        но всегда гармоничный.
                    </div>
                    <div className={AboutUsPageStyles.artFoodBarDescriptionBtn}>
                        <img
                            src="/artFoodBarBtn.svg"
                            alt="artFoodBarBtn"
                            className={AboutUsPageStyles.artFoodBarDescriptionBtn}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage;