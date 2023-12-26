import styles from "./BackBtn.module.scss"

const BackBtnStep12 = () =>{
    return(
        <button className={styles.btn} onClick={() => window.location.href = '/Teplate-bank'}>
            <img className={styles.btn__img} src="icons/Step3/Icons-Settelement/Arrow 1.svg" alt="" />
            <p className={styles.btn__text}>Шаг 12 - отчёт о проведении</p>
        </button>
    )
}
export default BackBtnStep12