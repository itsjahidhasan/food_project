import { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import Link from "next/link";

export default function Layout() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 10 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          backgroundColor: "black",
          opacity: 10,
          height: "60px",
          backdrop: "blur(10px)",
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="container">
          <Link className="nav-item" href="#" passHref>
            <span style={{ color: "yellow" }}>11 Rd No.16</span>
          </Link>

          <Link className="nav-item cart-icon" href="/Cart" passHref>
            <a style={{ color: "yellow", marginRight: "-279px" }}>ShopIcon</a>
          </Link>

          <button onClick={showDrawer}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        style={{ position: "absolute" }}
      >
        <p style={{color:"black"}}>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
