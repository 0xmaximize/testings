import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
   
      <main className={styles.main}>
        <h1 className={styles.title}>
           Decentralized
        </h1>
        <p className={styles.description}>
         Build decentralization & Web3.0 Revolutionary with new experience
        </p>

        <div className={styles.connect}>
        
        </div>

        <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
