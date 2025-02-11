import React from 'react';
import styles from '../styles/Services.module.css';
import ParagraphText from "../components/ParagraphText";

export default function Services() {
    return (
        <div className={styles['container']}>
            <div className={styles['text-container']}>
                <ParagraphText 
                    p1 = 'Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.'
                    p2 = 'А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.'
                />
            </div>
            <div className={styles['blocks-container']}>
                <div className={`${styles['block']} ${styles['block1']}`} id='1'>
                    <div className={styles['line']}></div>
                    <h1>Годовое ТО</h1>
                </div>
                <div className={`${styles['block']} ${styles['block2']}`} id='2'>
                    <div className={styles['line']}></div>
                    <h1>Выравнивание колес</h1>
                </div>
                <div className={`${styles['block']} ${styles['block3']}`} id='3'>
                    <div className={styles['line']}></div>
                    <h1>Настройка переключателей</h1>
                </div>
            </div>
        </div>
    );


}
