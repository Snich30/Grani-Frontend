import Header from "../../../components/header/Header";
import styles from "./SportsCamps.module.scss";
import BtnCreatingAlbum from "./btn-creating-album/BtnCreatingAlbum";
import BtnSavePhoto from "./btn-save-photo/BtnSavePhoto";
import BtnShare from "./btn-share/BtnShare";

const SportsCamps = () => {
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
        <div className={`${styles.mainSection__Photo} ${styles.Photo}`}>
          <div className={styles.Photo__firstBoxImg}>
            <div className={styles.Photo__img}>
              <img src="img/photo-step12/page2/Camps 1.png" alt="" />
            </div>
            <div className={styles.Photo__img}>
              <img
                className={styles.Photo__Photo2}
                src="img/photo-step12/page2/Camps 2.png"
                alt=""
              />
            </div>
          </div>

          <div className={styles.Photo__secondBoxImg}>
            <div className={styles.Photo__img1}>
              <img
                className={styles.Photo__firstPhoto}
                src="img/photo-step12/page2/Camps 1.1.png"
                alt=""
              />
            </div>
            <div className={styles.Photo__imgs}>
              <img
                className={styles.Photo__BoxPhoto}
                src="img/photo-step12/page2/Camps 2.1.png"
                alt=""
              />
              <div className={styles.Photo__img2}>
                <img
                  className={styles.Photo__BoxPhoto}
                  src="img/photo-step12/page2/Camps 3.1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <BtnCreatingAlbum/>
        <div className={styles.mainSection__buttons}>
          <BtnSavePhoto/>
          <BtnShare/>
        </div>
      </section>
    </>
  );
};
export default SportsCamps;
