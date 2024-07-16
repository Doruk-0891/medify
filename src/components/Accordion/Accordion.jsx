import React, {useState} from "react";
import styles from './Accordion.module.css';
import {IconButton} from "../Button/Button";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({data}) => {
    const [isActive, setIsActive] = useState(false);
    const {question, answer} = data;

    const handleOpenCloseAccordion = () => {
        setIsActive(prev => !prev);
    }

    return (
            <div className={styles.accordionItem}>
                <div className={styles.questionWrapper} >
                    <p className={styles.question}>{question}</p>
                    <IconButton handlerFunction={handleOpenCloseAccordion} >
                        {
                            isActive ? <FaMinus /> : <FaPlus />
                        }          
                    </IconButton>
                </div>
                {
                    isActive && 
                    <div className={styles.answerWrapper}>
                        <p className={styles.answer}>
                        {answer}
                        </p>
                    </div>
                }
            </div>
    );
}

export default Accordion;