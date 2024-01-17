import React from 'react';
import classes from './StickerCard.module.css'
import testImage from '../../../accets/CardImages/1.png'
import testAvatar from '../../../accets/UserAvatars/1.jpg'
const StickerCard = (props) => {
    return (
        <div className={classes.card_container}>
            <div className={classes.img_container}>
                <img src={testImage} alt="cardImage" className={classes.image}/>
            </div>
            <div className={classes.desc_container}>
                <div className={classes.user_container}>
                    <img src={testAvatar} alt="Avatar" className={classes.avatar}/>
                    <p className={classes.nickName}>
                        Serge_VM222
                    </p>
                </div>
                <p className={classes.sticker_name}>
                    Witcherrr_3 (xml_t5)
                </p>
                <p className={classes.price}>
                    0.10&nbsp;ETH
                </p>
                <div className={classes.timer}>
                    <p className={classes.number}>01</p>
                    <p className={classes.string}>час</p>
                    <p className={classes.number}>48</p>
                    <p className={classes.string}>мин</p>
                    <p className={classes.number}>47</p>
                    <p className={classes.string}>сек</p>
                </div>
            </div>
        </div>
    );
};

export default StickerCard;