import styles from "./BtnSportProducts.module.scss"

const BtnSportProducts = () =>{
    return(
        <button className={styles.BtnSportProducts} onClick={() => window.location.href = '/'}>
            БАНК СПОРТ. ТОВАРОВ
        </button>
    )
}
export default BtnSportProducts