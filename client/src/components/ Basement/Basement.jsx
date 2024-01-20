import React from 'react';
import classes from "./Basement.module.css";
import aura from "../../accets/Svg/AURA.svg";

const Basement = () => {
    return (
        <div className={classes.basement}>
            <div className="container">
                <div className={classes.content}>
                    <img src={aura} alt="AURA"/>
                </div>
            </div>
        </div>
    );
};

export default Basement;