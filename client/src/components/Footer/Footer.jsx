import React from 'react';
import classes from './Footer.module.css'
import logo from '../../accets/logo.svg'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.content}>
                    <img src={logo} alt="logo" className={classes.logo}/>
                    <div className={classes.nav}>
                        <p className={classes.navBtn}>Соглашение</p>
                        <p className={classes.navBtn}>Лицензия</p>
                        <p className={classes.navBtn}>FAQ</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;