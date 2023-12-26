import Application from "../../../components/applicationOfPeople/Application";
import Header from "../../../components/header/Header";
import StepsMenu from "../../../components/StepsMenu/StepsMenu";
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <>
      <Header />
      <section className={styles.MainWindow}>
        <div className={styles.MainWindow__leftWrapper}>
          <StepsMenu />
        </div>
        <div className={styles.MainWindow__rigthWrapper}>
          <Application/>
        </div>
      </section>
    </>
  );
};
export default Home;
