import React from "react";
import styles from './HexagonButton.module.scss';

// @ts-ignore
const HexagonButton = ({children, onClick}) => {
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
