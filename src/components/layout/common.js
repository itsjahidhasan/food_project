import { useEffect, useState } from "react";
import Router from 'next/router';
import Link from "next/link";
import { Drawer, Layout, Menu, Row, Col, Affix } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Login from "./login";
import Cart from "./cart";


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Common() {
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
          className="header"
          style={{ padding: 0, background: "#000000" }}
        >
          <Row>
            <Col span={8}>
              <div className="logo" />
            </Col>
            <Col span={10}></Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div
                    className="cartIcon"
                    style={{ fontSize: 25 }}>
                    <ShoppingCartOutlined id="icon" onClick={cartShowDrawer} />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className="menuIcon"
                    style={{ fontSize: 25, color:'white' }}
                    onClick={showDrawer}
                  >
                    <MenuOutlined />
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
          <Menu.Item key="1" style={{color:'white'}} onClick={() => Router.push("../ordersHistory")}>
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
            padding: 0
          }}
          size="320px"
        >
          <Cart />
        </Drawer>
      </div>
      <Login isLoginOpen={isLoginOpen}></Login>
      {/* <OrdersHistory ordersPage={ordersPage}></OrdersHistory> */}
    </Layout>
  );
}
