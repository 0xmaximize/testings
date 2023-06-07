import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router";

const Header: NextPage = () => {
    const router = useRouter();
 
    return (
      <div className={styles.container}>
        
        <div className={styles.menu}>
        
        <Link href={"/"} legacyBehavior>
          <a className={router.pathname == "/" ? styles.active : styles.link}>
          <h4>Dashboard</h4>
          </a>
        </Link>
        <Link href={"/Swap"} legacyBehavior>
          <a className={router.pathname == "/Swap" ? styles.active : styles.link}>
          <h4>Swap</h4>
          </a>
        </Link>
        <Link href={""} legacyBehavior>
          <a className={router.pathname == "" ? styles.active : styles.link}>
          <h4>Earn</h4>
          </a>
        </Link>
        <Link href={"/Origin"} legacyBehavior>
          <a className={router.pathname == "/Origin" ? styles.active : styles.link}>
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