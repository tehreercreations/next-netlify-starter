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
      </Head>

      {/* Top Row */}
      <header className="top">
        {/* Left Section */}
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
          {/* Social Icons */}
          <div className="row socials">
            <a
              href="https://facebook.com/tehreercreations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://instagram.com/tehreercreations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>

          {/* Contact Icons */}
          <div className="row contact">
            <a
              href="https://wa.me/7780829966"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" />
            </a>
            <a href="tel:7780829966" aria-label="Phone">
              <img src="/icons/phone.svg" alt="Phone" />
            </a>
            <span className="phone">7780829966</span>
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
        <p className="site">www.tehreercreations.com</p>
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

        /* Logo Styling */
        .logo img {
          height: 180px;
          width: auto;
          display: block;
          transition: transform 0.25s ease-in-out;
        }
        .logo img:hover {
          transform: scale(1.05);
        }

        /* Left + Right Sections */
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

        /* Social & Contact Icons */
        .socials img,
        .contact img {
          width: 36px;
          height: 36px;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
        }
        .socials img:hover,
        .contact img:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Phone Number */
        .phone {
          font-size: 18px;
          font-weight: 600;
          color: #000;
          margin-left: 6px;
        }

        /* Hero Section */
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
