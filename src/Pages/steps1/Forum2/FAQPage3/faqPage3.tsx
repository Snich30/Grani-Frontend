import style from "./faqPage3.module.scss";
import React, { useState } from "react";

const FaqPage3: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTextVisible1, setIsTextVisible1] = useState(false);
  const [isTextVisible2, setIsTextVisible2] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };
  const handleButtonClick1 = () => {
    setIsTextVisible1(!isTextVisible1);
  };
  const handleButtonClick2 = () => {
    setIsTextVisible2(!isTextVisible2);
  };

  return (
    <section className={style.FaqPage3}>
      <div className={style.FaqPage3__titleFaq}>
        <h2 className={style.titleFaq__t}>Часто задаваемые вопросы</h2>
      </div>
      <div className={style.FaqPage3__buttonContainer}>
        <div className={style.buttonContainer__divB}>
          <h3 className={style.divB__tit}>
            У моего ребенка аллергия будет ли это проблемой на выезде?
          </h3>
          <button className={style.divB__butt} onClick={handleButtonClick}>
            <p className={style.divB__pp}>Открыть ответ</p>
          </button>
          {isTextVisible && (
            <p className={style.divB__txt}>
              Нет! Любые особенности питания обсуждаются с местом
              <br />
              проведения и питания, а после я лично слежу за питанием детей.{" "}
            </p>
          )}
        </div>

        <div className={style.buttonContainer__divB}>
          <h3 className={style.divB__tit}>
            Можно ли разделить оплату за мероприятие на несколько частей?
          </h3>
          <button className={style.divB__butt} onClick={handleButtonClick1}>
            <p className={style.divB__pp}>Открыть ответ</p>
          </button>
          {isTextVisible1 && <p className={style.divB__txt}>BIMBIMBAMBAM</p>}
        </div>

        <div className={style.buttonContainer__divB}>
          <h3 className={style.divB__tit}>
            Чем будут заняты дети в течении дня?
          </h3>
          <button className={style.divB__butt} onClick={handleButtonClick2}>
            <p className={style.divB__pp}>Открыть ответ</p>
          </button>
          {isTextVisible2 && <p className={style.divB__txt}>BIMBIMBAMBAM</p>}
        </div>
      </div>
    </section>
  );
};

export default FaqPage3;
