import Image from "next/image";
import Link from "next/link";
import { Row, Col, Drawer, Button } from "antd";
import React, { useState } from "react";

export default function FoodMenu() {
  return (
    <>
      <div className="food-menu-mobile-view">
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

        <MainContent></MainContent>
        <MainContent></MainContent>
        <MainContent></MainContent>
        <MainContent></MainContent>
        <MainContent></MainContent>
        <MainContent></MainContent>
        <MainContent></MainContent>
      </div>

      <div className="food-menu-web-view">
        <Row utter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}></Col>
          <Col className="gutter-row" span={8}>
            <MainContent></MainContent>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <FoodAddView></FoodAddView>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

function MainContent() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
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
        placement="bottom"
        onClose={onClose}
        visible={visible}
        height={450}
        headerStyle={{
          display: "none",
        }}
        className="food-add-drawer"
        bodyStyle={{
          backgroundColor: "black",
          borderRadius: "20px 20px 0px 0px",
        }}
        maskStyle={{
          backgroundColor: "#F2F2F24F",
        }}
        contentWrapperStyle={{
          backgroundColor: "#F2F2F24F",
        }}
      >
        <FoodAddView></FoodAddView>
      </Drawer>
    </>
  );
}

function FoodAddView() {
  return (
    <>
      <div className="food-add-view">
        <div className="food-img-container">
          <img src="/food6.png" alt="image1" className="food-img" />
        </div>
        <div className="food-info">
          <Row>
            <Col span={12}>
              <span className="food-name">Mutton Kacci Full</span>
            </Col>
            <Col span={12}>
              <span className="food-price">220 Taka</span>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
