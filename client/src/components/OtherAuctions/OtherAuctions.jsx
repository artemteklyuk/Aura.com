import React from 'react';
import classes from './OtherAuctions.module.css'
import StickerCard from "./StickerCard/StickerCard";
const OtherAuctions = () => {
    return (
        <section className="container">
            <div className={classes.container_content}>
                <h2 className={classes.header}>Другие аукционы</h2>
                <div className={classes.card_list}>
                    <StickerCard/>
                    <StickerCard/>
                    <StickerCard/>
                    <StickerCard/>
                    <StickerCard/>
                    <StickerCard/>
                    <StickerCard/>
                    <StickerCard/>
                </div>
                <button className={classes.btn}><p>Все аукционы</p></button>
            </div>
        </section>
    );
};

export default OtherAuctions;