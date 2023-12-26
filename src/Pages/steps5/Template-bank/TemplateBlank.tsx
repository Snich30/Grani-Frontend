import StepsMenu from "../../../components/StepsMenu/StepsMenu";
import Header from "../../../components/header/Header";
import styles from "./TemplateBlank.module.scss";
import BackBtnStep5 from "./btn-back/BackBtn";

const TemplateBlank = () => {
  return (
    <>
      <Header />
      <section className={styles.sectionMain}>
        <StepsMenu />
        <div className={`${styles.sectionMain__Template} ${styles.Template}`}>
          <BackBtnStep5 />
          <h1 className={styles.Template__title}>Банк шаблонов</h1>
          <div className={`${styles.Template__tableBox} ${styles.tableBox}`}>
            <p className={styles.tableBox__title}>Ведомость на выдачу призов</p>
            <table className={styles.tableBox__tableContainer}>
              <tr className={styles.tableBox__tr}>
                <th className={styles.tableBox__th}>№ п/п</th>
                <th className={styles.tableBox__th}>
                  Наименование <br /> приза
                </th>
                <th className={styles.tableBox__th}>Количество</th>
                <th className={styles.tableBox__th}>Стоимость</th>
                <th className={styles.tableBox__th}>Получатель</th>
                <th className={styles.tableBox__th}>Распись</th>
              </tr>
              <tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>2</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>3</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>4</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              
            </table>
            <p className={styles.tableBox__text}>Выдачу призов произвел: /подпись/ ______________ /фамилия/ ______________</p>
          </div>
          <div className={`${styles.Template__editingDowland} ${styles.editingDowland}`}>
            <img className={styles.editingDowland__img} src="icons/icons-application/editIco.svg" alt="" /><a href="#" className={styles.editingDowland__editing}>Редактировать</a>
            <a href="" className={styles.editingDowland__download}>Скавачть в формате .word</a>
          </div>


          <div className={`${styles.Template__tableBox} ${styles.tableBox}`}>
            <p className={styles.tableBox__title1}>Образец заявки на участие в проведении спортивного мероприятия <br />
                Заявка</p>
            <p className={styles.tableBox__subtitle}>на участие в соревнованиях 10 августа 2019 г. на личное первенство <br />
                по виду спорта_____________________________________</p>
            <table className={styles.tableBox__tableContainer}>
              <tr className={styles.tableBox__tr1}>
                <th className={styles.tableBox__th1}>ФИО <br /> (полностью)</th>
                <th className={styles.tableBox__th1}>
                  Дата и год <br /> рождения
                </th>
                <th className={styles.tableBox__th1}>Спортивный <br /> разряд</th>
                <th className={styles.tableBox__th1}>Виза врача <br />(личная подпись)</th>
                <th className={styles.tableBox__th1}>Результат</th>
              </tr>
              <tr>
                <td className={styles.tableBox__td1}></td><td></td><td></td><td></td><td></td>
              </tr>
            </table>
          </div>
          <div className={`${styles.Template__editingDowland} ${styles.editingDowland}`}>
            <img className={styles.editingDowland__img} src="icons/icons-application/editIco.svg" alt="" /><a href="#" className={styles.editingDowland__editing}>Редактировать</a>
            <a href="" className={styles.editingDowland__download}>Скавачть в формате .word</a>
          </div>

          <div className={`${styles.Template__tableBox} ${styles.tableBox}`}>
            <p className={styles.tableBox__title}>Состав и работа судей</p>
            <table className={styles.tableBox__tableContainer}>
              <tr className={styles.tableBox__tr}>
                <th className={styles.tableBox__th}>№ п/п</th>
                <th className={styles.tableBox__th}>
                  ФИО
                </th>
                <th className={styles.tableBox__th}>Судейская <br />категория</th>
                <th className={styles.tableBox__th}>Организация, <br />город</th>
                <th className={styles.tableBox__th}>Выполненная <br />работа</th>
                <th className={styles.tableBox__th}>Оценка <br />работы</th>
              </tr>
              <tr>
                <td>1</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>2</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>3</td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
              </tr>
              
            </table>
            <p className={styles.tableBox__text}>Гл. судья соревнований: ______________/подпись/ категория ______________ </p>
            <p className={styles.tableBox__text}>Дата «10» августа 2019 г.  </p>
            <p className={styles.tableBox__text}>Местоположение: р.п. Дальнее - Константиново </p>

          </div>
          <div className={`${styles.Template__editingDowland} ${styles.editingDowland}`}>
            <img className={styles.editingDowland__img} src="icons/icons-application/editIco.svg" alt="" /><a href="#" className={styles.editingDowland__editing}>Редактировать</a>
            <a href="" className={styles.editingDowland__download}>Скавачть в формате .word</a>
          </div>


        </div>
      </section>
    </>
  );
};
export default TemplateBlank;
