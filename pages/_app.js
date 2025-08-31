import '@styles/globals.css'
import Head from 'next/head'

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tehreer Creations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* if using PNG instead:
        <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Application
