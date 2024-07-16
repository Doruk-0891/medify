import React from "react";
import styles from './AdvertisementCard.module.css';

const AdvertisementCard = ({image}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="advertisment" />
        </div>
    );
}

export default AdvertisementCard;