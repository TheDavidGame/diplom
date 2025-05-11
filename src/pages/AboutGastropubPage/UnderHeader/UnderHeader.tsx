import React from 'react';
import UnderHeaderStyles from './UnderHeader.module.scss';
import {UnderMainPageProps} from "../../../entity/index.entity";
import Header from "../../../components/Header/Header";

const UnderHeader: React.FC<UnderMainPageProps> = ({
                                                       mainPageRef,
                                                       isMainPageVisible,
                                                       setIsMainPageVisible
                                                   }) => {
    return (
        <div className={UnderHeaderStyles.wrapper}>
            <Header
                stickyMode={true}
                mainPageRef={mainPageRef}
                setIsMainPageVisible={setIsMainPageVisible}
            />

            <div className={UnderHeaderStyles.main}>
                <div className={UnderHeaderStyles.mainTitle}>
                    ИСКУССТВО И ВКУС
                </div>
                <div className={UnderHeaderStyles.mainDescription}>
                    <span style={{fontWeight:"bold"}}>CULTURE BLAST  </span>— это уникальный гастро-бар, где <br/> сходятся искусство и гастрономия.
                    Мы создаем <br/> пространство, где каждый может насладиться не <br/>только вкусной едой,
                    но и погрузиться в мир искусства <br/> и культуры.
                </div>
            </div>
        </div>
    );
};

export default UnderHeader;