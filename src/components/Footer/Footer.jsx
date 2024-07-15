import React from "react";
import styles from './Footer.module.css';
import Logo from "../Logo/Logo";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.topLinks}>
                    <div className={styles.leftLinks}>
                        <Logo />
                        <div className={styles.socialLinks}>
                            <div>
                                <span>
                                    <FaFacebookF />
                                </span>
                            </div>
                            <div>
                                <span>
                                    <FaTwitter />
                                </span>
                            </div>
                            <div>
                                <span>
                                    <FaYoutube />
                                </span>
                            </div>
                            <div>
                                <span>
                                    <FaPinterest />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightLinks}>
                        <ul>
                            <li>
                                <MdKeyboardArrowRight />
                                About Us
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Our Pricing
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Our Gallery
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Appointment
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Privacy Policy
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <MdKeyboardArrowRight />
                                Orthology
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Neurology
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Dental Care
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Opthalmology
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Cardiology
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <MdKeyboardArrowRight />
                                About Us
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Our Pricing
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Our Gallery
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Appointment
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Privacy Policy
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={styles.footnote}>
                    <p>
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;