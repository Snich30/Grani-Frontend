import styles from "./CheckBox.module.scss";

const CheckBox = () => {
  return (
    <section className={styles.checkBoxSection}>
      <div className={styles.checkBoxSection__MainCheckBoxPart}>
        <div className={styles.MainCheckBoxPart__checkBox}>
          <div className={styles.checkBox__headerBox}>
            <h1 className={styles.headerBox__title}>Здоровье и безопасность</h1>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText}>
              Охраняется ли место проведения мероприятия
            </p>
          </div>
        </div>

        <div className={styles.MainCheckBoxPart__checkBox}>
          <div className={styles.checkBox__headerBox}>
            <h2 className={styles.headerBox__title2}>Кейтеринг</h2>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText2}>
              Каково минимальное количество для бронирования / какова <br />
              минимальная сумма оплаты Специальные предложения для заказы <br />{" "}
              группы
            </p>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText2}>
              Когда нужно предоставить окончательные пожелания в отношении{" "}
              <br /> еды на мероприятии?
            </p>
          </div>
        </div>

        <div className={styles.MainCheckBoxPart__checkBox}>
          <div className={styles.checkBox__headerBox}>
            <h3 className={styles.headerBox__title3}>
              Мультимедиа средства и WI FI
            </h3>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText3}>
              Включена ли стоимость пользования аудиовизуальными средствами в{" "}
              <br />
              арендную плату?
            </p>
          </div>

          <div className={styles.checkBox__checkBoxDescription}>
            <p className={styles.checkBoxDescription__p}>
              Если да то какими? Предоставляют ли они свой ноутбук, кликер,
              экран, проектор, <br /> микрофоны, гарнитуры, удлинители?
            </p>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText3}>
              Есть ли какое либо встроенное оборудование в комнатах, например,{" "}
              <br />
              подвесной проектор, интерактивные доски, экраны?
            </p>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText3}>
              Есть ли лекционная трибуна? Можно ли выбрать кафедру? Возможно{" "}
              <br /> ли их увидеть?
            </p>
          </div>
        </div>

        <div className={styles.MainCheckBoxPart__checkBox}>
          <div className={styles.checkBox__headerBox}>
            <h2 className={styles.headerBox__title2}>Экологичность события</h2>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText2}>
              Возможность использовать кулеры или графины, а не пластиковые{" "}
              <br />
              бутылки ( или замена их на стекло){" "}
            </p>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText2}>
              Возможность замены одноразовой посуды на фарфоровую?
            </p>
          </div>
        </div>

        <div className={styles.MainCheckBoxPart__checkBox}>
          <div className={styles.checkBox__headerBox}>
            <h3 className={styles.headerBox__title3}>Помещение</h3>
          </div>

          <div className={styles.checkBox__checkBoxComponent}>
            <input
              type="checkbox"
              className={styles.checkBoxComponent__inputCheck}
            />
            <p className={styles.checkBoxComponent__checkBoxText3}>
              Где будет располагаться регистрация?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CheckBox;
