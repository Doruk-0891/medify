import React from "react";
import styles from './FAQ.module.css';
import Accordion from "../../components/Accordion/Accordion";
import FAQImage from '../../assets/FAQImage.png';
import coloredHeart from '../../assets/coloredheart.png';
import { QnA } from "../../helper/helper";

const FAQ = () => {
    return (
        <div className={styles.faqContainer}>
                    <h3 className={styles.sectionHeading}>
                        <p className={styles.subheading}>Get Your Answer</p>
                        Frequently Asked Questions
                    </h3>
                    <div className={styles.splitter}>
                        <div className={styles.imageContainer}>
                            <div style={{position:'relative'}}>
                                <img src={FAQImage} alt="questions" style={{
                                    height:'598px'
                                }} />
                                    <img src={coloredHeart} alt="colored heart" style={{
                                        width: '80px',
                                        position: 'absolute',
                                        zIndex: '10',
                                        top: '180px',
                                        right: '-5px'
                                    }} />
                            </div>
                        </div>
                        <div className={styles.accordionWrapper}>
                            {
                                QnA.map((data, idx) =>  <Accordion key={idx} data={data} />)
                            }
                            
                        </div>
                    </div>
                </div>
    );
}

export default FAQ;