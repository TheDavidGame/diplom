import React from 'react';
import AboutUsPageStyles from './AboutUsPage.module.scss';
import Slider, {SlideItem} from "../../components/Slider/Slider";

const AboutUsPage = () => {
    const scrollerItems = ['testImage', 'testImage', 'testImage', 'testImage', 'testImage'];
    const duplicatedImages = [...scrollerItems, ...scrollerItems];
    const slides: SlideItem[] = duplicatedImages.map(item => ({
        image: `/${item}.jpg`,
        text: 'Текст под фото'
    }));

    return (
        <div className={AboutUsPageStyles.wrapper}>
            <div className={AboutUsPageStyles.artFoodWrapper}>
                <img
                    src="/artFoodWrapperPhoto.svg"
                    alt="artFoodWrapperPhoto"
                    className={AboutUsPageStyles.artFoodWrapperPhoto}
                />
                <div className={AboutUsPageStyles.artFoodDescription}>
                    <div className={AboutUsPageStyles.artFoodDescriptionTitle}>
                        Искусство и еда
                    </div>
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
                    <div className={AboutUsPageStyles.artFoodBarDescriptionTitle}>
                        Крафт <br/>
                        и коктейли
                    </div>
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