import styles from "../../styles/MainPage.module.css";

export default function BtnContact() {
    return (
        <div className={styles['contact-btn-container']}>
            <button className={styles['contact-btn']}>Связаться</button>
        </div>
    )
}