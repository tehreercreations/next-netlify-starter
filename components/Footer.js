import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="maintenance">🚧 Website Under Maintenance 🚧</p>
      <p className="contact">Contact Us</p>

      <div className="qr-section">
        <div className="qr-item">
          <Image
            src="/whatsapp-qr.png"
            alt="WhatsApp QR"
            width={300}
            height={300}
            className="qr-img"
            priority
          />
          <p>WhatsApp</p>
        </div>

        <div className="qr-item">
          <Image
            src="/instagram-qr.png"
            alt="Instagram QR"
            width={300}
            height={300}
            className="qr-img"
            priority
          />
          <p>Instagram</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          padding: 20px;
          text-align: center;
          background: #f9f9f9;
          border-top: 1px solid #eaeaea;
        }

        .maintenance {
          font-weight: 700;
          color: #e63946;
          margin: 0 0 8px;
          font-size: clamp(18px, 5vw, 28px);
        }

        .contact {
          margin: 0 0 12px;
          font-weight: 600;
          font-size: clamp(16px, 4vw, 22px);
        }

        .qr-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          justify-items: center;
        }

        /* 2 columns on tablets/desktop */
        @media (min-width: 640px) {
          .qr-section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }
        }

        .qr-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 90vw; /* never overflow screen */
        }

        /* Make images scale nicely on small screens */
        :global(img.qr-img) {
          width: clamp(140px, 45vw, 220px);
          height: auto;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

        .qr-item p {
          margin-top: 8px;
          font-size: clamp(12px, 3.5vw, 16px);
          font-weight: 500;
        }
      `}</style>
    </footer>
  )
}
