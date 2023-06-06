import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { RiArrowRightUpLine } from 'react-icons/ri'
import { Container } from '@nextui-org/react';
import { BsTwitter, BsDiscord, BsMedium, BsTelegram } from 'react-icons/bs';
import { SiOpensea } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';

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
          <a href="/" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Swap</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
              Swap token easily with ARBI. Gasless & Transparent transaction on Arbitrum.
            </p>
          </a>

          <a href="/" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Earn</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
              Try earn with us for daily passive income e.g staking, pools, farming, and many more.
            </p>
          </a>

          <a href="/Origin" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Origin Passport</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
             Origin Passport, your ARBI identity early contributor to get exclusive benefit.
            </p>
          </a>
        </div>
        <div style={{display:'flex', marginTop:'15px'}}>
          <a href="https://opensea.com" target="_blank">
            <SiOpensea size='25' color='#fff' style={{margin:'15px'}}/>
            </a>
          <BsDiscord size='25' color='#fff' style={{margin:'15px'}}/>
          <a href="https://twitter.com/arbinetwork" target="_blank">
            <BsTwitter size='25' color='#fff' style={{margin:'15px'}}/>
            </a>
            <a href="https://medium.com/@arbinetwork" target="_blank">
          <BsMedium size='25' color='#fff' style={{margin:'15px'}}/>
          </a>
          <a href="https://t.me/arbichannel" target="_blank">
          <FaTelegramPlane size='25' color='#fff' style={{margin:'15px'}}/>
          </a>
        </div>
      </main>
    </Container>
  );
};

export default Home;
