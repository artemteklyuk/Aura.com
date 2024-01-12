import React from 'react';
import classes from "./header.module.css"
import logo from "../../accets/logo.svg"

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img src={logo} alt="HeaderLogo" className={classes.logo}/>
                <div className={classes.nav}>
                    <button className={classes.nav__btn}>
                        <p className={classes.nav__text__btn}>Авторы</p>
                    </button>
                    <button className={classes.nav__btn}>
                        <p className={classes.nav__text__btn}>Коллекции</p>
                    </button>
                    <button className={classes.nav__btn}>
                        <p className={classes.nav__text__btn}>Сервисы</p>
                    </button>
                </div>
                <button className={classes.header_btn}>
                    <p className={classes.header_btn__text}>Кошелек</p>
                </button>
            </div>
        </header>
    );
};

export default Header;