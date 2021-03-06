import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "~/layouts/layout";
import "~/styles/app.css";
import React,{ useState, useEffect } from 'react';

export default function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(()=>{
    console.log('useEffectが実行されました')
  }, [router.pathname])

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
