import React from 'react';
import classes from './MyButton.module.css'
import cn from "classnames"
const MyButton = ({children, className}) => {
    return (
        <button className={cn(classes.myButton, className)}>
            <p>{children}</p>
        </button>
    );
};

export default MyButton;