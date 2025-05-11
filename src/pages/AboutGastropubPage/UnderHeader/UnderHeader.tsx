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
        </div>
    );
};

export default UnderHeader;