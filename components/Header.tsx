import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from '../public/Asset/arbi.svg';

const Header: NextPage = () => {
    const router = useRouter();
 
    return (
      <div className={styles.container}>
           <Link href={"/"} legacyBehavior>
        <Image 
        src={Logo}
        alt='logo'
        width={200}
      />
      </Link>
        <div className={styles.menu}>
        
        <Link href={"/"} legacyBehavior>
          <a className={router.pathname == "/" ? styles.active : styles.link}>
          <h4>Dashboard</h4>
          </a>
        </Link>
        <Link href={"/swap"} legacyBehavior>
          <a className={router.pathname == "/swap" ? styles.active : styles.link}>
          <h4>Swap</h4>
          </a>
        </Link>
        <Link href={"/airdrop"} legacyBehavior>
          <a className={router.pathname == "/airdrop" ? styles.active : styles.link}>
          <h4>Airdrop</h4>
          </a>
        </Link>
        <Link href={"/origin"} legacyBehavior>
          <a className={router.pathname == "/origin" ? styles.active : styles.link}>
          <h4>Origin Passport</h4>
          </a>
        </Link>
        <Link href={""} legacyBehavior>
          <a className={router.pathname == "" ? styles.active : styles.link}>
          <h4>Docs</h4>
          </a>
        </Link>
          </div>
          
          <div>
        <ConnectWallet 
        btnTitle=""
        modalTitle="Connect into ARBI Network"
        style={{margin:'13px', color:'#000', borderRadius:'10px'}}
        className='connect' /> 
        </div>
        </div>
      
    );
  };
  
  export default Header;  