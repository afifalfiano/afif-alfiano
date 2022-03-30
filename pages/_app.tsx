import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import NavBar from '../components/own/home/NavBar'
import '../styles/index.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps}/>
      </AnimatePresence>
    </>
  )
}
