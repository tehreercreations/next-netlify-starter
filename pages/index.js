import Head from "next/head";

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>Tehreer Creations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Creativity | Designing | Printing | Advertising" />
        {/* Nice status bar color on mobile */}
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top */}
      <header className="top">
        <div className="left">
          <div className="row"><span className="ico">📧</span> tehreercreations@gmail.com</div>
          <div className="row"><span className="ico">📍</span> Chinar Chowk, Shalimar, Srinagar</div>
        </div>

        {/* Center logo */}
        <div className="logo">
          <img src="/tc-logo.png" alt="Tehreer Creations logo" />
        </div>

        {/* Right: social + contact */}
        <div className="right">
          <div className="icon-grid">
            {/* Facebook */}
            <a href="https://facebook.com/tehreercreations" target="_blank" rel="noopener" aria-label="Facebook" className="icon">
              <svg viewBox="0 0 40 40" width="40" height="40" role="img">
                <circle cx="20" cy="20" r="20" fill="#1877F2" />
                <path fill="#fff" d="M23.6 13.2h-2.1c-1.1 0-1.3.5-1.3 1.3v1.9h3.4l-.4 3.2h-3v8.2h-3.4v-8.2H14v-3.2h2.8v-2.2c0-2.5 1.5-4 3.9-4c1 0 2 .1 2.9.2v3.1z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/tehreercreations" target="_blank" rel="noopener" aria-label="Instagram" className="icon">
              <svg viewBox="0 0 40 40" width="40" height="40" role="img">
                <defs>
                  <linearGradient id="igCircle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="35%" stopColor="#FEDA77" />
                    <stop offset="65%" stopColor="#DD2A7B" />
                    <stop offset="100%" stopColor="#8134AF" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="20" fill="url(#igCircle)" />
                <g transform="translate(20 20) scale(0.72) translate(-12 -12)">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="none" stroke="#fff" strokeWidth="2.5" />
                  <circle cx="12" cy="12" r="5" fill="none" stroke="#fff" strokeWidth="2.5" />
                  <circle cx="18.2" cy="5.8" r="1.6" fill="#fff" />
                </g>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/7780829966" target="_blank" rel="noopener" aria-label="WhatsApp" className="icon">
              <svg viewBox="0 0 40 40" width="40" height="40" role="img">
                <circle cx="20" cy="20" r="20" fill="#25D366" />
                <g transform="translate(20 20) scale(0.85) translate(-12 -12)">
                  <path fill="#fff" d="M19.6 12c0-4.2-3.4-7.6-7.6-7.6S4.4 7.8 4.4 12c0 1.3.3 2.5.9 3.5L4 20l4.7-1.2c1 .5 2.1.8 3.3.8c4.2 0 7.6-3.4 7.6-7.6zM8.9 9c.2-.5.3-.6.6-.6h.5c.2 0 .5 0 .7.5c.2.5.8 1.9.8 2s.1.4 0 .6c0 .2-.1.3-.3.5c-.1.1-.3.3-.4.4c-.1.1-.2.2-.1.4c.2.4.7 1.2 1.6 1.9c1 .7 1.7.9 2.1 1c.2.1.3 0 .4-.2l.6-.7c.1-.2.3-.2.5-.1c.2.1 1.5.7 1.7.8c.2.1.3.1.4.2c0 .1.1.8-.3 1.5c-.4.7-1.2 1-1.7 1c-.4 0-.9 0-1.9-.4c-.9-.3-2-.9-3.3-1.9s-2.3-2.4-2.7-3.2c-.3-.8-.3-1.4-.3-1.6c0-.2.1-.4.2-.5c.2-.2.6-.6.8-.8c.1-.1.1-.2.1-.3c0-.1 0-.2-.1-.3c0-.1-.5-1.3-.7-1.7c-.1-.4-.3-.4-.5-.4h-.5c-.2 0-.4.1-.6.4c-.2.3-.8.8-.8 1.9c0 1 .7 2.1.8 2.2z"/>
                </g>
              </svg>
            </a>

            {/* Phone */}
            <a href="tel:7780829966" aria-label="Phone" className="icon">
              <svg viewBox="0 0 40 40" width="40" height="40" role="img">
                <circle cx="20" cy="20" r="20" fill="#007AFF" />
                <g transform="translate(20 20) scale(0.8) translate(-12 -12)">
                  <path fill="#fff" d="M7.8 9.2c.2-.3.3-.7.2-1C7.6 7 7.4 5.8 7.4 4.6c0-.4-.3-.6-.6-.6H4.6c-.4 0-.6.3-.6.6C4 14.5 13.5 24 23.4 24c.4 0 .6-.3.6-.6v-2.2c0-.3-.2-.6-.6-.6c-1.2 0-2.4-.2-3.6-.6c-.3-.1-.7 0-1 .2l-1.9 1.9c-4.5-1.9-8-5.4-9.9-9.9l1.9-1.9z"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="hero">
        <h1><span>TEHREER</span> <span className="light">CREATIONS</span></h1>
        <p className="tag">CREATIVITY | DESIGNING | PRINTING | ADVERTISING</p>
        <p className="site">www.tehreercreations.com</p>
      </main>

      <style jsx>{`
        :root { --text: #0a0a0a; }
        .wrap {
          min-height: 100vh; background: #fff; color: var(--text);
          display: flex; flex-direction: column; justify-content: center; padding: 18px;
        }
        .top {
          max-width: 1200px; width: 100%; margin: 0 auto 24px;
          display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 24px;
        }
        .left, .right { display: grid; gap: 12px; }
        .right { justify-items: end; }
        .row { display: flex; align-items: center; gap: 10px; font-size: 18px; }
        .logo img { height: 180px; width: auto; display: block; }

        /* Icon grid */
        .icon-grid {
          display: grid; grid-template-columns: repeat(2, 44px); grid-auto-rows: 44px;
          gap: 14px; justify-items: center; align-items: center;
        }
        .icon { line-height: 0; filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12)); }
        .icon svg { border-radius: 50%; transition: transform .2s ease, filter .2s ease; }
        .icon:active svg, .icon:hover svg { transform: scale(1.08); filter: drop-shadow(0 6px 14px rgba(0,0,0,0.18)); }

        .hero { text-align: center; margin-top: 28px; }
        .hero h1 { margin: 0; letter-spacing: 0.04em; font-size: clamp(34px, 8vw, 92px); font-weight: 800; }
        .hero h1 .light { font-weight: 400; }
        .tag { margin-top: 12px; font-size: clamp(13px, 2.8vw, 28px); letter-spacing: 0.18em; }
        .site { margin-top: 14px; font-size: clamp(15px, 2.6vw, 24px); font-weight: 500; }

        /* Mobile tweaks */
        @media (max-width: 768px) {
          .top { grid-template-columns: 1fr; text-align: center; justify-items: center; gap: 16px; }
          .right { justify-items: center; }
          .logo img { height: 140px; }
          .row { font-size: 16px; }
          .icon-grid { grid-template-columns: repeat(2, 48px); grid-auto-rows: 48px; gap: 16px; }
        }
        @media (max-width: 480px) {
          .logo img { height: 110px; }
          .row { font-size: 15px; }
          .icon-grid { grid-template-columns: repeat(2, 52px); grid-auto-rows: 52px; gap: 16px; }
          .tag { letter-spacing: 0.14em; }
        }
      `}</style>
    </div>
  );
}
