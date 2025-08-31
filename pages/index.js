import Head from "next/head";

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>Tehreer Creations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Creativity | Designing | Printing | Advertising"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Section */}
      <header className="top">
        {/* Left Contact */}
        <div className="left">
          <div className="row">
            <span className="ico">📧</span>
            <span>tehreercreations@gmail.com</span>
          </div>
          <div className="row">
            <span className="ico">📍</span>
            <span>Chinar Chowk, Shalimar, Srinagar</span>
          </div>
        </div>

        {/* Center Logo */}
        <div className="logo">
          <img src="/tc-logo.png" alt="Tehreer Creations logo" />
        </div>

        {/* Right Section */}
        <div className="right">
          {/* Social Media Icons */}
          <div className="row socials">
            {/* Facebook */}
            <a
              href="https://facebook.com/tehreercreations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="36" height="36" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#1877F2" />
                <path
                  fill="#fff"
                  d="M13.5 8.5h1.6V6.1c-.28-.04-.99-.1-1.88-.1c-1.86 0-3.14 1.17-3.14 3.33V11H8v2.2h2.08V18h2.43v-4.8h2l.35-2.2h-2.35v-1.4c0-.63.21-1.1 1-1.1Z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/tehreercreations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="36" height="36" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="30%" stopColor="#FEDA77" />
                    <stop offset="60%" stopColor="#DD2A7B" />
                    <stop offset="100%" stopColor="#8134AF" />
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  fill="url(#ig)"
                />
                <circle cx="12" cy="12" r="4" fill="#fff" />
                <circle cx="18" cy="6.5" r="1.2" fill="#fff" />
                <circle cx="12" cy="12" r="2.3" fill="url(#ig)" />
              </svg>
            </a>
          </div>

          {/* WhatsApp & Phone */}
          <div className="row contact">
            {/* WhatsApp */}
            <a
              href="https://wa.me/7780829966"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg width="36" height="36" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#25D366" />
                <path
                  fill="#fff"
                  d="M21.8 19.2c-.2-.1-1.2-.6-1.4-.7c-.3-.1-.5-.1-.7.2l-.9 1c-.2.2-.4.2-.7.1c-1.5-.6-2.7-1.7-3.5-3.1c-.2-.3-.2-.5 0-.7l.8-.9c.2-.2.3-.4.2-.6c-.1-.3-.5-1.4-.7-1.9c-.2-.5-.5-.4-.7-.4h-.6c-.3 0-.7.1-1 .4c-.4.5-1.1 1.1-1.1 2.7c0 1.6 1.2 3.3 1.4 3.6c.2.3 2.3 3.6 5.6 4.9c2.1.8 2.9.7 3.5.6c.8-.1 1.7-.8 1.9-1.5c.1-.5.1-1 .1-1.1c0-.3-.2-.4-.4-.5Z"
                />
              </svg>
            </a>

            {/* Phone */}
            <a href="tel:7780829966" aria-label="Phone">
              <svg width="36" height="36" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#007AFF" />
                <path
                  fill="#fff"
                  d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3c1.1.4 2.3.6 3.6.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.8 21 3 14.2 3 6c0-.6.4-1 1-1h2.5c.6 0 1 .4 1 1c0 1.2.2 2.5.6 3.6c.1.3 0 .7-.3 1l-2.2 2.2Z"
                />
              </svg>
            </a>

            <span className="phone"></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h1>
          <span>TEHREER</span> <span className="light">CREATIONS</span>
        </h1>
        <p className="tag">
          CREATIVITY | DESIGNING | PRINTING | ADVERTISING
        </p>
      
      </main>

      <style jsx>{`
        :root {
          --text: #0a0a0a;
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

        /* Top Layout */
        .top {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 20px;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto 24px;
        }

        /* Logo */
        .logo img {
          height: 180px;
          width: auto;
          display: block;
          transition: transform 0.25s ease-in-out;
        }
        .logo img:hover {
          transform: scale(1.05);
        }

        /* Left + Right */
        .left,
        .right {
          display: grid;
          gap: 12px;
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

        /* Icons */
        .socials a,
        .contact a {
          text-decoration: none;
          line-height: 0;
        }
        .socials svg,
        .contact svg {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.25s ease-in-out,
            box-shadow 0.25s ease-in-out;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        .socials svg:hover,
        .contact svg:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Phone */
        .phone {
          font-size: 18px;
          font-weight: 600;
          color: #000;
          margin-left: 6px;
        }

        /* Hero */
        .hero {
          text-align: center;
          margin-top: 24px;
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
          margin-top: 12px;
          font-size: clamp(14px, 2.6vw, 28px);
          letter-spacing: 0.25em;
          color: var(--text);
        }
        .site {
          margin-top: 16px;
          font-size: clamp(16px, 2.4vw, 24px);
          color: var(--text);
          font-weight: 500;
        }

        /* Responsive */
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
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
}
