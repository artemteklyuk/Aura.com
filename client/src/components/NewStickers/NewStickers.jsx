import React from 'react';
import classes from './NewStickers.module.css'
import testSticker from '../../accets/StickerPack/1.png'
import cn from 'classnames'
const NewStickers = () => {
    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.content}>
                    <h1 className={classes.header}>Новые стикеры</h1>
                    <div className={classes.sticker}>
                        <img src={testSticker} alt="Stickers" className={classes.stickerPack}/>
                    </div>
                    <div className={classes.nav}>
                        <div className={cn(classes.btn, classes.btnIsSelected)}>1</div>
                        <div className={classes.btn}>2</div>
                        <div className={classes.btn}>3</div>
                        <div className={classes.btn}>4</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewStickers;