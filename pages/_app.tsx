import Head from "next/head";
import '../globals.css';
import { AppProps } from "next/app";
import NextNative from "@local_modules/NextNative";
import { appTheme } from 'theme';

export default function App({ Component, pageProps }:AppProps) {
  return (
    <NextNative theme={appTheme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </NextNative>
  );
}