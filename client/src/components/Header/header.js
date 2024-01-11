import React from 'react';
import "./header.css"
import logo from "../../accets/logo.svg"

const Header = () => {
    return (
        <header className="header container">
            <img src={logo} alt="HeaderLogo" className="logo"/>
            <div className="nav">
                <button className="nav__btn">
                    <p className="nav__text__btn">Авторы</p>
                </button>
                <button className="nav__btn">
                    <p className="nav__text__btn">Коллекции</p>
                </button>
                <button className="nav__btn">
                    <p className="nav__text__btn">Сервисы</p>
                </button>
            </div>
            <button className="header_btn">
                <p className="header_btn__text">Кошелек</p>
            </button>
        </header>
    );
};

export default Header;