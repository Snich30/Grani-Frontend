import styles from './StepsFooter.module.scss'

const StepsFooter = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__monual}>
                <img className={styles.footer__img} src="icons/icons-steps-menu/icons-steps-footer/icon-monual.svg" alt="" />
                <p className={styles.footer__text}>инструкции</p>
            </div>
            <hr className={styles.footer__hr}/>
            <div className={styles.footer__icons}>
                <div className={styles.icons__item}><a href=""><img src="icons/icons-steps-menu/icons-steps-footer/phone.svg" alt="" /></a></div>
                <div className={styles.icons__item}><a href=""><img src="icons/icons-steps-menu/icons-steps-footer/mail.svg" alt="" /></a></div>
                <div className={styles.icons__item}><a href=""><img src="icons/icons-steps-menu/icons-steps-footer/airplane.svg" alt="" /></a></div>
                <div className={styles.icons__item}><a href=""><img src="icons/icons-steps-menu/icons-steps-footer/pencil-alt.svg" alt="" /></a></div>
            </div>
            <h3 className={styles.footer__endText}>© 2022-2023 "МОИГРАНИ"</h3>
        </footer>
    )
}
export default StepsFooter