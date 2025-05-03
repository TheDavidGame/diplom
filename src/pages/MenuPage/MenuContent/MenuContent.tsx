import React from 'react';
import MenuFood from "./MenuFood/MenuFood";
import MenuBar from "./MenuBar/MenuBar";
import {useSelector} from "react-redux";
import {RootState} from "../../../entity/index.entity";

const MenuContent = () => {
    const isBar = useSelector((state: RootState) => state.mainSlice.isBar);

    return <div>{isBar ? <MenuBar /> : <MenuFood />}</div>;
};

export default MenuContent;