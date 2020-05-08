import React, { Component } from 'react';
import styles from './Footer.module.css';



class Footer extends Component {
    render() {
        return(
            <div>
                <footer className={styles.footer}>© KOPIRAJT BAJJY PERKA</footer>
            </div>
        );
    }
}

export default Footer;