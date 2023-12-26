import styles from './header.module.scss'
import BtnHeader from './BtnRegistration'
import BtnEnter from './BtnEnter'
import MenuBurg from './burgerMenu/MenuBurg'


const Header = () =>{
    return( 
        <section className={styles.mainSection}>
            <div className={styles.mainSection__iconBox}>
                <div className={`${styles.mainSection__rectIcons} rectIcons`}>
                    <img className={styles.rectIcons__icon} src="icons/icons-header/phone.svg" alt="phone-icon"/>
                </div>
                <div className={`${styles.mainSection__rectIcons} ${styles.rectIcons} ${styles.rectIcons__Orange}`}>
                    <img className={styles.rectIcons__icon} src="icons/icons-header/mas.svg" alt="phone-icon"/>
                </div>
                <div className={`${styles.mainSection__rectIcons} ${styles.rectIcons} ${styles.rectIcons__Yellow}`}>
                    <img className={styles.rectIcons__icon} src="icons/icons-header/tg.svg" alt="mas-icon"/>
                </div>
            </div>
            <div className={styles.mainSection__city}>
                <img className={styles.mainSection__img} src="icons/icons-header/dot.svg" alt="dot-icon" />
                <h1 className={`${styles.mainSection__titleCity} titleCity`}> МОСКВА
                    <hr className={styles.titleCity__hr}/>
                </h1>
            </div>
            
            <div className={styles.mainSection__mainIcon}>
                <img src="icons/icons-header/main-icon1 1.svg" alt="" />
            </div>

            <BtnHeader />
            <BtnEnter />
            
            <img className={styles.mainSection__ShopIcon} src="icons/icons-header/shopping-cartHeader.svg" alt="" />
            <img className={styles.mainSection__SearchIcon} src="icons/icons-header/searchHeader.svg" alt="" />
            <MenuBurg/>
        </section>
    );
}
export default Header