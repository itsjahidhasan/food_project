
import { ArrowLeftOutlined } from "@ant-design/icons";
import Router from 'next/router'
import { Row, Col, Drawer, Button } from "antd";
import React, { useState } from "react";
import Common from "./common";

export default function FoodMenu() {
  return (
    <Common>
      <>
      <div className="food-menu-mobile-view">
      <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px',color:"goldenrod"}}
            />
        <p id='icon'>Haji Biriyani</p>
        </div>

        <MainContent></MainContent>
        <MainContent></MainContent>
        <MainContent></MainContent>
      </div>

      <div className="food-menu-web-view">
        <Row utter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={5}>
            <RestaurantsName></RestaurantsName>
          </Col>
          <Col className="gutter-row menu-space" span={11}>
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
    </Common>
  );
}

function RestaurantsName() {
  return (
    <>
      <div className="restaurants-name">
        <span>Haji Biriyani</span>
      </div>
      <div className="restaurants-name">
        <span>Hanif Biriyani</span>
      </div>
      <div className="restaurants-name">
        <span>Mamun Biriyani</span>
      </div>
      <div className="restaurants-name">
        <span>Bismillah Kabab Ghor</span>
      </div>
      <div className="restaurants-name">
        <span>Bokhari Restora</span>
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
  const closing = () => {
    setVisible(false)}
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
              <img src="/food1.png" alt="image1" className="menu-img" />
            </div>
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
              <img src="/food1.png" alt="image1" className="menu-img" />
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
          <div>
            <Row className="row-gap">
              <Col span={12}>
                <input type="radio" value="Half" name="size" />
                <span className="food-name">Half</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>
            <Row className="row-gap">
              <Col span={12}>
                <input type="radio" value="Full" name="size" />
                <span className="food-name">Full</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>
            <Row className="row-gap">
              <Col span={12}>
                <input type="checkbox" value="Extra Meat" name="extraMeat" />
                <span className="food-name">Extra Meat</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>
            <Row className="row-gap">
              <Col span={12}>
                <input type="checkbox" value="Add Coke" name="Coke" />
                <span className="food-name">Add Coke</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>

            <Row className="order-row-gap">
              <Col span={18}>
                <Row>
                  <Col span={4}>
                    <div>
                      <button className="order-number-button">-</button>
                      {/* <MinusSquareOutlined style={{ fontSize: 27 }} /> */}
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <input
                        className="orderNumberInput"
                        type={Number}
                        value={0}
                      />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <button className="order-number-button">+</button>
                      {/* <PlusSquareOutlined style={{ fontSize: 27 }} /> */}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <Row>
                  <button className="add-order-btn"  onClick={() => Router.push("./cart")}>Add</button>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
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
          <div>
            <Row className="row-gap">
              <Col span={12}>
                <input type="radio" value="Half" name="size" />
                <span className="food-name">Half</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>
            <Row className="row-gap">
              <Col span={12}>
                <input type="radio" value="Full" name="size" />
                <span className="food-name">Full</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>
            <Row className="row-gap">
              <Col span={12}>
                <input type="checkbox" value="Extra Meat" name="extraMeat" />
                <span className="food-name">Extra Meat</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>
            <Row className="row-gap">
              <Col span={12}>
                <input type="checkbox" value="Add Coke" name="Coke" />
                <span className="food-name">Add Coke</span>
              </Col>
              <Col span={12}>
                <span className="food-price">220 Taka</span>
              </Col>
            </Row>

            <Row className="order-row-gap">
              <Col span={18}>
                <Row>
                  <Col span={4}>
                    <div>
                      <button className="order-number-button">-</button>
                      {/* <MinusSquareOutlined style={{ fontSize: 27 }} /> */}
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <input
                        className="orderNumberInput"
                        type={Number}
                        value={0}
                      />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <button className="order-number-button">+</button>
                      {/* <PlusSquareOutlined style={{ fontSize: 27 }} /> */}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <Row>
                  <button className="add-order-btn">Add</button>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
