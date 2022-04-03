import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
  const initialProps = await Document.getInitialProps(ctx);
  return {...initialProps}
  }
  render() {
    const meta = {
      title: 'Afif Alfiano',
      description: 'My personal website',
      image: '../public/assets/authors/afif.jpg',
      twitter: '@afifalfiano8'
    }

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={meta.twitter} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          <meta name="theme-color" content='#9013fe'></meta>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121190015-4"></script>
          <script dangerouslySetInnerHTML={{ __html: `
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121190015-4"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-121190015-4');
          </script>      
          `}}></script>
        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-121190015-4"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
