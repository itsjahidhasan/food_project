import { useEffect, useState } from "react";
import { Drawer, Layout, Menu, Row, Col, Affix } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Common() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Affix>
        <Header className="header" style={{ padding: 0, background: "black" }}>
          <Row>
            <Col span={8}>
              <div className="logo" />
            </Col>
            <Col span={10}></Col>
            <Col span={6}>
              <Row>
                <Col span={12}>
                  <div className="cartIcon" style={{ fontSize: 25 }}>
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
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          style={{background:"none",border:"none"}}

        >
          <Menu.Item key="1">Helpline</Menu.Item>
          <Menu.Item key="2">Settings</Menu.Item>
          <Menu.Item key="3">Terms & Conditions/Privacy</Menu.Item>
        </Menu>
      </Drawer>
    </Layout>
  );
}
