import React from "react";
import styles from './Button.module.css';

const Button = ({children, handlerFunction}) => {
    return (
        <button onClick={handlerFunction} className={styles.button}>{children}</button>
    );
}

export default Button;