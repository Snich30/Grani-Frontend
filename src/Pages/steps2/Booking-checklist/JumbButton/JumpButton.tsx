import styles from "./JumpButton.module.scss";

const JumpBottonStepTwo = () => {
  return (
    <button
      className={styles.btn}
      onClick={() => (window.location.href = "/Cards-area")}
    >
      <img
        className={styles.btn__img}
        src="icons/Step3/Icons-Settelement/Arrow 1.svg"
        alt=""
      />
      <p className={styles.btn__text}>Шаг 2 - Бронирование площадки</p>
    </button>
  );
};
export default JumpBottonStepTwo;
