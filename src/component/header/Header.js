import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div>
            <h2 className={styles["main-header"]}>Popular Tour Places</h2>
        </div>
    )
}
export default Header;