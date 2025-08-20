import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tehreer Creations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Tehreer Creations" />
        <p className="description">Tehreer Creations</p>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
        }
        main {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
        }
        .description {
          margin-top: 12px;
          font-size: 1.125rem; /* 18px */
          line-height: 1.6;
        }

        /* Larger phones / small tablets */
        @media (min-width: 480px) {
          .container { padding: 20px; }
          .description { font-size: 1.25rem; } /* 20px */
        }

        /* Tablets and up */
        @media (min-width: 768px) {
          .container { padding: 24px; }
          .description { font-size: 1.375rem; } /* 22px */
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .container { padding: 32px; }
          .description { font-size: 1.5rem; } /* 24px */
        }
      `}</style>
    </div>
  )
}
