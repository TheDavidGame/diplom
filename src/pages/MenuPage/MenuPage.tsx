import React from 'react';
import MenuPageStyles from './MenuPage.module.scss';
import {menuHeaderItem} from "../../entity/index.entity";
import MenuSwitch from "./MenuSwitch/MenuSwitch";

const MenuPage = () => {

    return (
        <div className={MenuPageStyles.wrapper}>
            <MenuSwitch/>
            {/*<MenuContent/>*/}
        </div>
    );
}

export default MenuPage;
