import React, {useState} from 'react';
import {motion} from 'framer-motion';
import MenuSwitchStyles from './MenuSwitch.module.scss';
import {menuHeaderItem, menuSwitchFood, RootState} from "../../../entity/index.entity";
import {useDispatch, useSelector} from "react-redux";
import {switchIsBar} from "../../../services/slices/mainSlice";
import Modal from "../../../components/Modal/Modal";
import FilterPage from "./FilterPage/FilterPage";

const MenuSwitch = () => {
    const menuSwitchFood: menuSwitchFood[] = [
        {
            title: 'СОБЫТИЙНОЕ МЕНЮ',
            text: 'eventMenu'
        },
        {
            text: 'ОСНОВНЫЕ БЛЮДА'
        },
        {
            text: 'САЛАТЫ'
        },
        {
            text: 'ЗАКУСКИ'
        },
    ];

    const menuSwitchBar: menuHeaderItem[] = [
        {
            text: 'ПИВО'
        },
        {
            text: 'ВИНО'
        },
        {
            text: 'КОКТЕЙЛИ'
        },
        {
            text: 'КРЕПКОЕ'
        },
        {
            text: 'БЕЗАЛКОГОЛЬНОЕ'
        },
    ];

    const dispatch = useDispatch();
    const isBar = useSelector((state: RootState) => state.mainSlice.isBar);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSwitch = () => {
        dispatch(switchIsBar());
    };

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <div className={MenuSwitchStyles.wrapper}>
                <div className={MenuSwitchStyles.switchContainer} onClick={toggleSwitch}>

                    <div className={MenuSwitchStyles.switchLabel}>
                        <span className={!isBar ? MenuSwitchStyles.active : ''}>МЕНЮ</span>
                        <span className={isBar ? MenuSwitchStyles.active : ''}>БАР</span>
                    </div>

                    <motion.div
                        className={MenuSwitchStyles.switch}
                        initial={false}
                        animate={{
                            x: isBar ? '434px' : '0',
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.3, 0.85, 0.5, 1.1]
                        }}
                    >
                    </motion.div>
                </div>

                <div className={`${MenuSwitchStyles.menuFood} ${isBar ? MenuSwitchStyles.isBarActive : ''}`}>
                    {isBar ? (
                        menuSwitchBar.map((el, index) => (
                            <div key={index}
                                 className={`${MenuSwitchStyles.menuFoodItem} ${isBar ? MenuSwitchStyles.isBarActive : ''}`}
                                 onClick={() => {
                                     const element = document.getElementById(el.text);
                                     if (element) {
                                         element.scrollIntoView({behavior: 'smooth'});
                                     }
                                 }}
                            >
                                {el.text}
                            </div>
                        ))
                    ) : (
                        menuSwitchFood.map((el, index) => (
                            <div key={index}
                                 className={MenuSwitchStyles.menuFoodItem}
                                 onClick={() => {
                                     const element = document.getElementById(el.text);
                                     if (element) {
                                         element.scrollIntoView({behavior: 'smooth'});
                                     }
                                 }}>
                                {el.title ? (el.title) : (el.text)}
                            </div>
                        ))
                    )}
                </div>

                <div className={MenuSwitchStyles.filter}>
                    <img
                        src="/MenuPageFilter.svg"
                        alt="MenuPageFilter"
                        className={MenuSwitchStyles.filterItem}
                        onClick={handleOpenModal}
                    />
                </div>

            </div>
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <FilterPage onClose={handleCloseModal}/>
                </Modal>
            )}
        </>
    );
};

export default MenuSwitch;