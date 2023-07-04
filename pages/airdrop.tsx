import type { NextPage } from "next";
import styles from "../styles/Airdrop.module.css";
import { Container, Grid, Button, Spacer, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { BsTwitter,BsDiscord } from "react-icons/bs";
import { RiArrowRightLine } from 'react-icons/ri';
import { ethers } from "ethers";

import {
  useClaimToken,
  useContract,
  useAddress,
  Web3Button,
  useContractRead, 
  useBalance,
} from "@thirdweb-dev/react";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";


const Airdrop: NextPage = () => {
  const contractAddress = "0xE8bed4308609f0848a3ef897008714B654F45f1b";
  const { contract:tokenContract } = useContract(contractAddress);
  const [quantity, setQuantity] = useState(10000);
  const { data: contractTokenBalance , refetch: refetchContractTokenBalance , isLoading: loadingContractTokenBalance } = useContractRead(tokenContract, "tokenBalance");
  const { data: tokenBalance} = useBalance("0xE8bed4308609f0848a3ef897008714B654F45f1b");
  const formattedBalance = contractTokenBalance
  ? ethers.utils.formatUnits(contractTokenBalance, 18) // 18 is the number of decimals for the unit you want to convert to
  : '';

  useEffect(() => {
      setInterval(() => {
          refetchContractTokenBalance();
      }, 10000);
  }, []);

  const { mutateAsync: claimToken, isLoading, error } = useClaimToken(tokenContract);
  const address = useAddress();
  const link = 'https://arbi.network/airdrop/'
  const share = useRouter();
  const base = `https://arbi.network/airdrop#${address}`;
  const links = base ;
  const copylink = (e: React.ChangeEvent<any>) => {
      navigator.clipboard.writeText(links)
  }
  
  return (
      <Container>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.header}>
          <p style={{letterSpacing:'1.4px', 
          fontWeight:'700',
            }}>
              Airdrop
              </p>
              <Link href={"/origin"} legacyBehavior>
              <p style={{marginRight:'6px', fontSize:'14px', letterSpacing:'0.2px'}}>Get Origin Passport <RiArrowRightLine style={{padding:'1px', marginBottom:'-2px'}}/></p>
             </Link>
              </div>
              <Link href={"https://twitter.com/arbinetwork"} target='_blank'>

         <div className={styles.cards}>
        
          Follow Twitter
          <div className={styles.labels}>
          <p>
            <BsTwitter style=
          {{marginBottom:'-2px', marginRight:'3px'}}/>
          
          Open Twitter</p>
          </div>
         </div>
         </Link>
         
         <Link href={"https://discord.gg/J9Kf2KaSPV"} target='_blank'>

         <div className={styles.cards}>
          Join Discord

          <div className={styles.labels} style={{backgroundColor:'#1f77faea'}}>
          <p>
            <BsDiscord style=
          {{marginBottom:'-2px', marginRight:'3px'}}/>
          
          Open Discord</p>
          </div>
     
         </div>
         </Link>     
         <Spacer y={0.5} />
        <Container>
          <p style={{fontSize:'11px', letterSpacing:'1px'}}>       
          Airdrop Claims will close on June, 07th 2023 and after 
          the event is over you can trade your ARBI / wARBI. 
          Hold an Origin Passport during the event to earn even more rewards. 
          </p>
        </Container>
    
      <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}>
      <p style={{fontSize:'12px', fontWeight:'500', letterSpacing:'1.5px',}}> 1 ARBI : 1 wARBI</p>
      <p style={{fontSize:'12px', fontWeight:'bold', letterSpacing:'1px',}}>
      Claimed : {tokenBalance?.displayValue} wARBI</p>
      </div>
      <Spacer y={0.1} />
      
      <Grid.Container gap={0.2} justify="center">
        <Grid xs={7} md={6} lg={6}> 
        <div className={styles.button}>  
      <Web3Button   
               contractAddress={contractAddress}
               onError={(err) => {
                console.error(err);
                alert("⛔ Failed! not enough ETH amount ⛔");
              }}
              onSuccess={() => {
                alert("Succesfully claimed 🥳 the airdrop has landed into your wallet");
              }}
              action={(contract) => contract.erc20.claim(100)}
             >      
           
                        Claim                 
                        </Web3Button>
                        </div>
                        </Grid>  
                      
                        <Grid xs={4}>   
                        
      <Tooltip hideArrow trigger="click" content="Link Copied 🥳" color="success" placement="topEnd">
        <Button auto color="primary" onClick={copylink}>
        Invites Friends
        </Button>
        <br />
        </Tooltip>
      </Grid>  

      </Grid.Container>
      <div className={styles.labell}>
        <span className={styles.span}>
      <p> GET 10% BONUS</p>
      </span>
      </div>
    
        </div>
       
      </main>
   
    </Container>  

);
};

export default Airdrop;
