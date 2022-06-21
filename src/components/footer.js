import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Row, Col } from "antd";

export default function Footer() {
  return (
    <div className="footer">
      <Row>
        <div className="company-logo">
          <img src="/logo.png" alt="logo" className="logo-style" />
        </div>
        <div className="company-slogan">
          <span>
            Whether you get cravings for some delicious food past midnight or
            you are binge-watching a new Netflix series all night, Owl Dhaka
            will now be at your service.
          </span>
        </div>
      </Row>
      <Row>
        <Col span={12}>
          <div className="important-links">
            <ul>
              <li>
                <Link href={""}>
                  <a>About us</a>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <a>Help Center</a>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={12}>
          <div className="important-links">
            <ul>
              <li>
                <Link href={""}>
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <a>Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <a>Return & Refund Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="payments-type-header">
          <span>Online Payments</span>
        </div>
      </Row>
      <Row>
        <div className="payments-logo"></div>
      </Row>
    </div>
  );
}
