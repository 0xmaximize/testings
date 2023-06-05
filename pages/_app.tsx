import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Header from "../components/Header";
import { NextUIProvider, createTheme } from '@nextui-org/react';
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";
const darkTheme = createTheme({
	type: 'light',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
     <NextUIProvider theme={darkTheme}>
      <Header />
      <Component {...pageProps} />
      </NextUIProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
