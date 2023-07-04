import { createContext } from "react";

const ChainContext = createContext({
  selectedChain: "arbitrum",
  setSelectedChain: (chain: string) => {},
});

export default ChainContext;