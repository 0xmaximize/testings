import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { RiArrowRightUpLine } from 'react-icons/ri'
import { Container, Button, Spacer } from '@nextui-org/react';
import { BsTwitter, BsDiscord, BsMedium } from 'react-icons/bs';
import { SiOpensea } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container>

      <main className={styles.main}>
        <div className={styles.title}>
        <h1>
          Scale the Web3.0<br />
           on Arbitrum.
        </h1>
        <p className={styles.description
        }>
         Build decentralization & Web3.0 Revolutionary with best services & experience.
        </p>
        </div>
   

        <div className={styles.grid}>
          <Link href="/Swap" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2>Swap</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
              Swap token easily with ARBI. Gasless & Transparent transaction on Arbitrum.
            </p>
            <Spacer y={1}/>
            <Button size="sm">Swap</Button>
          </Link>

          <Link href="/airdrop" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Airdrop</h2>
            <RiArrowRightUpLine />
            </div>

            <p>
             ARBI Airdrop Program is landing. Claim your wARBI Airdrop now.
            </p>
            <Spacer y={1}/>
            <Button size="sm">Earn</Button>
          </Link>

          <Link href="/origin" className={styles.card}>
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2 >Origin Passport</h2>
            <RiArrowRightUpLine />
            </div>
            <p>
             The identity of ARBI users early contributor, can get more benefits.
            </p>
            <Spacer y={1}/>
            <Button size="sm">Origin Passport</Button>
          </Link>
        </div>
        <div style={{display:'flex', marginTop:'25px'}}>
        
        <Link href="https://discord.gg/eubQyHyu" target="_blank">
        <BsDiscord size='25' color='#fff' style={{margin:'25px'}}/>
        </Link>
          <Link href="https://twitter.com/arbinetwork" target="_blank">
            <BsTwitter size='25' color='#fff' style={{margin:'25px'}}/>
            </Link>
            <Link href="https://opensea.io/collection/arbi-origin-passport" target="_blank">
            <SiOpensea size='25' color='#fff' style={{margin:'25px'}}/>
            </Link>
            <Link href="https://medium.com/@arbinetwork" target="_blank">
          <BsMedium size='25' color='#fff' style={{margin:'25px'}}/>
          </Link>
          <Link href="https://t.me/arbichannel" target="_blank">
          <FaTelegramPlane size='25' color='#fff' style={{margin:'25px'}}/>
          </Link>
        </div>
     
      </main>
    </Container>
  );
};

export default Home;
