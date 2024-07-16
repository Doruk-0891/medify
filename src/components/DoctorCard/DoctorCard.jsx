import React from "react";
import styles from './DoctorCard.module.css';

const DoctorCard = (data) => {
    const {image, name, role} = data;
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.pill}>
                    <img src={image} alt="doctor" />
                </div>   
            </div>
            <div className={styles.textContent}>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
            </div>
        </div>
    );
}

export default DoctorCard;