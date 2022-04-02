import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import NavBar from '../components/own/home/NavBar'
import '../styles/index.css'
import "prismjs/themes/prism-okaidia.min.css";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <title>Afif Alfiano</title>
    </Head>
    <NavBar/>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps}/>
      </AnimatePresence>
    </>
  )
}
