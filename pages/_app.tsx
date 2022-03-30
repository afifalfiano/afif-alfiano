import { AppProps } from 'next/app'
import Header from '../components/own/Header'
import '../styles/index.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}
