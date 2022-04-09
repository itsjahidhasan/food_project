import Link from "next/link";
export default function cart() {
  return (
    <body style={{ background: "#2E2E2E" }}>
      <div>
        <div>
          <Link href="/" passHref>
            <a className="back-arrow" style={{ color: "yellow", marginLeft: "10px" }}>	&#8592;</a>
          </Link>
          <h3 style={{ color: "yellow", float: "right", marginRight: "250px" }}>
            Cart
          </h3>
        </div>
      </div>
      <div className="empty-content">
        <Link>
          <h3 className="txt-empty">Your Cart is empty</h3>
          <h2 className="empty-icon">Icon</h2>
        </Link>

      </div>
    </body>
  );
}
