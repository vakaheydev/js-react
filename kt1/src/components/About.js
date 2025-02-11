import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderText from './HeaderText';
import bike from '../images/bike.png';
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div className={styles['about-container']}>
            <div className={styles['header-text-container']}>
                <div className={styles['text-container']}>
                    <HeaderText
                        title = "Что мы предлагаем"
                        description= "В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой."
                    />
                </div>
            </div>
            <img src={bike}></img>
        </div>
    );
}