import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import NavBar from "../components/NavBar";

import dynamic from "next/dynamic";

import AuthProvider from "../providers/AuthProvider";

const DynamicCartProviderWithNoSSR = dynamic(() => import("../providers/CartProvider"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Simple Store | فروشگاه ساده</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="icon" href="/images/favicons/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#216353" />
        <meta name="description" content="Simple RTL Store built with NEXT and TS" />
        <link rel="apple-touch-icon" href="/images/favicons/logo192.png" />

        <meta property="og:image" content="/images/others/demo.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1899" />
        <meta property="og:image:height" content="971" />
        <meta property="og:title" content="Simple Store" />
        <meta property="og:site_name" content="Simple Store RTL" />
        <meta property="og:url" content="https://simple-store-rtl.netlify.app/" />
        <meta property="og:description" content="Simple RTL Store built with NEXT and TS" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Simple Store | فروشگاه ساده" />
        <meta name="twitter:description" content="Simple RTL Store built with NEXT and TS" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/AliMoallem27/simple-store-rtl/dev-ts-next/public/images/others/demo.jpg" />
      </Head>

      <AuthProvider>
        <DynamicCartProviderWithNoSSR>
          <NavBar />
          <Component {...pageProps} />
        </DynamicCartProviderWithNoSSR>
      </AuthProvider>
    </>
  );
}
export default MyApp;
