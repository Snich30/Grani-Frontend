import styles from "./BtnSection.module.scss"

const BtnSection = () =>{
    return(
        <section className={styles.mainSection}>
            <div className={styles.mainSection__serch}>
                <h1 className={styles.mainSection__title}>Площадки</h1>
                <button className={styles.mainSection__btnSearch}><img src="icons/icons-page-area/search.svg" alt="" />Поиск по площадкам</button>
            </div>
            <div className={styles.mainSection__btnsBox}>
                <div className={styles.mainSection__btns}>
                    <button className={`${styles.btns__button} button`}>Поиск на карте</button>
                </div>
                <div className={styles.mainSection__btns}>
                    <button className={`${styles.btns__button} ${styles.button} ${styles.button__Orange}`}>Эмоции</button>
                </div>
                <div className={styles.mainSection__btns}>
                    <button className={`${styles.btns__button} ${styles.button} ${styles.button__Purpel}`}>Дух</button>
                </div>
                <div className={styles.mainSection__btns}>
                    <button className={`${styles.btns__button} ${styles.button} ${styles.button__Yellow}`}>Разум</button>
                </div>
                <div className={styles.mainSection__btns}>
                    <button className={`${styles.btns__button} ${styles.button} ${styles.button__Blue}`}>Тело</button>
                </div>
                <div className={styles.mainSection__btns}>
                    <button className={`${styles.btns__button} ${styles.button} ${styles.button__Black}`}>Параллельное занятие</button>
                </div>
            </div>
        </section>
        
    )
}
export default BtnSection