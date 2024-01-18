import React from 'react';
import classes from "../Subscribe/Subscribe.module.css";
import stickers from '../../accets/OKAY.png'
import MyButton from "../UI/Button/MyButton";
const Subscribe = () => {
    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.content}>
                    <form action="" className={classes.form}>
                        <h2 className={classes.header}>Будь в курсе новинок! Подпишись на рассылку!</h2>
                        <input type="text" placeholder="Имя" className={classes.input}/>
                        <input type="email" placeholder="E-mail" className={classes.input}/>
                        <MyButton className={classes.btn}>Подписаться</MyButton>
                        <div className={classes.personalData}>
                            <input className={classes.checkBox} type="checkbox"/>
                            <p className={classes.personalText}>Согласен на обработку персональных данных</p>
                        </div>
                    </form>
                    <img className={classes.image} src={stickers} alt="Stikers"/>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;