import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { MainContentDiv, MainWrapper } from "@/styles/globals";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MonkeVentures</title>
      </Head>
      <MainWrapper>
        <Navigation />
        <MainContentDiv>
          <Component {...pageProps} />
        </MainContentDiv>
        <Footer />
      </MainWrapper>
    </>
  );
}
