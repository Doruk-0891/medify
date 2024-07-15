import React from "react";
import styles from './TextInput.module.css';

const TextInput = ({IconComponent, placeholder, value, handleValue}) => {
    return (
        <div className={styles.inputContainer}>
            <IconComponent />
            <input type="text" placeholder={placeholder} />
        </div>
    );
}

export default TextInput;