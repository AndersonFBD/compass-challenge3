import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./home.module.css";

const Home = () => {
  document.title = "Trisog - Home";

  return (
    <>
      <head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="./public/favicon.png"
        />
      </head>
      <Header />
      <main>
        <div className={styles.mainContainer}>
          <h1>página home</h1>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
