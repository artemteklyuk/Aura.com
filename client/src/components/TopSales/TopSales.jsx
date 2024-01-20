import React from 'react';
import classes from './TopSales.module.css'
import TopCard from "./TopCard/TopCard";
const TopSales = () => {
    return (
        <section className={classes.section}>
            <div className="container">
                <h1 className={classes.head}>Топ продаж</h1>
                <div className={classes.cardContainer}>
                    <TopCard/>
                    <TopCard/>
                    <TopCard/>
                    <TopCard/>
                    <TopCard/>
                    <TopCard/>
                </div>
            </div>
        </section>


    );
};

export default TopSales;