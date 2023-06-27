import type { NextPage } from "next";
import styles from "../styles/Swap.module.css";
import { Container, Button, Spacer } from "@nextui-org/react";
import Image from "next/image";
import { BsTwitter, BsDiscord, BsMedium } from 'react-icons/bs';
import { SiOpensea } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from "next/link";
import Eth from "../public/Asset/eth.png";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai';

const Swap: NextPage = () => {
  return (
      <Container>
      <main className={styles.main}>
      
        <div className={styles.card}>
          <div className={styles.header}>
          <p style={{letterSpacing:'1.4px', 
          fontWeight:'500'
}}>
              Swap
              </p>
              <AiTwotoneSetting size={15} style={{marginRight:'20px', marginTop:'6px'}}/>
       
        
              </div>
         <div className={styles.cards}>
        
      <input  placeholder="0.00" className={styles.input}/>
      <div className={styles.label}>
        
         <Image 
         src={Eth} 
         alt='eth' 
         width={20} 
         style={{marginTop:'3px', marginRight:'4px'}}/> 
         <p 
         style={{
          fontWeight:'500', 
          letterSpacing:'0.5px', display:'flex'}}>
            ETH <RiArrowDropDownLine size={25}/>
            </p>
      </div>
      </div>
    
      <div className={styles.cards}>
      <input  placeholder="0.00" className={styles.input}/>
      <div className={styles.labels}>

    <p>Select Token <RiArrowDropDownLine size={25} style={{marginBottom:'-7px'}}/></p>
      </div>
      </div>
      <Spacer y={0.5} />
        <Button disabled size='lg' className={styles.button}>Select a token</Button>
        </div>
        <div className={styles.connect}>
        </div>
         <div style={{display:'flex', marginTop:'25px', marginBottom:'-50px'}}>
        
          <BsDiscord size='25' color='#fff' style={{margin:'25px'}}/>
          <Link href="https://twitter.com/arbinetwork" target="_blank">
            <BsTwitter size='25' color='#fff' style={{margin:'25px'}}/>
            </Link>
            <Link href="https://opensea.com" target="_blank">
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

export default Swap;
