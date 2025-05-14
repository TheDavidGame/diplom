import React from 'react';
import BurgerModalPageStyles from './BurgerModalPage.module.scss';
import {BurgerModalPageProps, menuHeader, menuHeaderItem, ModalProps} from "../../entity/index.entity";
import Header from "../../components/Header/Header";
import {useLocation, useNavigate} from "react-router-dom";
import {setIsBar} from "../../services/slices/mainSlice";
import {useDispatch} from "react-redux";

const BurgerModalPage = ({onClose}: BurgerModalPageProps) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateItem = (text: string, url: string) => {
        onClose();
        if (text === "МЕНЮ") dispatch(setIsBar(false));
        if (text === "БАРНАЯ КАРТА") dispatch(setIsBar(true));

        if (location.pathname !== url) {
            if (text === "СОБЫТИЯ") {
                navigate(url, { state: { scrollToId: 'event' } });
            } else {
                navigate(url);
            }
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    const menuList: menuHeader[] = [
        {text: 'ГЛАВНАЯ', url: '/'},
        {text: 'МЕНЮ', url: '/menu'},
        {text: 'БАРНАЯ КАРТА', url: '/menu'},
        {text: 'СОБЫТИЯ', url: '/#event'},
        {text: 'О НАС', url: '/aboutGastro'}
    ];

    const footerList: menuHeaderItem[] = [
        {text: '2025 CULTURE BLAST'},
        {text: 'ПОЛИТИКА ПРИВАТНОСТИ'},
        {text: 'ПОЛИТИКА БРОНИРОВАНИЯ'}
    ];

    const footerIconsList: menuHeaderItem[] = [
        {text: '/burgerModalIconsTg.svg'},
        {text: '/burgerModalIconsVk.svg'},
        {text: '/burgerModalIconsInst.svg'}
    ];

    return (
        <div className={BurgerModalPageStyles.wrapper}>
            <div className={BurgerModalPageStyles.header}>
                <Header/>
            </div>

            <div className={BurgerModalPageStyles.list}>
                {menuList.map((el, index) => (
                    <React.Fragment key={index}>
                        <div className={BurgerModalPageStyles.listItem} onClick={() => navigateItem(el.text, el.url)}>
                            {el.text}
                            <div className={BurgerModalPageStyles.underline}></div>
                        </div>
                        <div className={BurgerModalPageStyles.listArrow}>
                            <img src="/BurgerModalListItemArrow.svg" alt="star" className={BurgerModalPageStyles.listArrowItem}/>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className={BurgerModalPageStyles.star}>
                <img src="/burgerModalPageStar.svg" alt="star"/>
            </div>

            <div className={BurgerModalPageStyles.footer}>
                <div className={BurgerModalPageStyles.footerItems}>
                    {footerList.map((elem, index) => (
                        <div key={index} className={BurgerModalPageStyles.footerItem}>
                            {elem.text}
                        </div>
                    ))}
                </div>

                <div className={BurgerModalPageStyles.footerIconsItems}>
                    {footerIconsList.map((elem, index) => (
                        <div key={index} className={BurgerModalPageStyles.footerIconsItem}>
                            <img src={elem.text} alt="icons"/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BurgerModalPage;
