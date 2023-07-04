import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
import Header from "../components/Header";
import { useState } from "react";
import { NextUIProvider, createTheme } from '@nextui-org/react';
import "../styles/globals.css";
import { Helmet } from "react-helmet";

const activeChain='arbitrum';
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const darkTheme = createTheme({
	type: 'light',  
});
const TITLE = 'Arbi Network | Web3.0 & DEX on Arbitrum';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet()]}>
     <NextUIProvider theme={darkTheme}>
      <Header />
      <Component {...pageProps} />
      </NextUIProvider>
    </ThirdwebProvider>
    </>
  );
}

export default MyApp;
