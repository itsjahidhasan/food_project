import { useEffect, useState } from "react";
import Router from "next/router";
import { Drawer, Input, Layout, Menu, Row, Col, Affix } from "antd";
import {MenuOutlined, ShoppingCartOutlined,UserOutlined,} from "@ant-design/icons";

import Link from "next/link";


import Cart from "./cart";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

export default function Common({ children }) {
  const [visible, setVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const cartShowDrawer = () => {
    setCartVisible(true);
  };
  const cartOnClose = () => {
    setCartVisible(false);
  };

  const handleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setVisible(false);
  };

  const logout = () => {
    setIsLoginOpen(!isLoginOpen);

    setVisible(false);
  };

  return (
    <Layout>
      <Affix>

    
       <Header

          className="header1"
          style={{ padding: 0, background: "#000000" }}
        >
          <Row>
            <Col span={8}>
              <div className="logo"></div>
              <div>1</div>
            </Col>
            <Col span={10}></Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div className="cartIcon" style={{ fontSize: 25 }}>
                    <ShoppingCartOutlined id="icon" onClick={cartShowDrawer} />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className="menuIcon"
                    style={{ fontSize: 25, color: "white" }}
                    onClick={showDrawer}
                  >
                    <MenuOutlined />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Header
          className="header2"
          style={{ padding: 0, background: "#141414"}}
        >
          <Row>
            <Col span={4}>
              <div className="logo"></div>
              <div>2</div>
            </Col>
            <Col span={16}>
              <Row>
                <Col span={18}>
                  <div>
                    <div className="search-box-container">
                      <Search className="header-search-box-section" />
                    </div>
                  </div>
                </Col>
                <Col spna={6}>HelpLine</Col>
              </Row>
            </Col>
            <Col span={4}>
              <Row>
                <Col span={12}>
                  <div className="cartIcon" style={{ fontSize: 25 }}>
                    <UserOutlined id="icon" />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className="cartIcon"
                    style={{ fontSize: 25, alignContent: "right" }}
                  >
                    <ShoppingCartOutlined id="icon" onClick={cartShowDrawer} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>

      </Affix>

      <Drawer
        placement="right"
        maskClosable={false}
        headerStyle={{ background: "#FFAA00", height: "100px" }}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ background: "#141414" }}
        width="240px"
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          style={{ background: "none", border: "none" }}
        >
          <Menu.Item key="0" onClick={handleLogin}>
            Login / Sign Up
          </Menu.Item>
          {/* <Menu.Item key="1" onClick={handleOrder} >Orders</Menu.Item> */}
          <Menu.Item
            key="1"
            style={{ color: "white" }}
            onClick={() => Router.push("../ordersHistory")}
          >
            Orders
          </Menu.Item>
          <Menu.Item key="2" onClick={() => Router.push("./userProfile")}>
            Profile
          </Menu.Item>
          <Menu.Item key="3" onClick={() => Router.push("./adress")}>
            Addresses
          </Menu.Item>
          <Menu.Item key="4" onClick={() => Router.push("./helpCenter")}>
            Help Center
          </Menu.Item>
          <Menu.Item key="5" onClick={() => Router.push("./setting")}>
            Settings
          </Menu.Item>
          <Menu.Item key="6" onClick={() => Router.push("./terms")}>
            Terms & Conditions/Privacy
          </Menu.Item>
          <Menu.Item key="7" onClick={logout}>
            Log Out
          </Menu.Item>
          <Menu.Item key="8" onClick={() => Router.push("./webLogin")}>
            Web Login
          </Menu.Item>
        </Menu>
      </Drawer>
      <div className="cart">
        <Drawer
          placement="right"
          title="2 Items"
          headerStyle={{
            background: "#272727",
            height: "100hw",
            color: "#FFAA00",
          }}
          onClose={cartOnClose}
          visible={cartVisible}
          className="cart"
          bodyStyle={{
            background: "#000000",
            padding: 0,
          }}
          size="320px"
        >
          <Cart />
        </Drawer>
      </div>
      <div> {children}</div>

      {/* <Login isLoginOpen={isLoginOpen}></Login> */}

    </Layout>
  );
}
