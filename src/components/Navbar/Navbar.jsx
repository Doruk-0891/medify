import React from "react";
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Button from "../Button/Button";

const Navbar = () => {
    
    return (
        <div className={styles.wrapper}>

            <div className={styles.navbarContainer}>

                <Logo />

                <div className={styles.navRight}>

                    <ul className={styles.navMenu} onClick={(e) => console.log(e)}>

                        <li className={styles.active}>
                            <p>
                                Find Doctors
                            </p>
                        </li>
                        <li><p>Hospitals</p></li>
                        <li><p>Medicines</p></li>
                        <li><p>Surgeries</p></li>
                        <li><p>Software for Provider</p></li>
                        <li><p>Facilities</p></li>

                    </ul>

                    <Button>My Bookings</Button>

                </div>

            </div>
        </div>
    );
}

export default Navbar;