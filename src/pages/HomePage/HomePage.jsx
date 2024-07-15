import React from "react";
import styles from './HomePage.module.css';
import Hero from "../../components/Hero/Hero";
import SearchSection from "./SearchSection/SearchSection";
import SearchCard from "../../components/SearchCard/SearchCard";
import { NEWS, SPECIALISATION } from "../../helper/helper";
import Button from "../../components/Button/Button";
import { MdVerified } from "react-icons/md";
import ConsultationImage from '../../assets/Consultation.png';
import CountImage from '../../assets/counts.png';
import NewsCard from "../../components/NewsCard/NewsCard";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>

                <Hero />

                <SearchSection />

                <div className={styles.specialisationSection}>

                    <div className={styles.flexContainer}>

                        <h3 className={styles.sectionHeading}>Find By Specialisation</h3>

                        <div className={styles.flexContainer}>
                            {
                                SPECIALISATION.map(({image, title}) => <SearchCard  image={image} title={title} key={title} />)
                            }
                        </div>
                        
                        <Button>View All</Button>

                    </div>

                </div>


                <div className={styles.advertisement}>

                    <div className={styles.imageContainer}>
                        <img src={ConsultationImage} alt="consultation_image" />
                    </div>
                    <div>
                        <h3 className={styles.tagline}>HELPING PATIENTS FROM AROUND THE GLOBE!!</h3>
                        <h2 className={styles.heading}>Patient <span>Caring</span></h2>
                        <p className={styles.textContent}> Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                        <ul>
                            <li>
                                <MdVerified style={{color: 'var(--primary-blue)'}} />
                                <p>Stay Updated About Your Health</p>
                            </li>
                            <li>
                                <MdVerified style={{color: 'var(--primary-blue)'}} />
                                <p>Check Your Results Online</p>
                            </li>
                            <li>
                                <MdVerified style={{color: 'var(--primary-blue)'}} />
                                <p>Manage Your Appointments</p>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className={styles.flexContainer} style={{flexDirection: 'column'}}>
                    <h3 className={styles.sectionHeading}>
                        <p className={styles.subheading}>Blogs & News</p>
                        Read Our Latest News
                    </h3>
                    <div className={styles.flexContainer}>
                        {
                            NEWS.map((news, idx) => <NewsCard data={news} key={idx} />)
                        }
                    </div>
                </div>

                <div className={styles.count}>

                    <div>
                        <h3 className={styles.tagline}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h3>
                        <h2 className={styles.heading}>Our Families</h2>
                        <p className={styles.textContent}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={CountImage} alt="consultation_image" />
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    );
}

export default HomePage;