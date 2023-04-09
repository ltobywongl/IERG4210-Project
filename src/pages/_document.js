import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.CLIENT_ID}`} defer/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
