import React from "react";
import styles from './Card.module.css';

function Card(props) {
    return(
        <div className={styles["card-frame"]}>
            <h2 className={styles.placeHeader}>{props.placeName}</h2>
            <img src={props.placeImageSrc} alt={props.placeImgAlt}  className={styles["card-img"]}></img>
            <div className={styles.overlay}>
                <p className={styles.text}>{props.placeText}</p>
            </div>
        </div>
    );
}

export default Card;
// "https://picsum.photos/300/200"