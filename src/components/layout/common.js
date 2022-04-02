import { useEffect, useState } from "react";
import { Drawer,Layout, Menu,Row, Col } from "antd";
import {MenuOutlined,ShoppingCartOutlined} from '@ant-design/icons'
 
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
      {/* <nav
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
      </nav> */}

      <Header className="header" style={{padding:0}}>
         
        <Row>
        <Col span={8}>
          <div className="logo" />
        </Col>
        <Col span={10}></Col>
        <Col span={6}>
        <Row>
            <Col span={12}>
                <div className="cartIcon" style={{fontSize:12}}>
                  <ShoppingCartOutlined />
                </div> 
            </Col>
            <Col span={12}>
              <div className="menuIcon" style={{fontSize:12}} onClick={visible}>
                <MenuOutlined />
              </div> 
            </Col>
        </Row>
        </Col>
      </Row>
      </Header>

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}>

        <p style={{color:"black"}}>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout>
  );
}
