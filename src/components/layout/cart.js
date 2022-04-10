import Link from "next/link";
import Image from "next/image";
import { Row, Col, Divider, InputNumber } from "antd";
import {
  EditOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
export default function cart() {
  return (
    <>
      <div className="cart-content">
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <div>
              <h6>Address</h6>
              <p>11 Road no 16</p>
              <h6>Note: Flat no 4B</h6>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="edit-icon">
              <EditOutlined style={{ fontSize: 30 }} />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={14}>
            <div className="selected-food">
              <Row>
                <Col span="4" style={{ marginRight: 10 }}>
                  <Image height="100%" width="100%" src={"/food3.svg"} />
                </Col>
                <Col span="12">
                  <h6>Mutton Kacchi Full</h6>
                  <p>haji Biriyani</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div>
              <Row>
                <Col span={4}>
                  <div>
                    <PlusSquareOutlined style={{ fontSize: 30 }} />
                  </div>
                </Col>
                <Col span={4}>
                  <div className="numberInput">
                    <input className="numberInput" type={Number} />
                  </div>
                </Col>
                <Col span={5}>
                  <div>
                    <MinusSquareOutlined style={{ fontSize: 30 }} />
                  </div>
                </Col>
                <Col span={9}>
                  <div>
                    <p>480 taka</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
