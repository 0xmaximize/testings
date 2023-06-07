import {
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
} from "@thirdweb-dev/react";
import Link from "next/link";
import { BigNumber, utils } from "ethers";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import styles from "../styles/Origin.module.css";
import { parseIneligibility } from "../utils/parseIneligibility";
import { myNftDropContractAddress } from "../const/Details";
import Image from "next/image";
import origin from "../public/Asset/Origin.png";
import { BsCheckSquareFill, BsFillPatchCheckFill } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa';
import { FaUnlockAlt } from 'react-icons/fa';
import thirdweb from "../public/Asset/thirdweb.svg";
import arbitrum from "../public/Asset/arbitrum.svg";
import arbi from "../public/Asset/arbi.svg";
import arbilabs from "../public/Asset/arbilabs.svg";
import { Container } from "@nextui-org/react";


const Origin: NextPage = () => {
  
  const { contract: nftDrop } = useContract(myNftDropContractAddress);
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);
  const { data: contractMetadata } = useContractMetadata(nftDrop);

  const claimConditions = useClaimConditions(nftDrop);

  const activeClaimCondition = useActiveClaimConditionForWallet(
    nftDrop,
    address || ""
  );
  const claimerProofs = useClaimerProofs(nftDrop, address || "");
  const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
    quantity,
    walletAddress: address || "",
  });
  const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
  const claimedSupply = useClaimedNFTSupply(nftDrop);

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString();
  }, [claimedSupply.data, unclaimedSupply.data]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

    let max;
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !nftDrop
    );
  }, [
    activeClaimCondition.isLoading,
    nftDrop,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Load NFT dataLoad NFT data ";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
     

      return `Congratulations, you are eligible! `;

    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity);
    }
    if (buttonLoading) {
      return "Checking eligibility...";
    }
    
    return "You are not eligible";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);

  return (
    <Container> 
      <div className={styles.mintInfoContainer}>       
          <>
          <div className={styles.imageSide}>
              {/* Image Preview of NFTs */}
              <Image   className={styles.image}  alt='nft' src={origin}
/>
              

               {/* Amount claimed so far */}
               <div className={styles.mintCompletionArea}>
              <div className={styles.mintAreaLeft}>
                
              </div>
              <div className={styles.mintAreaRight}>
                {claimedSupply && unclaimedSupply ? (
                  <p>
                  </p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

              {claimConditions.data?.length === 0 ||
              claimConditions.data?.every(
                (cc) => cc.maxClaimableSupply === "0"
              ) ? (
                <div>
                 <h4 style={{textAlign:'center'}}>
                  Minting has not started yet. 
                </h4>
                <p style={{textAlign:'center'}}>AIPUPPY can be minted on :</p>
                <h2 style={{textAlign:'center'}}>2023.05.20 8:00 (UTC+0)</h2>
                </div>
              ) : !activeClaimCondition.data && claimConditions.data ? (
                <div>
                   <p style={{textAlign:'center'}}>Fetching NFT . . . </p>
                </div>
              ) : (
                <>
                </>
              )}
            </div>
            <div className={styles.infoSide}>
              {/* Title of your NFT Collection */}
              <p  style={{color:'#fff', fontWeight:'bold',fontSize:'18px'}}>
                ARBI NFTs <BsFillPatchCheckFill color='#05aff7' style={{marginLeft:'3px', marginBottom:'-2px'}}/> 
                </p>
              <h1>ARBI :  Origin Passport</h1>
              {/* Description of your NFT Collection */}
              <div className={styles.description}>
              <p>Origin Passport is the proof of being an early contributor. 
                Origin Passport can be staked with ARBI & Unlocked the OG roles.
              </p>
              </div>
              <div className={styles.imageWidth}>
              {/* Image Preview of NFTs */}
              <Image   className={styles.image}  alt='nft' src={origin}
/>
              </div>
              <div className={styles.prices}>
              <p>
              <FaEthereum 
              size='15' 
              color='#fff'
              style={{
                margin:'-2px', 
                marginRight:'4px'}}/>   
              Fees : <span style={{fontWeight:'bold'}}>FREE</span>
              </p>
           
              <p>
              <BsCheckSquareFill size='15' color='#fff' style={{margin:'-2px', marginRight:'4px'}}/>
               Collected : <span style={{fontWeight:'bold'}}>2 / 4000</span>
                </p>
              
                <p>
              <FaUnlockAlt size='15' color='#fff' style={{margin:'-2px', marginRight:'4px'}}/>   
             Unlocked : <span style={{fontWeight:'bold'}}>OG</span>
              </p>
                </div>
             <div className={styles.grid}>

         <div className={styles.mintContainer}>
                    {isSoldOut ? (
                      <div>
                        <p>Fetching Data . . . </p>
                      </div>
                    ) : (
                      <Web3Button
                        contractAddress={nftDrop?.getAddress() || ""}
                        action={(cntr) => cntr.erc721.claim(quantity)}
                        isDisabled={!canClaim || buttonLoading}
                        onError={(err) => {
                          console.error(err);
                          alert("Error! insufficient balance...");
                        }}
                        onSuccess={() => {
                          setQuantity(1);
                          alert("Successfully claimed NFTs");
                        }}
                      >
                      Mint Origin                     
                      </Web3Button>
                      
                    )}
                    <Web3Button contractAddress={nftDrop?.getAddress() || ""}
                        action={(cntr) => cntr.erc721.claim('')}
                        isDisabled={!canClaim || buttonLoading}
                      
                       >Invites</Web3Button>
                  </div>
                  
 
      </div>
      
            </div>
          </>
      </div>
      <div className={styles.powered}>
      <h4 style={{color:'#fff', marginBottom:'-15px', marginTop:'10px'}}>Powered by : </h4> 
        <div className={styles.flex}>
        <Image className={styles.imgs}  alt='nft' src={arbi} />
        <Image className={styles.imgs}  alt='nft' src={thirdweb} />
        <Image className={styles.imgs}  alt='nft' src={arbilabs} />
        <Image className={styles.imgs}  alt='nft' src={arbitrum} />

  </div>
  </div> 
  </Container>
  );
};  

export default Origin;
