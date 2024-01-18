import React from 'react';
import classes from './OtherAuctions.module.css'
import StickerCard from "./StickerCard/StickerCard";
import MyButton from "../UI/Button/MyButton";
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
                <MyButton className={classes.btn}>Все аукционы</MyButton>
            </div>
        </section>
    );
};

export default OtherAuctions;