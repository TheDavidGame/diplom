import React, {useRef} from 'react';
import UnderHeaderStyles from './UnderHeader.module.scss';
import {UnderMainPageProps} from "../../../entity/index.entity";
import Header from "../../../components/Header/Header";
import {motion, useInView} from "framer-motion";

const UnderHeader: React.FC<UnderMainPageProps> = ({
                                                       mainPageRef,
                                                       isMainPageVisible,
                                                       setIsMainPageVisible
                                                   }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });
    return (
        <div className={UnderHeaderStyles.wrapper}>
            <Header
                stickyMode={true}
                mainPageRef={mainPageRef}
                setIsMainPageVisible={setIsMainPageVisible}
            />

            <div className={UnderHeaderStyles.main}>
                <motion.div
                    className={UnderHeaderStyles.mainTitle}
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
                    ИСКУССТВО И ВКУС
                </motion.div>
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