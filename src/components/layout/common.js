import { useEffect, useState } from "react";
import Link from "next/link";
import { Drawer, Layout, Menu, Row, Col, Affix } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Login from "./login";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Common() {
  const [visible, setVisible] = useState(false);
<<<<<<< HEAD
  const [cartVisible, setCartVisible] = useState(false);
=======
  const [isLoginOpen, setIsLoginOpen] = useState(false);
>>>>>>> d6d5cdff599e05d571f9acb0fe2a3d6f60e73196
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
    setIsLoginOpen(!isLoginOpen)
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
                    style={{ fontSize: 25 }}
                    onClick={cartShowDrawer}
                  >
                    <ShoppingCartOutlined />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className="menuIcon"
                    style={{ fontSize: 25 }}
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
        title="Login / Registration"
        headerStyle={{ background: "#FFAA00", height: "100px" }}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ background: "#141414" }}
        width="290px"
        onClick={handleLogin}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          style={{ background: "none", border: "none" }}
<<<<<<< HEAD
=======

>>>>>>> d6d5cdff599e05d571f9acb0fe2a3d6f60e73196
        >
          <Menu.Item key="1">Helpline</Menu.Item>
          <Menu.Item key="2">Settings</Menu.Item>
          <Menu.Item key="3">Terms & Conditions/Privacy</Menu.Item>
        </Menu>
      </Drawer>

<<<<<<< HEAD
      <div className="cart">
        <Drawer
          placement="left"
          title="Cart"
          headerStyle={{ background: "#272727", height: "100hw" }}
          onClose={cartOnClose}
          visible={cartVisible}
          bodyStyle={{ background: "#272727" }}
          width="100vw"
        ></Drawer>
      </div>
=======
      <Login isLoginOpen={isLoginOpen}></Login>

>>>>>>> d6d5cdff599e05d571f9acb0fe2a3d6f60e73196
    </Layout>
  );
}
