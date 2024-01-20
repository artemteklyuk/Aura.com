import React from 'react';
import classes from './Conditions.module.css'
import smiles from '../../accets/Smiles.png'
import img1 from '../../accets/Svg/1.svg'
import img2 from '../../accets/Svg/2.svg'
import img3 from '../../accets/Svg/3.svg'

const Conditions = () => {
    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.content}>
                    <div className={classes.info}>
                        <p className={classes.header}>Для попадания в топ необходимо:</p>
                        <div className={classes.conditionContainer}>
                            <img className={classes.svg} src={img1} alt="svg"/>
                            <p className={classes.condition}>Минимум пять опубликованных работ</p>
                        </div>
                        <div className={classes.conditionContainer}>
                            <img className={classes.svg} src={img3} alt="svg"/>
                            <p className={classes.condition}>Инвайт трём коллегам по цеху</p>
                        </div>
                        <div className={classes.conditionContainer}>
                            <img className={classes.svg} src={img3} alt="svg"/>
                            <p className={classes.condition}>Верифицированный аккаунт</p>
                        </div>
                    </div>
                    <img src={smiles} alt="Smiles" className={classes.image}/>
                </div>
            </div>
        </section>
    );
};

export default Conditions;