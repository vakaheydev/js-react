import React from "react";
import HeaderText from "./HeaderText";
import BtnContact from "./navbar/ButtonContact";
import logo from "../images/logo.png";
import Navbar from "./navbar/Navbar";
import Dino from "../images/dino.png";
import styles from "../styles/MainPage.module.css";


export default function MainPage() {
    return (
        <div className={styles['container']}>
            <header>
                <div className={styles['image-container']}>
                    <img src={logo}></img>
                </div>
                <div className={styles['list-container']}>
                    <Navbar />
                </div>
                <BtnContact />
            </header>

            <div className={styles['intro-container']}>
                <div className={styles['text-container']}>
                    <HeaderText 
                        title="Веломастерская 'Велозар'"
                        description="Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды."
                    /> 
                </div>
                <img className={styles['dino-img']} src={Dino} alt="Bike"/>
            </div>
            
        </div>
    )
}