import React from 'react';
import AboutUsPageStyles from './AboutUsPage.module.scss';

const AboutUsPage = () => {

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
                        Забудьте о скучных местах и откройте для себя пространство, где искусство и кулинария
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

            </div>
            <div>

            </div>
        </div>
    )
}

export default AboutUsPage;