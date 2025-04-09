import React, {useRef} from 'react';
import AboutUsPageStyles from './AboutUsPage.module.scss';
import Slider from "../../components/Slider/Slider";
import {SlideItem} from "../../entity/index.entity";
import { motion, useInView } from 'framer-motion';

const AboutUsPage = () => {
    const scrollerItems = ['testImage', 'testImage', 'testImage', 'testImage', 'testImage'];
    const duplicatedImages = [...scrollerItems, ...scrollerItems];
    const slides: SlideItem[] = duplicatedImages.map(item => ({
        image: `/${item}.jpg`,
        text: 'Текст под фото'
    }));
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
                <div className={AboutUsPageStyles.artFoodDescription}>
                    <motion.div
                        className={AboutUsPageStyles.artFoodDescriptionTitle}
                        ref={ref1}
                        initial={{ y: 100, opacity: 0 }}
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
                        style={{ position: 'relative' }}
                    >
                        Искусство и еда
                    </motion.div>
                    <div className={AboutUsPageStyles.artFoodDescriptionText}>
                        Забудьте о скучных <br/>
                        местах и откройте для <br/>
                        себя пространство, где
                        искусство и кулинария
                        объединяются.
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
            <div>

                <div>
                    <Slider
                        slides={slides}
                        showText={true}
                    />
                </div>

            </div>
            <div className={AboutUsPageStyles.artFoodWrapperBar}>
                <img
                    src="/artFoodBarPhoto.svg"
                    alt="artFoodBarPhoto"
                    className={AboutUsPageStyles.artFoodBarPhoto}
                />
                <div className={AboutUsPageStyles.artFoodBarDescription}>
                    <motion.div
                        className={AboutUsPageStyles.artFoodBarDescriptionTitle}
                        ref={ref2}
                        initial={{ y: 100, opacity: 0 }}
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
                        style={{ position: 'relative' }}
                    >
                        Крафт <br/>
                        и коктейли
                    </motion.div>
                    <div className={AboutUsPageStyles.artFoodBarDescriptionText}>
                        Каждый напиток — как
                        джазовая импровизация:
                        непредсказуемый, но <br/>
                        всегда гармоничный.
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