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
          <p>Dashboard</p>
          </a>
        </Link>
        <Link href={"/Swap"} legacyBehavior>
          <a className={router.pathname == "/c" ? styles.active : styles.link}>
          <p>Swap</p>
          </a>
        </Link>
        <Link href={"/Earn"} legacyBehavior>
          <a className={router.pathname == "/c" ? styles.active : styles.link}>
          <p>Earn</p>
          </a>
        </Link>
        <Link href={"/Origin"} legacyBehavior>
          <a className={router.pathname == "/c" ? styles.active : styles.link}>
          <p>Origin Passport</p>
          </a>
        </Link>
        <Link href={"https://docs.arbi.network"} legacyBehavior>
          <a className={router.pathname == "" ? styles.active : styles.link}>
          <p>Docs</p>
          </a>
        </Link>
          </div>
          
          <div>
        <ConnectWallet className={styles.connect} /> 
        </div>
        </div>
      
    );
  };
  
  export default Header;  