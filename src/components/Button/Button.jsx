import React from "react";
import styles from './Button.module.css';

const Button = ({children, handlerFunction}) => {
    return (
        <button onClick={handlerFunction} className={styles.button}>{children}</button>
    );
}

export const IconButton = ({children, handlerFunction}) => {
    return (
        <button onClick={handlerFunction} className={styles.iconButton}>{children}</button>
    );
}

export default Button;