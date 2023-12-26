import styles from "./Settelement.module.scss";
import Header from "../../../components/header/Header";
import StepsMenu from "../../../components/StepsMenu/StepsMenu";
import BackBtn from "./btn-back/BackBtn";
import BtnAutomatic from "./btn-automatic/Btn-automatic";
import BtnPrint from "./btn-print/BtnPrint";

const Settlement: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.sectionAll}>
        <StepsMenu />
        <div className={styles.sectionAll__Settelement}>
          <BackBtn />
          <h1 className={styles.sectionAll__title}>Расселение</h1>
          <div className={styles.sectionAll__btns}>
            <BtnAutomatic />
            <BtnPrint />
          </div>
          <div className={styles.sectionAll__Edit}>
            <img
              className={styles.Edit__editIco}
              src="icons/icons-application/editIco.svg"
            />
            <a className={styles.Edit__TextEdit} href="#">
              Редактировать
            </a>
          </div>
          <div className={styles.sectionAll__cardsBox}>
            <div className={styles.sectionAll__fullCard}>
              <div className={`${styles.sectionAll__cardsItem} cardsItem`}>
                <div className={styles.cardsItem__FIO}>
                  <p className={styles.cardsItem__text}>Иванов Иван Иванович</p>
                </div>
                <div className={styles.cardsItem__FIO}>
                  <p className={styles.cardsItem__text}>Петров Петр Петрович</p>
                </div>
              </div>
              <h2 className={styles.fullCard__number}>
                НОМЕР 1 <br /> МАЛЬЧИКИ
              </h2>
            </div>
            <div className={styles.sectionAll__fullCard}>
              <div
                className={`${styles.sectionAll__cardsItem} ${styles.cardsItem} ${styles.cardsItem__girls}`}
              >
                <div className={styles.cardsItem__FIO}>
                  <p className={styles.cardsItem__text}>
                    Петрова Ксения Петровна
                  </p>
                </div>
                <div className={styles.cardsItem__FIO}>
                  <p className={styles.cardsItem__text}>
                    Иванова Эмилия Сергеевна
                  </p>
                </div>
              </div>
              <h2 className={styles.fullCard__number}>
                НОМЕР 2 <br /> ДЕВОЧКИ
              </h2>
            </div>
            <div className={styles.sectionAll__fullCard}>
              <button className={styles.sectionAll__plus}>
                <div className={styles.plus__vertical}></div>
                <div className={styles.plus__horizontal}></div>
              </button>
              <p className={styles.fullCardAdd__addCard}>Добавить комнату</p>
            </div>
          </div>
          <div className={styles.sectionAll__CardParticipants}>
            <div className={styles.sectionAll__cardsItemPeopls}>
              <h2 className={styles.cardsItemPeopls__title}>Участники</h2>
              <div className={styles.cardsItemPeopls__FioPeopls}>
                <p className={styles.cardsItemPeopls__text}>
                  Иванов Иван Иванович
                </p>
              </div>
              <div className={styles.cardsItemPeopls__FioPeopls}>
                <p className={styles.cardsItemPeopls__text}>
                  Петров Петр Петрович
                </p>
              </div>
              <div className={styles.cardsItemPeopls__FioPeopls}>
                <p className={styles.cardsItemPeopls__text}>
                  Петрова Ксения Петровна
                </p>
              </div>
              <div className={styles.cardsItemPeopls__FioPeopls}>
                <p className={styles.cardsItemPeopls__text}>
                  Иванова Эмилия Сергеевна
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Settlement;
