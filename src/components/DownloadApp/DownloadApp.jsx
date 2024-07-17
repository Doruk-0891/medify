import React from "react";
import Button from "../Button/Button";
import {ReactComponent as GooglePlay } from '../../assets/google_play.svg';
import {ReactComponent as AppleStore } from '../../assets/apple_store.svg';
import styles from './Download.module.css';
import mobile from '../../assets/mobile.jpg';
import arrow from '../../assets/arrow.png';

const DownloadApp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <img src={mobile} alt="mobile" />
                </div>
                <div className={styles.textContent}>
                    <div className={styles.arrowContainer}>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <h2 className={styles.title}>Download the <span>Medify</span> App</h2>
                    <p className={styles.subheading}>Get the link to download the app</p>
                    <div className={styles.smsContainer}>
                        <div className={styles.inputContainer}>
                            <p>+91</p>
                            <input type="text" placeholder="PHONE NO." />
                        </div>
                        <Button>Send SMS</Button>
                    </div>
                    <div className={styles.downloadButton}>
                        <GooglePlay />
                        <AppleStore />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default DownloadApp;