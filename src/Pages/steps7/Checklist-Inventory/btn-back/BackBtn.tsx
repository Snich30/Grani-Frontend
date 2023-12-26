import styles from "./BackBtn.module.scss"

const BackBtnStep7 = () =>{
    return(
        <button className={styles.btn} onClick={() => window.location.href = '/'}>
            <img className={styles.btn__img} src="icons/Step3/Icons-Settelement/Arrow 1.svg" alt="" />
            <p className={styles.btn__text}>Шаг 7 - инвентарь</p>
        </button>
    )
}
export default BackBtnStep7