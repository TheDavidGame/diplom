import React from 'react';
import MissionPageStyles from './MissionPage.module.scss';

const MissionPage = () => {
    return (
        <div className={MissionPageStyles.wrapper}>
            <div className={MissionPageStyles.main}>
                <div className={MissionPageStyles.mainTitle}>
                    МИССИЯ
                </div>
                <div className={MissionPageStyles.mainDescription}>
                    Наша миссия — вдохновлять людей через искусство и культуру
                </div>
            </div>
        </div>
    );
};

export default MissionPage;