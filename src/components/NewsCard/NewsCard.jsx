import React from "react";
import styles from './NewsCard.module.css';

const NewsCard = ({data}) => {
    const {image, title, type, date, profile_image, name} = data;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            <img src={image} alt="news_image" />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.metaData}>
                    <span>{type}</span>
                    <span>{date}</span>
                </p>
                <p className={styles.title}>{title}</p>
                <div className={styles.profile}>
                    <div>
                        <img src={profile_image} alt="profile_image" />
                    </div>
                    <p className={styles.profilePic}>{name}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;