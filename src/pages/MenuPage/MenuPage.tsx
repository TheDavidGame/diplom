import React from 'react';
import MenuPageStyles from './MenuPage.module.scss';
import MenuSwitch from "./MenuSwitch/MenuSwitch";
import MenuContent from "./MenuContent/MenuContent";
import AppFooter from "../AppFooter/AppFooter";
import Header from "../../components/Header/Header";

const MenuPage = () => {

    return (
        <div className={MenuPageStyles.wrapper}>
            <Header />
            <MenuSwitch/>
            <MenuContent/>
            <AppFooter/>
        </div>
    );
}

export default MenuPage;
