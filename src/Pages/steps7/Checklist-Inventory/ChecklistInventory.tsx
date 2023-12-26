import styles from "./ChecklistInventory.module.scss";
import BackBtnStep7 from "./btn-back/BackBtn";
import StepsMenu from "../../../components/StepsMenu/StepsMenu";
import Header from "../../../components/header/Header";
import BtnSportProducts from "./btn-bank-sport-products/BtnSportProducts";
const ChecklistInventory = () => {
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <StepsMenu />
        <div className={styles.mainSection__Checklist}>
          <BackBtnStep7/>
          <h1 className={styles.mainSection__title}>Чек-лист интвентаря</h1>
          <div className={`${styles.mainSection__btn} ${styles.btn}`}>
            <BtnSportProducts/>
            <div className={styles.btn__Edit}>
              <img
                className={styles.btn__editIco}
                src="icons/icons-application/editIco.svg"
              />
              <a className={styles.btn__TextEdit} href="#">
                Редактировать
              </a>
            </div>
          </div>
          <h2 className={styles.mainSection__title2}>Памятка для родителей</h2>
          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>полотенце</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>купальник</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>обувь</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>шапочку</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>предметы личной гигиены</p>
            </div>
          </div>


          <h2 className={styles.mainSection__title2}>Памятка для вас</h2>
          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>полотенце</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>купальник</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>обувь</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>шапочку</p>
            </div>
          </div>

          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <p className={styles.inputBox__title}>предметы личной гигиены</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ChecklistInventory;
