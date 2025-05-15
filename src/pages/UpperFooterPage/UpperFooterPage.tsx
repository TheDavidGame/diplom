import React from 'react';
import UpperFooterPageStyles from './UpperFooterPage.module.scss';
import {useNavigate} from "react-router-dom";
import HexagonButton from "../../components/HexagonButton/HexagonButton";
import {useMobile} from "../../utils";

const UpperFooterPage = () => {
    const navigate = useNavigate();
    const isMobile = useMobile();

    return (
        <div className={UpperFooterPageStyles.wrapper}>
            <div className={UpperFooterPageStyles.header}>
                <img
                    src="/UpperFooterPageHeader.svg"
                    alt="UpperFooterPageHeader"
                    className={UpperFooterPageStyles.headerItem}
                />
            </div>
            <div className={UpperFooterPageStyles.container}>
                <div className={UpperFooterPageStyles.left}>
                    <img
                        src="/UpperFooterPagePhoto.svg"
                        alt="UpperFooterPagePhoto"
                        className={UpperFooterPageStyles.leftItem}
                    />
                </div>
                <div className={UpperFooterPageStyles.star}>
                    <img
                        src="/UpperFooterPageStar.svg"
                        alt="UpperFooterPageStar"
                        className={UpperFooterPageStyles.starItem}
                    />
                </div>
                <div className={UpperFooterPageStyles.right}>
                    <div className={UpperFooterPageStyles.rightTitle}>
                        Где мы <br/> находимся
                    </div>
                    <div className={UpperFooterPageStyles.rightUnderTitle}>
                        {isMobile ?
                            <span>В уютном дворике на <br/>  станции метро Чистые <br/> пруды</span>
                            :
                            <span>В уютном дворике на станции <br/> метро Чистые пруды</span>
                        }
                    </div>
                    <div className={UpperFooterPageStyles.rightMobile}>
                        <img
                            src="/mobile/UpperFooterPagePhotoMobile.png"
                            alt="UpperFooterPagePhoto"
                            className={UpperFooterPageStyles.rightMobileItem}
                        />
                    </div>
                    <div className={UpperFooterPageStyles.rightAddress}>
                        <img
                            src="/UpperFooterPageAddress.svg"
                            alt="UpperFooterPageAddress"
                            className={UpperFooterPageStyles.rightAddressItem}
                        />
                    </div>
                    <div className={UpperFooterPageStyles.rightWorkTime}>
                        Часы работы: <br/>
                        пн-чт 12:00-00:00 <br/>
                        пт-вс 12:00-2:00
                    </div>
                    <div className={UpperFooterPageStyles.rightBtn}>
                        <HexagonButton onClick={() => navigate('/reservation')}>
                            ЗАБРОНИРОВАТЬ СТОЛ
                        </HexagonButton>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default UpperFooterPage;