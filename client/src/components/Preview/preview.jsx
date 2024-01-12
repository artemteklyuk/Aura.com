import React from 'react';
import classes from "./preview.module.css"
import stickersPng from '../../accets/stickers.png'

const Preview = () => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.group}>
                    <h1 className={classes.heading}>Площадка <br/> для реализации <br/> криптостикеров</h1>
                    <button className={classes.btn_buy}>
                        <p className={classes.text_buy}>Купить</p>
                    </button>
                    <button className={classes.btn_author}>
                        <p className={classes.text_author}>Стать автором</p>
                    </button>
                </div>
                <img className={classes.stickers} src={stickersPng} alt="Stikers"/>
            </div>
        </section>
    );
};

export default Preview;