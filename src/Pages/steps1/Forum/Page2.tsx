import Header from "../../../components/header/Header";
import styles from "./Page2.module.scss";

const Page2 = () => {
  return (
    <>
      <Header />
      <section className={styles.pageSection}>
        <div className={styles.pageSection__mainImg}></div>
      </section>

      <section className={styles.mainSection}>
        <h1 className={styles.mainSection__title}>
          Спортивные сборы по футболу
        </h1>
        <p className={styles.mainSection__textDate}>С 10 по 13 сентября</p>
        <button
          className={styles.mainSection__btnСost}
          onClick={() => (window.location.href = "/Forum2")}
        >
          Примерная стоимость: <br />
          15.000 рублей
        </button>
        <h2 className={styles.mainSection__titleVenue}>
          Примерное место проведения
        </h2>
        <img
          className={styles.mainSection__imgYandex}
          src="img/photo-page2/imageYandex.png"
          alt=""
        />
        <h2 className={styles.mainSection__titlePhoto}>
          Фото с прошлых выездов
        </h2>
        <div className={styles.mainSection__photoFoot}>
          <div className={styles.photoFoot__photo}>
            <img src="img/photo-page2/imageFoot1.png" alt="" />
          </div>
          <div className={styles.photoFoot__photo}>
            <img src="img/photo-page2/imageFoot2.png" alt="" />
          </div>
          <div className={styles.photoFoot__photo}>
            <img src="img/photo-page2/imageFoot3.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Page2;
