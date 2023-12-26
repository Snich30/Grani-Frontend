import styles from "./Awarding.module.scss";
import Header from "../../../components/header/Header";
import StepsMenu from "../../../components/StepsMenu/StepsMenu";
import BackBtnStep11 from "./btn-back/BackBtn";
import BtnDiskPhoto from "./btn-disk-photos/BtnDiskPhoto";
import BtnEditing from "./btn-editing/BtnEditing";
import BtnAutomaticFilling from "./btn-automatic-filling/BtnAutomaticFilling";
const Awarding = () => {
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <StepsMenu />
        <div className={styles.mainSection__Awarding}>
          <BackBtnStep11 />
          <h1 className={styles.mainSection__title}>Награждение</h1>
          <div className={`${styles.mainSection__btnPhoto} ${styles.btnPhoto}`}>
            <BtnDiskPhoto />
            <div className={styles.btnPhoto__Edit}>
              <img
                className={styles.btnPhoto__editIco}
                src="icons/icons-application/editIco.svg"
              />
              <a className={styles.btnPhoto__TextEdit} href="#">
                Редактировать
              </a>
            </div>
          </div>
          <h2 className={styles.mainSection__title2}>Шаблоны грамот</h2>
          <div className={`${styles.mainSection__Certificates} ${styles.Certificates}`}>
            <div className={styles.Certificates__img}>
                <img src="img/photo-step11/Certificates 1.png" alt="" />
            </div>
            <div className={styles.Certificates__img}>
                <img src="img/photo-step11/Certificates 2.png" alt="" />
            </div>
            <div className={styles.Certificates__img}>
                <img src="img/photo-step11/Certificates 3.png" alt="" />
            </div>
          </div>
          <div className={styles.mainSection__boxBtn}>
            <BtnEditing/>
            <BtnAutomaticFilling/>
          </div>
        </div>
      </section>
    </>
  );
};
export default Awarding;
