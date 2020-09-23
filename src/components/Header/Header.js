import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h4 className={styles.brand}>eTrgovina</h4>
      <nav>
        <NavLink exact to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/Cart" className={styles.link}>
          Cart
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
