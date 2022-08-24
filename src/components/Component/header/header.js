import { useEffect, useState } from "react";
import Router from "next/router";
import { Avatar, Badge, Drawer, Input, Layout, Menu, Row, Col, Affix, Modal, Button, Cascader, Select } from "antd";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, SearchOutlined, EnvironmentOutlined, CloseOutlined, MinusOutlined, PlusOutlined, QuestionOutlined } from "@ant-design/icons";
import Link from "next/link";

import Cart from "./Cart";

export default function Header (){
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


    return (
        <div>
            
             <Row className="web-header">
              <Col span={4}>
                <div className="logo">
                  <Link href="./" passHref>
                    <img src="/logo.png" alt="logo" className="logo-style" /></Link>
                </div>
              </Col>
              <Col span={14}>
                <Row>
                  <Col span={24}>
                  <div className="icon" onClick={searchModalShow}>
                      <SearchOutlined />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <Row>
                  <Col span={4}>
                    <div style={{ color: "white", float: "right" }} onClick={() => Router.push("./helpCenter")}>
                      <span> HelpLine</span>
                    </div>
                  </Col>
                  <Col span={2}></Col>
                  <Col span={4}>
                    <div className="icon" onClick={showModal}>
                      <EnvironmentOutlined />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="icon">
                      <UserOutlined
                        onClick={() => Router.push("./webProfile")}
                      />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div >
                      <div className="icon">
                        <Badge >
                          <ShoppingCartOutlined style={{ fontSize: 25, color: 'white' }} onClick={cartShowDrawer} />
                        </Badge>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
        </div>
    );
};

