import React from 'react';
import MissionPageStyles from './MissionPage.module.scss';

const MissionPage = () => {
    return (
        <div className={MissionPageStyles.wrapper}>
            <div className={MissionPageStyles.stripes}>
                <div className={MissionPageStyles.stripe} style={{ top: '250px', left: '-15%', transform: 'rotate(-12deg)' }}>
                    СОБЫТИЕ ГАСТРОНОМ
                </div>
                <div className={MissionPageStyles.stripe} style={{ top: '300px', left: '-10%', transform: 'rotate(5deg)' }}>
                    НОВОЕ ИСКУССТВО
                </div>

            </div>

            <div className={MissionPageStyles.main}>
                <div className={MissionPageStyles.mainTitle}>
                    МИССИЯ
                </div>
                <div className={MissionPageStyles.mainDescription}>
                    Наша миссия — вдохновлять людей через <br/> искусство и культуру
                </div>
            </div>
        </div>
    );
};

export default MissionPage;