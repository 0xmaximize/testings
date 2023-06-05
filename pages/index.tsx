import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { RiArrowRightUpLine } from 'react-icons/ri'
import { Container } from '@nextui-org/react';


const Home: NextPage = () => {
  return (
    <Container>

      <main className={styles.main}>
        <div className={styles.title}>
        <h1>
          Scale Web3 & DEX<br />
           on Arbitrum.
        </h1>
        <p className={styles.description
        }>
         Build decentralization & Web3.0 Revolutionary with best services & experience.
        </p>
        </div>
      

        <div className={styles.grid}>
          <a href="" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Swap</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
              Swap token easily with ARBI. Gasless & Transparent transaction on Arbitrum.
            </p>
          </a>

          <a href="" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Earn</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
              Try earn with us for daily passive income e.g staking, pools, farming, and many more.
            </p>
          </a>

          <a href="" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Origin Passport</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
             Origin Passport, your ARBI identity early contributor to get exclusive benefit.
            </p>
          </a>
        </div>
      </main>
    </Container>
  );
};

export default Home;
