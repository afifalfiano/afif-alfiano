import { AppProps } from 'next/app'
import '../styles/index.css'
import Header from '../components/own/header';
import Layout from '../components/own/Layout';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Header />
    <Component {...pageProps} />
  </Layout>
  )
}
