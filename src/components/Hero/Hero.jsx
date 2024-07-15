import React from "react";
import styles from './Hero.module.css';
import Button from "../Button/Button";
import HeroImage from '../../assets/Hero.png';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.tagline}>
                Skip the travel! Find Online
                </h2>
                <h1 className={styles.heading}>
                    Medical <span>Centers</span>
                </h1>
                <p className={styles.textContent}>
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </p>
                <Button>Find Centers</Button>
            </div>
            <div className={styles.imageContainer}>
                <img src={HeroImage} alt="hero_image" />
            </div>
        </div>
    );
}

export default Hero;