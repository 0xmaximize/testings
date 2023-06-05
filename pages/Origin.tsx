import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Origin: NextPage = () => {
  return (
    <div className={styles.container}>
   
      <main className={styles.main}>
        <h1 className={styles.title}>
           Origin Passport
        </h1>
        <p className={styles.description}>
         Build decentralization & Web3.0 Revolutionary with new experience
        </p>

        <div className={styles.connect}>
          <div style={{display:'flex'}}>
          <h4>What is ORIGIN Passport?</h4> 
          <p>origin passport is a decentralization</p>    
          </div>   
        </div>

        
      </main>
    </div>
  );
};

export default Origin;
