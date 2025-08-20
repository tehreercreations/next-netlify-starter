export default function Footer() {
  return (
    <footer className="footer">
      <p className="maintenance">🚧 Website Under Maintenance 🚧</p>

      <p className="contact">Contact Us</p>

      <div className="qr-section">
        <div className="qr-item">
          <img src="/whatsapp-qr.png" alt="WhatsApp QR" />
          <p>WhatsApp</p>
        </div>
        <div className="qr-item">
          <img src="/instagram-qr.png" alt="Instagram QR" />
          <p>Instagram</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          padding: 20px;
          text-align: center;
          background-color: #f9f9f9;
          border-top: 1px solid #eaeaea;
        }

        .maintenance {
          font-size: 18px;
          font-weight: bold;
          color: #e63946;
          margin-bottom: 10px;
        }

        .contact {
          font-size: 16px;
          font-weight: 600;
          margin: 10px 0;
        }

        .qr-section {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .qr-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-item img {
          width: 120px;
          height: 120px;
          border-radius: 8px;
          border: 1px solid #ccc;
          transition: transform 0.2s ease-in-out;
        }

        .qr-item img:hover {
          transform: scale(1.05);
        }

        .qr-item p {
          margin-top: 8px;
          font-size: 14px;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .qr-item img {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </footer>
  );
}
