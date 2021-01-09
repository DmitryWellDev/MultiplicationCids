import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.main}>
            <div className={styles.navItem}><NavLink activeClassName={styles.active} to="/Multiple2">Table 2</NavLink></div>
            <div className={styles.navItem}><NavLink activeClassName={styles.active} to="/Multiple3">Table 3</NavLink></div>
            <div className={styles.navItem}><NavLink activeClassName={styles.active} to="/Multiple4">Table 4</NavLink></div>
        </nav>
    )
}