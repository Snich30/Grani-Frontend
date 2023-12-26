import StepsMenu from "../../../components/StepsMenu/StepsMenu";
import Header from "../../../components/header/Header";
import styles from "./CompletionCheckOut.module.scss";
import BackBtnStep12 from "./btn-back/BackBtn";
import BtnDiskPhoto from "./btn-disk-photos/BtnDiskPhoto";

const CompletionCheckOut = () => {
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <StepsMenu />
        <div className={styles.mainSection__Checklist}>
          <BackBtnStep12 />
          <h1 className={styles.mainSection__title}>Завершение выезда</h1>
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
          <h2 className={styles.mainSection__title2}>
            Шаблоны отчётных презентаций
          </h2>
          <div
            className={`${styles.mainSection__templates} ${styles.templates}`}>
            <div className={styles.templates__img}>
              <img src="img/photo-step12/page1/template 1.png" alt="" />
            </div>
            <div className={styles.templates__img}>
              <img src="img/photo-step12/page1/template 2.png" alt="" />
            </div>
            <div className={styles.templates__img}>
              <img src="img/photo-step12/page1/template 3.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CompletionCheckOut;
