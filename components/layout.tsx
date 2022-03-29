import { useEffect } from 'react';
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Prism from 'prismjs'
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
