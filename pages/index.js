import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tehreer Creations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Tehreer Creations" />
        <p className="description">
          Tehreer Creations
        </p>
      </main>

      <Footer />
    </div>
  )
}
