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
          <p></p>
          </a>
        </Link>
        <Link href={"/c"} legacyBehavior>
          <a className={router.pathname == "/c" ? styles.active : styles.link}>
          <p>Swap</p>
          </a>
        </Link>
        <Link href={"/c"} legacyBehavior>
          <a className={router.pathname == "/c" ? styles.active : styles.link}>
          <p>Pool</p>
          </a>
        </Link>
        <Link href={"/c"} legacyBehavior>
          <a className={router.pathname == "/c" ? styles.active : styles.link}>
          <p>Origin Passport</p>
          </a>
        </Link>
        <Link href={"/c"} legacyBehavior>
          <a className={router.pathname == "/c" ? styles.active : styles.link}>
          <p>Inventory</p>
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