import styles from "./BackBtn.module.scss"

const BackBtn = () =>{
    return(
        <button className={styles.btn} onClick={() => window.location.href = '/'}>
            <img className={styles.btn__img} src="icons/Step3/Icons-Settelement/Arrow 1.svg" alt="" />
            <p className={styles.btn__text}>Шаг 8 - Турнирная сетка</p>
        </button>
    )
}
export default BackBtn