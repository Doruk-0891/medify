import React from "react";
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const Navbar = () => {
    
    return (
        <div className={styles.wrapper}>

            <div className={styles.navbarContainer}>
                <Link to='/'>
                    <Logo />
                </Link>

                <div className={styles.navRight}>

                    <ul className={styles.navMenu}>

                        <li className={styles.active}>
                            <p>
                                Find Doctors
                            </p>
                        </li>
                        <li>
                            <Link to='/search' style={{textDecoration: 'none'}}>
                                <p>Hospitals</p>
                            </Link>
                        </li>
                        <li><p>Medicines</p></li>
                        <li><p>Surgeries</p></li>
                        <li><p>Software for Provider</p></li>
                        <li><p>Facilities</p></li>

                    </ul>

                    <Link to='/mybookings' style={{textDecoration: 'none'}}>
                        <Button>My Bookings</Button>
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default Navbar;