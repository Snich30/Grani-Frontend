import style from "./applicationForm3.module.scss";
import InputNumber from "../../../../components/applicationOfPeople/InputNamber/InputNumber";
import React, { useState } from "react";

const ApplicationForm3: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  return (
    <section className={style.applicationForm3}>
      <div className={style.applicationForm3__mainDiv}>
        <div className={style.mainDiv__titleThisDiv}>
          <h2 className={style.titleThisDiv__titl}>
            Оставьте заявку на участие в поездке
          </h2>
        </div>

        <div className={style.mainDiv__compForm}>
          <div className={style.compForm__user}>
            <p className={style.user__lab}>Фамилия Имя</p>
            <input
              className={style.user__input}
              placeholder="Иванов Иван"
              type="text"
            />
          </div>

          <div className={style.compForm__user}>
            <p className={style.user__lab}>Возраст</p>
            <select className={style.user__input} />
          </div>

          <div className={style.compForm__user}>
            <p className={style.user__lab}>Вес</p>
            {/*<input className={style.user__input} placeholder="777777" type="number" />*/}
            <InputNumber value={number} onChange={setNumber} />
          </div>

          <div className={style.compForm__user}>
            <p className={style.user__lab}>Аллергия</p>
            <input
              className={style.user__input}
              placeholder="Есть/Нет"
              type="text"
            />
          </div>

          <div className={style.compForm__user}>
            <p className={style.user__lab}>Роль</p>
            <select className={style.user__input} placeholder="Список" />
          </div>
        </div>
      </div>
      <div className={style.applicationForm3__divButton}>
        <button className={style.divButton__b}>ДОБАВИТЬ УЧАСТНИКА</button>
        <button className={style.divButton__b}>ОТПРАВИТЬ ЗАЯВКУ</button>
      </div>
    </section>
  );
};
export default ApplicationForm3;
