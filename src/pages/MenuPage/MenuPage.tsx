import React from 'react';
import MenuPageStyles from './MenuPage.module.scss';
import MenuSwitch from "./MenuSwitch/MenuSwitch";
import MenuContent from "./MenuContent/MenuContent";

const MenuPage = () => {

    return (
        <div className={MenuPageStyles.wrapper}>
            <MenuSwitch/>
            <MenuContent/>
        </div>
    );
}

export default MenuPage;
