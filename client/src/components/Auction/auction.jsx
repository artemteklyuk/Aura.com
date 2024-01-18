import React from 'react';
import classes from './auction.module.css'
import clock from '../../accets/clock.svg'
import witcher from '../../accets/Witcher.png'
import avatar from '../../accets/avatar.png'
import cn from "classnames"
import MyButton from "../UI/Button/MyButton";

const Auction = () => {
    return (
        <section className="container">
            <div className={classes.auction}>
                <div className={classes.heading}>
                    <h1 className={cn(classes.text_Big, classes.text_Other)}>Аукцион</h1>
                    <div className={classes.live}>
                        <p className={classes.heading_text}>Live auction</p>
                    </div>
                </div>
                <img src={witcher} alt="Sticker" className={classes.image}/>
                <div className={classes.auction_info}>
                    <div className={classes.user_container}>
                        <img src={avatar} alt="Avatar" className={classes.avatar}/>
                        <p className={cn(classes.text_Small, classes.text_Other)}>Serge_VM222</p>
                    </div>
                    <h1 className={cn(classes.text_Big, classes.text_Other, classes.sticker_name)}>Witcherrr_3 (xml_t5)</h1>
                    <div className={classes.price_time}>
                        <div className={classes.bet}>
                            <p className={cn(classes.text_Small, classes.text_Other)}>
                                Ставка:
                            </p>
                            <p className={cn(classes.text_Big, classes.text_Other)}>
                                0.10&nbsp;ETH
                            </p>
                            <p className={cn(classes.text_Small, classes.text_Other)}>
                                $351.24
                            </p>
                        </div>
                        <div className={classes.timer_container}>
                            <p className={cn(classes.text_Small, classes.text_Clock)}>Окончание через:</p>
                            <div className={classes.timer}>
                                <p className={cn(classes.text_Big, classes.text_Clock)}>01</p>
                                <p className={cn(classes.text_Big, classes.text_Clock)}>48</p>
                                <p className={cn(classes.text_Big, classes.text_Clock)}>47</p>
                                <p className={cn(classes.text_Small, classes.text_Clock)}>Час</p>
                                <p className={cn(classes.text_Small, classes.text_Clock)}>Мин</p>
                                <p className={cn(classes.text_Small, classes.text_Clock)}>Сек</p>
                            </div>
                            <img src={clock} alt="Clock" className={classes.svg_clock}/>
                        </div>
                    </div>
                    <MyButton className={classes.btn}>Сделать ставку</MyButton>
                </div>
            </div>
        </section>
    );
};

export default Auction;