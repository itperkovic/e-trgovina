import React, { Component } from 'react';
import styles from './Footer.module.css';



class Footer extends Component {
    render() {
        return(
            <div>
                <footer className={styles.footer}>copyright © 2020 itperkovic </footer>
            </div>
        );
    }
}

export default Footer;