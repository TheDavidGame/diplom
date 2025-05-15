import React, {useEffect, useRef, useState} from "react";
import HeaderStyles from './Header.module.scss';
import {HeaderProps} from "../../entity/index.entity";
import Modal from "../Modal/Modal";
import BurgerModalPage from "../../pages/BurgerModalPage/BurgerModalPage";
import {useNavigate} from "react-router-dom";
import {useMobile} from "../../utils";


const Header: React.FC<HeaderProps> = ({stickyMode = false, mainPageRef, setIsMainPageVisible}) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        if (stickyMode && mainPageRef && setIsMainPageVisible) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    const isVisible = entry.isIntersecting;
                    setIsMainPageVisible(isVisible);
                    setIsSticky(!isVisible);
                },
                {threshold: 0}
            );
            if (mainPageRef.current) observer.observe(mainPageRef.current);
            return () => {
                if (mainPageRef.current) observer.unobserve(mainPageRef.current);
            };
        }
    }, [stickyMode]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => setIsModalOpen(false);

    const isMobile = useMobile();

    return (
        <>
            {isSticky && <div style={{height: headerHeight}}/>}
            <div ref={headerRef} className={`${HeaderStyles.header} ${isSticky ? HeaderStyles.sticky : ''}`}>
                {isMobile
                    ?
                    <img src="/mobile/bckrndHeaderMobile.png" alt="Header background" className={HeaderStyles.background}/>
                    :
                    <img src="/bckrndHeader.svg" alt="Header background" className={HeaderStyles.background}/>
                }

                <div className={HeaderStyles.burger} onClick={handleOpenModal}>
                    <img src="/burgerHeader.svg" alt="Menu"/>
                </div>
                <div className={HeaderStyles.logo}>
                    <img src="/logoHeader.svg" alt="Logo"/>
                </div>
                <div className={HeaderStyles.reservation} onClick={() => navigate('/reservation')}>
                    <img src="/reservationHeader.svg" alt="Reservation"/>
                </div>
            </div>

            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <BurgerModalPage onClose={handleCloseModal}/>
                </Modal>
            )}

        </>
    );
};

export default Header;
