import Link from "next/link";
export default function cart() {
  return (
    <>
      <div className="cart-body">
        <div>
          <Link  href="/" passHref>
            <a className="back-arrow" style={{ color: "yellow", marginLeft: "10px"}}>	&#8592;</a>
          </Link>
          <h3 style={{ color: "yellow", float: "right", marginRight: "250px" }}>
            Cart
          </h3>
        </div>
        <div className="empty-content">
          <h3 className="txt-empty">Your Cart is empty</h3>
          <h2 className="empty-icon">Icon</h2>
        </div>
      </div>
    </>
  );
}
