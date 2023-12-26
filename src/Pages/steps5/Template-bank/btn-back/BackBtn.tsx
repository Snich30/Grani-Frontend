import styles from "./BackBtn.module.scss"

const BackBtnStep5 = () =>{
    return(
        <button className={styles.btn} onClick={() => window.location.href = '/Teplate-bank'}>
            <img className={styles.btn__img} src="icons/Step3/Icons-Settelement/Arrow 1.svg" alt="" />
            <p className={styles.btn__text}>Шаг 5 - Документация</p>
        </button>
    )
}
export default BackBtnStep5