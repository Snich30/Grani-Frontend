import styles from "./Checklist.module.scss";
import CheckBox from "./CheckBox/CheckBox";
import JumpBottonStepTwo from "./JumbButton/JumpButton";
import Header from "../../../components/header/Header";
import StepsMenu from "../../../components/StepsMenu/StepsMenu";

const Checklist = () => {
  return (
    <>
      <Header />
      <div className={styles.mainSection}>
        <div className={styles.mainSection__leftWrapper}>
          <StepsMenu />
        </div>
        <div className={styles.mainSection__RightWrapper}>
          <section className={styles.venueReservationPage3}>
            <JumpBottonStepTwo />
            <div className={styles.venueReservationPage3__MainPart}>
              <div className={styles.MainPart__titlePart}>
                <h1 className={styles.titlePart__title}>
                  Чек-лист по бронированию площадки
                </h1>
              </div>
              <div className={styles.MainPart__buttonsUnderTheTitle}>
                <div className={styles.buttonsUnderTheTitle__LeftPart}>
                  <div className={`${styles.LeftPart__Edit} ${styles.Edit}`}>
                    <img
                      className={styles.Edit__editIco}
                      src="icons/icons-application/editIco.svg"
                    />
                    <a className={styles.Edit__TextEdit} href="#">
                      Редактировать
                    </a>
                  </div>
                  <div className={styles.LeftPart__review}>
                    <button className={styles.review__buttonReview}>
                      Рассказать о хорошей базе
                    </button>
                  </div>
                </div>
                <div className={styles.buttonsUnderTheTitle__rightPart}>
                  <button
                    className={styles.rightPart__buttonRight}
                    onClick={() => (window.location.href = "/Settlement")}
                  >
                    Расселение
                  </button>
                  <button className={styles.rightPart__buttonRight}>
                    База площадок
                  </button>
                </div>
              </div>
            </div>
            <CheckBox />
          </section>
        </div>
      </div>
    </>
  );
};
export default Checklist;
