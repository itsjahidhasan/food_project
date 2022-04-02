import Image from "next/image";
import Link from "next/link";
export default function FoodMenu() {
  return (
    <>
      <div className="header">
        <Link href="/" passHref>
          <a
            className="back-arrow"
            style={{ color: "yellow", marginLeft: "10px" }}
          >
            &#8592;
          </a>
        </Link>
        <h3 style={{ color: "yellow", float: "right", marginRight: "190px" }}>
          Haji Biriyani
        </h3>
      </div>
      <div className="menu-content">
        <div className="menu-name">
          <h3>Mutton Kacci Full</h3>
          <p>Price 220 Taka</p>
        </div>
        <div className="menu-img">
          <h3>Image</h3>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-name">
          <h3>Mutton Kacci Full</h3>
          <p>Price 220 Taka</p>
        </div>
        <div className="menu-img">
          <h3>Image1</h3>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-name">
          <h3>Mutton Kacci Full</h3>
          <p>Price 220 Taka</p>
        </div>
        <div className="menu-img">
          <h3>Image2</h3>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-name">
          <h3>Mutton Kacci Full</h3>
          <p>Price 220 Taka</p>
        </div>
        <div className="menu-img">
          <h3>Image3</h3>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-name">
          <h3>Mutton Kacci Full</h3>
          <p>Price 220 Taka</p>
        </div>
        <div className="menu-img">
          <h3>Image5</h3>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-name">
          <h3>Mutton Kacci Full</h3>
          <p>Price 220 Taka</p>
        </div>
        <div className="menu-img">
          <h3>Image6</h3>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-name">
          <h3>Mutton Kacci Full</h3>
          <p>Price 220 Taka</p>
        </div>
        <div className="menu-img">
          <h3>Image7</h3>
        </div>
      </div>
    </>
  );
}
