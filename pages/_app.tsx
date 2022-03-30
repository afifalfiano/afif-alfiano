import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Header from '../components/own/Header'
import NavBar from '../components/own/NavBar'
import '../styles/index.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
    <AnimatePresence exitBeforeEnter>
      <div className='mt-20'>
      <Component {...pageProps}/>
      </div>
    </AnimatePresence>
    </>
  )
}
