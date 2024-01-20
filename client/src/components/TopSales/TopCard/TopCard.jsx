import React from 'react';
import classes from './TopCard.module.css'
import testAvatar from '../../../accets/UserAvatars/2.jpg'
import testSticker from  '../../../accets/CardImages/2.png'
const TopCard = () => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={testSticker} alt="Sticker"/>
            </div>
            <div className={classes.infoContainer}>
                <div className={classes.userContainer}>
                    <img className={classes.avatar} src={testAvatar} alt="avatar"/>
                    <p className={classes.nickName}>ttgs</p>
                </div>
                <p className={classes.cardName}>Holofobia1</p>
                <p className={classes.price}>1.50 ETH ($5,365.62)</p>
            </div>
        </div>
    );
};

export default TopCard;