import Image from "next/image";
import Link from "next/link";
import { Row, Col, Drawer, Button } from "antd";
import React, { useState } from "react";

export default function FoodMenu() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div>
        <div className="header">
          <Row span={16}>
            <Col span={8}>
              <Link href="/" passHref>
                <a className="back-arrow">&#8592;</a>
              </Link>
            </Col>
            <Col>
              <span className="">
                <h3>Haji Biriyani</h3>
              </span>
            </Col>
          </Row>
        </div>

        <div className="menu-content" onClick={showDrawer}>
          <Row>
            <Col span={16}>
              <div className="menu-name">
                <span className="food-name">Mutton Kacci Full</span>
                <span className="food-price">Price 220 Taka</span>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img src="/food1.svg" alt="image1" className="menu-img" />
              </div>
            </Col>
          </Row>
        </div>

        <Drawer
          title="Basic Drawer"
          placement="bottom"
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  );
}
