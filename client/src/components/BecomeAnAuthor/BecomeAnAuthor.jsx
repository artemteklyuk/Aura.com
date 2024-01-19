import React from 'react';
import classes from './BecomeAnAuthor.module.css'
import MyButton from "../UI/Button/MyButton";
import hands from '../../accets/hands.png'
import plus from '../../accets/plus.svg'
const BecomeAnAuthor = () => {
    return (
        <section className="container">
            <div className={classes.content}>
                <div className={classes.info}>
                    <h1>Стать автором</h1>
                    <h2 className={classes.head2}>Если ты художник или стремишься им стать — добро пожаловать к нам!</h2>
                    <p className={classes.desc}>Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграме.
                        Если наши кураторы решат, что нам по пути, то мы обязательно
                        свяжемся с тобой и обговорим условия сотрудничества!<b> Удачи!</b></p>
                    <img className={classes.image} src={hands} alt="Hands"/>
                </div>
                <form action="" className={classes.form}>
                    <div className={classes.dropArea}>
                        <div className={classes.addJPng}>
                            <div className={classes.plusArea}>
                                <img src={plus} alt="plus" className={classes.plus}/>
                            </div>
                            <p className={classes.addText}>Прикрепить работы (.jpeg / .png)</p>
                        </div>
                    </div>
                    <input className={classes.input} placeholder="@telegram_nickname" type="text"/>
                    <MyButton className={classes.btn}>Отправить</MyButton>
                </form>
            </div>
            
        </section>
    );
};

export default BecomeAnAuthor;