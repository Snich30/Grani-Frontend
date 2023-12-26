import styles from "./Cards-area.module.scss";
import Header from "../../../components/header/Header";
import BtnSection from "./btnSection/BtnSection";
import Rating from "./rating-of-stars/RatingStars";

const CardsArea = () => {
  return (
    <>
      <Header />
      <section className={styles.sectionBtn}>
        <BtnSection />
      </section>
      <section className={styles.sectionCardsArea}>
        <div className={styles.sectionCardsArea__cardBox}>
          <div className={styles.sectionCardsArea__cardsItem}>
            <img
              className={styles.cardsItem__img}
              src="img/photo-page-area/Area1.png"
              alt=""
            />
            <div className={styles.cardsItem__infoSection}>
              <div className={styles.cardsItem__iconLove}>
                <img
                  className={styles.iconLove__icon}
                  src="icons/icons-page-area/icon-heart.svg"
                  alt=""
                />
              </div>
              <h2 className={styles.cardsItem__title}>
                Спортивный комплекс “Радуга”
              </h2>
              <div className={styles.cardsItem__tegsSection}>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Тело</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Футбол</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Уборка</p>
                </div>
              </div>
              <div className={styles.cardsItem__moneyReview}>
                <p className={styles.moneyReview__textMoney}>
                  от 2500 за услугу
                </p>
                <p className={styles.moneyReview__textReview}>Оценка</p>
              </div>
              <div className={styles.cardsItem__star}>
                <img
                  className={styles.star__iconMetro}
                  src="icons/icons-page-area/Metro.svg"
                  alt=""
                />
                <p className={styles.star__text}>Солнцево</p>
                <Rating />
              </div>
              <a className={styles.cardsItem__moreDetailed} href="">
                Подробнее
              </a>
            </div>
          </div>
          <div className={styles.sectionCardsArea__cardsItem}>
            <img
              className={styles.cardsItem__img}
              src="img/photo-page-area/Area1.png"
              alt=""
            />
            <div className={styles.cardsItem__infoSection}>
              <div className={styles.cardsItem__iconLove}>
                <img
                  className={styles.iconLove__icon}
                  src="icons/icons-page-area/icon-heart.svg"
                  alt=""
                />
              </div>
              <h2 className={styles.cardsItem__title}>
                Спортивный комплекс “Радуга”
              </h2>
              <div className={styles.cardsItem__tegsSection}>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Тело</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Футбол</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Уборка</p>
                </div>
              </div>
              <div className={styles.cardsItem__moneyReview}>
                <p className={styles.moneyReview__textMoney}>
                  от 2500 за услугу
                </p>
                <p className={styles.moneyReview__textReview}>Оценка</p>
              </div>
              <div className={styles.cardsItem__star}>
                <img
                  className={styles.star__iconMetro}
                  src="icons/icons-page-area/Metro.svg"
                  alt=""
                />
                <p className={styles.star__text}>Солнцево</p>
                <Rating />
              </div>
              <a className={styles.cardsItem__moreDetailed} href="">
                Подробнее
              </a>
            </div>
          </div>
          <div className={styles.sectionCardsArea__cardsItem}>
            <img
              className={styles.cardsItem__img}
              src="img/photo-page-area/Area1.png"
              alt=""
            />
            <div className={styles.cardsItem__infoSection}>
              <div className={styles.cardsItem__iconLove}>
                <img
                  className={styles.iconLove__icon}
                  src="icons/icons-page-area/icon-heart.svg"
                  alt=""
                />
              </div>
              <h2 className={styles.cardsItem__title}>
                Спортивный комплекс “Радуга”
              </h2>
              <div className={styles.cardsItem__tegsSection}>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Тело</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Футбол</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Уборка</p>
                </div>
              </div>
              <div className={styles.cardsItem__moneyReview}>
                <p className={styles.moneyReview__textMoney}>
                  от 2500 за услугу
                </p>
                <p className={styles.moneyReview__textReview}>Оценка</p>
              </div>
              <div className={styles.cardsItem__star}>
                <img
                  className={styles.star__iconMetro}
                  src="icons/icons-page-area/Metro.svg"
                  alt=""
                />
                <p className={styles.star__text}>Солнцево</p>
                <Rating />
              </div>
              <a className={styles.cardsItem__moreDetailed} href="">
                Подробнее
              </a>
            </div>
          </div>
          <div className={styles.sectionCardsArea__cardsItem}>
            <img
              className={styles.cardsItem__img}
              src="img/photo-page-area/Area1.png"
              alt=""
            />
            <div className={styles.cardsItem__infoSection}>
              <div className={styles.cardsItem__iconLove}>
                <img
                  className={styles.iconLove__icon}
                  src="icons/icons-page-area/icon-heart.svg"
                  alt=""
                />
              </div>
              <h2 className={styles.cardsItem__title}>
                Спортивный комплекс “Радуга”
              </h2>
              <div className={styles.cardsItem__tegsSection}>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Тело</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Футбол</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Уборка</p>
                </div>
              </div>
              <div className={styles.cardsItem__moneyReview}>
                <p className={styles.moneyReview__textMoney}>
                  от 2500 за услугу
                </p>
                <p className={styles.moneyReview__textReview}>Оценка</p>
              </div>
              <div className={styles.cardsItem__star}>
                <img
                  className={styles.star__iconMetro}
                  src="icons/icons-page-area/Metro.svg"
                  alt=""
                />
                <p className={styles.star__text}>Солнцево</p>
                <Rating />
              </div>
              <a className={styles.cardsItem__moreDetailed} href="">
                Подробнее
              </a>
            </div>
          </div>
          <div className={styles.sectionCardsArea__cardsItem}>
            <img
              className={styles.cardsItem__img}
              src="img/photo-page-area/Area1.png"
              alt=""
            />
            <div className={styles.cardsItem__infoSection}>
              <div className={styles.cardsItem__iconLove}>
                <img
                  className={styles.iconLove__icon}
                  src="icons/icons-page-area/icon-heart.svg"
                  alt=""
                />
              </div>
              <h2 className={styles.cardsItem__title}>
                Спортивный комплекс “Радуга”
              </h2>
              <div className={styles.cardsItem__tegsSection}>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Тело</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Футбол</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Уборка</p>
                </div>
              </div>
              <div className={styles.cardsItem__moneyReview}>
                <p className={styles.moneyReview__textMoney}>
                  от 2500 за услугу
                </p>
                <p className={styles.moneyReview__textReview}>Оценка</p>
              </div>
              <div className={styles.cardsItem__star}>
                <img
                  className={styles.star__iconMetro}
                  src="icons/icons-page-area/Metro.svg"
                  alt=""
                />
                <p className={styles.star__text}>Солнцево</p>
                <Rating />
              </div>
              <a className={styles.cardsItem__moreDetailed} href="">
                Подробнее
              </a>
            </div>
          </div>
          <div className={styles.sectionCardsArea__cardsItem}>
            <img
              className={styles.cardsItem__img}
              src="img/photo-page-area/Area1.png"
              alt=""
            />
            <div className={styles.cardsItem__infoSection}>
              <div className={styles.cardsItem__iconLove}>
                <img
                  className={styles.iconLove__icon}
                  src="icons/icons-page-area/icon-heart.svg"
                  alt=""
                />
              </div>
              <h2 className={styles.cardsItem__title}>
                Спортивный комплекс “Радуга”
              </h2>
              <div className={styles.cardsItem__tegsSection}>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Тело</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Футбол</p>
                </div>
                <div className={styles.cardsItem__tegs}>
                  <p className={styles.tegs__text}>Уборка</p>
                </div>
              </div>
              <div className={styles.cardsItem__moneyReview}>
                <p className={styles.moneyReview__textMoney}>
                  от 2500 за услугу
                </p>
                <p className={styles.moneyReview__textReview}>Оценка</p>
              </div>
              <div className={styles.cardsItem__star}>
                <img
                  className={styles.star__iconMetro}
                  src="icons/icons-page-area/Metro.svg"
                  alt=""
                />
                <p className={styles.star__text}>Солнцево</p>
                <Rating />
              </div>
              <a className={styles.cardsItem__moreDetailed} href="">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CardsArea;
