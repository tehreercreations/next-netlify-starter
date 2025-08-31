import Head from "next/head";

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>Tehreer Creations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* top row */}
      <header className="top">
        <div className="left">
          <div className="row"><span className="ico">@</span> tehreercreations@gmail.com</div>
          <div className="row">
            <span className="ico">📍</span> Chinar Chowk, Shalimar, Srinagar
          </div>
        </div>

        <div className="logo">
          {/* put /public/tc-logo.png in your repo */}
          <img src="/tc-logo.png" alt="Tehreer Creations logo" />
        </div>

        <div className="right">
          <div className="row socials">
            <a href="https://facebook.com/tehreercreations" target="_blank" rel="noreferrer">f</a>
            <a href="https://instagram.com/tehreercreations" target="_blank" rel="noreferrer">◎</a>
            <span className="handle">@tehreercreations</span>
          </div>
          <div className="row">
            <span className="ico">💬</span> <span>7780829966</span>
          </div>
        </div>
      </header>

      {/* brand */}
      <main className="hero">
        <h1><span>TEHREER</span> <span className="light">CREATIONS</span></h1>
        <p className="tag">
          CREATIVITY | DESIGNING | PRINTING | ADVERTISING
        </p>
        <p className="site">🌐 www.tehreercreations.com</p>
      </main>

      <style jsx>{`
        :root {
          --text: #0a0a0a;
          --muted: #5b5b5b;
        }
        * { box-sizing: border-box; }
        .wrap {
          min-height: 100vh;
          background: #fff;
          color: var(--text);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 18px;
        }

        /* top */
        .top {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto 24px;
        }
        .left, .right { display: grid; gap: 8px; justify-items: start; }
        .right { justify-items: end; }
        .row { display: flex; align-items: center; gap: 10px; font-size: 18px; }
        .ico { display:inline-flex; width: 24px; justify-content:center; font-weight:600; }
        .logo img { height: 120px; width: auto; display:block; }

        .socials a {
          display:inline-flex; align-items:center; justify-content:center;
          width:32px; height:32px; border-radius:50%; border:2px solid #111;
          text-decoration:none; color:#111; font-weight:700; font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .handle { margin-left: 8px; color: var(--text); font-size: 18px; }

        /* hero */
        .hero { text-align:center; margin-top: 16px; }
        .hero h1 {
          margin: 0;
          letter-spacing: 0.04em;
          font-size: clamp(36px, 8vw, 92px);
          font-weight: 800;
        }
        .hero h1 .light { font-weight: 400; }
        .tag {
          margin-top: 10px;
          font-size: clamp(14px, 2.6vw, 28px);
          letter-spacing: 0.2em;
          color: var(--text);
        }
        .site {
          margin-top: 18px;
          font-size: clamp(16px, 2.4vw, 24px);
          color: var(--text);
        }

        /* responsive tweaks */
        @media (max-width: 900px) {
          .top { grid-template-columns: 1fr; justify-items: center; text-align:center; }
          .left, .right { justify-items: center; }
          .row { justify-content: center; }
          .logo img { height: 96px; }
        }
      `}</style>
    </div>
  );
}
