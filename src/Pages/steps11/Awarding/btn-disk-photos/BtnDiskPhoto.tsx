import styles from "./BtnDiskPhoto.module.scss"

const BtnDiskPhoto = () =>{
    return(
        <button className={styles.btnDiskPhoto} onClick={() => window.location.href = '/Sports-camps'}>
            ДИСК С ФОТОГРАФИЯМИ
        </button>
    )
}
export default BtnDiskPhoto