import styles from "./BtnTemplate.module.scss"

const BtnTemplate = () =>{
    return(
        <button className={styles.btnTemplate} onClick={() => window.location.href = '/Template-bank'}>
            Банк шаблонов
        </button>
    )
}
export default BtnTemplate