import React from 'react';
import styles from "../styles/Rent.module.css";
import ParagraphText from "../components/ParagraphText";
import bikes from "../images/bikes.png"

export default function Rent() {
    return ( 
    <div className={styles['container']}>
        <img src={bikes}></img>
        <div className={styles['header-text-container']}>
            <div className={styles['text-container']}>
                <ParagraphText 
                    p1 = 'Прокат велосипедов'
                    p2 = 'У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!'
                />
            </div>
        </div>
    </div>
    );
}
