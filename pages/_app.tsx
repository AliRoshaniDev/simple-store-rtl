import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import NavBar from "../components/NavBar";
import AuthProvider from "../providers/AuthProvider";

import dynamic from "next/dynamic";

const DynamicCartProviderWithNoSSR = dynamic(() => import("../providers/CartProvider"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Simple Store</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="icon" href="/images/favicons/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#216353" />
        <meta name="description" content="Simple RTL Store with React.js and tailwindcss." />
        <link rel="apple-touch-icon" href="/images/favicons/logo192.png" />

        <meta property="og:image" content="/images/favicons/logo512.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:title" content="Simple Store" />
        <meta property="og:site_name" content="Simple Store RTL" />
        <meta property="og:url" content="https://simple-store-rtl.netlify.app/" />
        <meta property="og:description" content="Simple RTL Store with NEXT and TS" />

        <meta name="twitter:title" content="Simple Store" />
        <meta name="twitter:description" content="Simple RTL Store with NEXT and TS" />
        <meta name="twitter:image" content="/images/favicons/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
