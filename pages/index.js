import Head from "next/head";

function IconAt(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...props}>
      <path
        fill="#111"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10a9.96 9.96 0 0 0 6.5-2.34 1 1 0 1 0-1.28-1.54A7.97 7.97 0 1 1 20 12v.25c0 1.33-.96 2.3-2.14 2.3-1.02 0-1.86-.74-1.86-1.8V9.5a1 1 0 1 0-2 0v.9a4 4 0 1 0 .06 4.95c.2.77.87 1.2 1.94 1.2C18.03 16.55 20 14.7 20 12.25V12C20 6.48 15.52 2 10 2Z"
      />
    </svg>
  );
}
function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...props}>
      <path
        fill="#111"
        d="M12 2a7 7 0 0 0-7 7c0 4.42 7 13 7 13s7-8.58 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}
function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-label="Facebook" {...props}>
      <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078V12.07h3.047V9.412c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.235 2.686.235v2.96h-1.514c-1.492 0-1.953.927-1.953 1.878v2.252h3.328l-.532 3.492h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"/>
      <path fill="#fff" d="M16.969 15.563l.532-3.492h-3.328V9.819c0-.951.461-1.878 1.953-1.878h1.514v-2.96s-1.373-.235-2.686-.235c-2.741 0-4.533 1.661-4.533 4.668v2.658H7.078v3.055h3.047V24h3.578v-8.438h2.796z"/>
    </svg>
  );
}
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-label="Instagram" {...props}>
      <defs>
        <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="30%" stopColor="#FEDA77" />
          <stop offset="60%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)" />
      <circle cx="12" cy="12" r="4" fill="#fff" />
      <circle cx="18" cy="6.5" r="1.2" fill="#fff" />
      <circle cx="12" cy="12" r="2.3" fill="url(#ig)" />
    </svg>
  );
}
function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-label="WhatsApp" {...props}>
      <path
        fill="#25D366"
        d="M16.002 3C9.384 3 4 8.384 4 15.002c0 2.64.793 5.09 2.157 7.127L4 29l7.096-2.118A11.942 11.942 0 0 0 16.002 27C22.62 27 28 21.616 28 15.002 28 8.384 22.62 3 16.002 3z"
      />
      <path
        fill="#fff"
        d="M12.714 22.363c-.5.2-1.02.06-1.48-.17-2.72-1.36-4.55-3.64-5.1-6.05-.2-.9.54-1.86 1.41-2.01.3-.05.62.02.86.2.28.2.61.75.79 1.09l.66 1.15c.21.35.09.69-.13.94l-.36.42c-.12.14-.14.35-.06.51.54 1.11 1.64 2.28 2.77 2.87.18.1.41.05.56-.09l.52-.53c.2-.2.49-.24.74-.11.73.37 1.52.7 2.31.97.27.09.45.37.42.66-.09.88-.21 1.41-.41 1.83-.23.5-.72.75-1.19.57Z"
      />
    </svg>
  );
}
function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-label="Phone" {...props}>
      <path
        fill="#007AFF"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.82 21 3 14.18 3 6c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.21 2.2z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>Tehreer Creations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Creativity | Designing | Printing | Advertising" />
      </Head>

      {/* Top row */}
      <header className="top">
        {/* Left */}
        <div className="left">
          <div className="row">
            <IconAt />
            <span>tehreercreations@gmail.com</span>
          </div>
          <div className="row">
            <IconPin />
            <span>Chinar Chowk, Shalimar, Srinagar</span>
          </div>
        </div>

        {/* Middle logo */}
        <div className="logo">
          <img src="/tc-logo.png" alt="Tehreer Creations logo" />
        </div>

        {/* Right */}
        <div className="right">
          <div className="row socials">
            <a
              className="icon"
              href="https://facebook.com/tehreercreations"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <IconFacebook />
            </a>
            <a
              className="icon"
              href="https://instagram.com/tehreercreations"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <IconInstagram />
            </a>
            <span className="handle"></span>
          </div>

          <div className="row contact">
            <a
              className="icon"
              href="https://wa.me/7780829966"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <IconWhatsApp />
            </a>
            <a className="icon" href="tel:7780829966" aria-label="Phone" title="Phone">
              <IconPhone />
            </a>
            <span className="phone"></span>
          </div>
        </div>
      </header>

      {/* Brand */}
      <main className="hero">
        <h1>
          <span>TEHREER</span> <span className="light">CREATIONS</span>
        </h1>
        <p className="tag">CREATIVITY | DESIGNING | PRINTING | ADVERTISING</p>
        //<p className="site">www.tehreercreations.com</p>
      </main>

      <style jsx>{`
        :root {
          --text: #0a0a0a;
          --muted: #5b5b5b;
        }
        * {
          box-sizing: border-box;
        }
        .wrap {
          min-height: 100vh;
          background: #fff;
          color: var(--text);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 18px;
        }

        /* top grid */
        .top {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto 24px;
        }
        .left,
        .right {
          display: grid;
          gap: 10px;
        }
        .right {
          justify-items: end;
        }
        .row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
        }
        .logo img {
          height: 120px;
          width: auto;
          display: block;
        }

        .socials .handle {
          margin-left: 6px;
          font-size: 18px;
          color: var(--text);
        }
        .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          transition: transform 0.2s ease-in-out;
        }
        .icon:hover {
          transform: scale(1.08);
        }
        .phone {
          font-size: 18px;
          font-weight: 500;
          color: #000;
        }

        /* hero */
        .hero {
          text-align: center;
          margin-top: 16px;
        }
        .hero h1 {
          margin: 0;
          letter-spacing: 0.04em;
          font-size: clamp(36px, 8vw, 92px);
          font-weight: 800;
        }
        .hero h1 .light {
          font-weight: 400;
        }
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

        /* responsive */
        @media (max-width: 900px) {
          .top {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
          }
          .right {
            justify-items: center;
          }
          .logo img {
            height: 96px;
          }
        }
      `}</style>
    </div>
  );
}
