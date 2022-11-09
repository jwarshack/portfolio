import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <meta
        name="description"
        content="Shopify Expert with over 3 years experience using the platform. Based in Newport Beach, CA."
      />
      </Head>
      <body className='font-montserrat'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}