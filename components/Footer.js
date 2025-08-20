export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tehreer Creations. All rights reserved.</p>

      <style jsx>{`
        .footer {
          width: 100%;
          padding: 16px;
          text-align: center;
          border-top: 1px solid #eaeaea;
          font-size: 14px;
          color: #555;
          background-color: #f9f9f9;
        }

        @media (max-width: 600px) {
          .footer {
            font-size: 12px;
            padding: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
