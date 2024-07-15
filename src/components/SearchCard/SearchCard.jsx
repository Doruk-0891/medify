import React from "react";
import styles from './SearchCard.module.css';

const SearchCard = ({image, title}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={image} alt="" />
            </div>
            <p className={styles.textContent}>{title}</p>
        </div>
    );
}

export default SearchCard;