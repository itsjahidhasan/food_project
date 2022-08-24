import { useEffect, useState } from "react";
import Router from "next/router";
import { Avatar, Badge, Drawer, Input, Layout, Menu, Row, Col, Affix, Modal, Button, Cascader, Select } from "antd";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, SearchOutlined, EnvironmentFilled, CloseOutlined, PhoneOutlined, MinusOutlined, PlusOutlined, QuestionOutlined } from "@ant-design/icons";

import Link from "next/link";

import Cart from "./Cart";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;


const options = [
  {
    value: "Dhaka",
    label: "Dhaka",
    children: [
      {
        value: "Ashulia",
        label: "Ashulia",

      },
    ],
  },
];

export default function Common({ children }) {
  const [visible, setVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchModalVisible, setSearchModalVisible] = useState(false);

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

  const showModal = () => {
    setModalVisible(true);
  };
  const searchModalShow = () => {
     console.log('llllol');
    setSearchModalVisible(true);
  };

  const handleOk = () => {
    setModalLoading(true);
    setTimeout(() => {
      setModalLoading(false);
      setModalVisible(false);
    }, 1000);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  // const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;

    if (newCount < 0) {
      newCount = 0;
    }

    setCount(newCount);
  };
  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };


  const ButtonGroup = Button.Group;
  const iconStyle = { fontSize: 25, color: 'white' }
  return (
    <Layout>
      <Affix>
        < >
          <div >
            <Row className="mobile-header">
              <Col span={8}>
                <div className="logo">
                  <Link href="/" passHref>
                    <img src="/logo.png" alt="logo" className="mobile-logo-style" /></Link>
                </div>
              </Col>
              <Col span={4}></Col>
              <Col span={12} >
                <Row>
                  <Col span={4}></Col>
                  <Col span={4}>
                    <div className="icon" onClick={searchModalShow}>
                      <SearchOutlined />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="icon" onClick={showModal}>
                      <EnvironmentFilled />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="icon">
                      <ShoppingCartOutlined onClick={cartShowDrawer} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="icon" onClick={showDrawer}>
                      <MenuOutlined />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="web-header">
            <div className="icon-loc">
              <div className="logo">
                <Link href="./" passHref>
                  <img src="/logo.png" alt="logo" className="logo-style" /></Link>
              </div>
              <div className="location-icon" onClick={showModal}>
                <p>   <EnvironmentFilled style={{ fontSize: '25px', color: 'goldenrod' }} /> <span style={{ color: "goldenrod" }}>Banani</span> </p>
              </div>
            </div>
            <div className="nav-list">
              <div className="icon" onClick={searchModalShow}>
                <p> <SearchOutlined style={iconStyle} /><span>Search</span> </p>
              </div>
              <div className="icon" style={{ iconStyle  }} onClick={() => Router.push("./helpCenter")}>
                <p><PhoneOutlined style={iconStyle} /><span> HelpLine</span></p>
              </div>
              <div className="icon" onClick={() => Router.push("./webProfile")}>
                <p><UserOutlined style={iconStyle} /><span>Sign In</span></p>
              </div>
              <div >
                <div className="icon" onClick={cartShowDrawer}>
                  <Badge >
                    <p><ShoppingCartOutlined style={iconStyle} /> <span>Cart</span> </p>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </>
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
          <Menu.Item key="0" onClick={() => Router.push("./webLogin")}>
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
            Address List
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
          {/* <Menu.Item key="8" onClick={() => Router.push("./webLogin")}>
            Web Login
          </Menu.Item> */}
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
      <div className="location">
        <Modal
          visible={modalVisible}
          footer={null}
          closable={false}
          style={{ textAlign: "center" }}
        >
          <Row>
            <div className="location">
              <span className="map-header">Select Your Delivery Location</span>
              <CloseOutlined
                key="back"
                onClick={handleCancel}
                className="close-btn"
              />
            </div>
          </Row>
          <Row>
            <div className="location">
              <Cascader
                options={options}
                placeholder="Select Address"
                className="input-select-location"
              />
            </div>
          </Row>
          <Row>
            <div className="map-view">
              <img src="/map.webp" alt="image1" className="map" />
            </div>
          </Row>
          <Button
            key="submit"
            type="primary"
            loading={modalLoading}
            onClick={handleOk}
            className="location-confirm-btn"
          >
            Confirm
          </Button>
        </Modal>
      </div>
      <div className="search-model">
        <Modal
          title="Search Food"
          style={{ top: 0 }}
          visible={searchModalVisible}
          footer={null}
          className="search-model-show"
          // onOk={() => setSearchModalVisible(false)}
          onCancel={() => setSearchModalVisible(false)}
        >
          <div className="search-box-container">
            {/* <Search className="header-search-box-section" /> */}
            <Input
              placeholder="Search here"
              prefix={<SearchOutlined className="header-search-icon" />}
              className="model-searchBar"
            />
          </div>
        </Modal>
      </div>
      <div> {children}</div>

      {/* <Login isLoginOpen={isLoginOpen}></Login> */}

    </Layout>
  );
}
