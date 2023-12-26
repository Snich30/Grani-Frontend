import StepsMenu from "../../../components/StepsMenu/StepsMenu";
import Header from "../../../components/header/Header";
import styles from "./ChecklestDoc.module.scss";
import BackBtnStep5 from "./btn-back/BackBtn";
import BtnTemplate from "./btn-template-bank/BtnTemplate";

const ChecklistDoc = () => {
  return (
    <>
      <Header />
      <section className={styles.mainSection}>
        <StepsMenu />
        <div className={styles.mainSection__Checklist}>
          <BackBtnStep5 />
          <h1 className={styles.mainSection__title}>Чек-лист документов</h1>
          <div className={`${styles.mainSection__btn} ${styles.btn}`}>
            <BtnTemplate />
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
          <h2 className={styles.mainSection__title2}>Самое важное</h2>
          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <div className={`${styles.inputBox__txt} ${styles.txt}`}>
                <h3 className={styles.txt__title}>
                  Авиа-билет (копия) + регистрация на рейс (за сутки до рейса)
                </h3>
                <p className={styles.txt__text}>
                  Регистрируемся на рейс и отправляем “+” о пройденной
                  регистрации в чат. В аэропорту <br /> распечатываем посадочный
                  талон и сдаем багаж. Все инструкции даст руководитель.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <div className={`${styles.inputBox__txt} ${styles.txt}`}>
                <h3 className={styles.txt__title}>Паспорт</h3>
                <p className={styles.txt__text}>
                  Копию паспорта переслать руководителю группы до 25.02
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <div className={`${styles.inputBox__txt} ${styles.txt}`}>
                <h3 className={styles.txt__title}>
                  Страховое свидетельство (копия)
                </h3>
                <p className={styles.txt__text}>
                  Можно переслать на почту руководителя группы до 25.02
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <div className={`${styles.inputBox__txt} ${styles.txt}`}>
                <h3 className={styles.txt__title}>
                  Страховка на период поездки
                </h3>
                <p className={styles.txt__text}>
                  Страховку оформляем на весь период поездки или более
                  длительный срок (если предполагаются <br />  другие поездки).
                  Возможный алгоритм : - сбербанк онлайн - страхование - поездки
                  по России - <br />  базовое покрытие - рассчитать стоимость - РФ и
                  страны СНГ - сроки поездки с 3 по 11.03 - <br />  расчет стоимости -
                  306 руб. Копию страховки высылаем на почту руководителя
                  группы.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.mainSection__inputBox} ${styles.inputBox}`}>
            <div className={styles.inputBox__item}>
              <input type="checkbox" />
              <div className={`${styles.inputBox__txt} ${styles.txt}`}>
                <h3 className={styles.txt__title}>
                  Заявление на сопровождение ребёнка
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ChecklistDoc;
