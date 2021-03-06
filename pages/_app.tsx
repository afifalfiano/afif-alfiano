import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import NavBar from '../components/own/home/NavBar'
import '../styles/index.css'
import "prismjs/themes/prism-okaidia.min.css";
import Head from 'next/head';
import BackOnTop from '../components/own/home/BackOnTop';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'UA-121190015-4' });
}, []);
  return (
    <>
      <Head>
      <title>Afif Alfiano</title>
    </Head>
    {typeof window !== 'undefined' && <BackOnTop />}
    <NavBar/>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps}/>
      </AnimatePresence>
    </>
  )
}
