import React from "react";
import styles from './HexagonButton.module.scss';
import {HexagonButtonProps} from "../../entity/index.entity";

const HexagonButton = ({children, onClick} : HexagonButtonProps) => {
    return (
        <span className={styles.hexButtonWrapper}>

      <button className={styles.hexButton} onClick={onClick}>
        {children}
      </button>

      <span className={styles.hexButtonShadow}></span>
    </span>
    );
};

export default HexagonButton;
