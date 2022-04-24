import Link from "next/link";
import Image from "next/image";
import { Row, Col, Divider, InputNumber, Radio,Input, Space } from "antd";
import {
  EditOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
export default function cart() {
  return (
    <>
      <div className="cart-content">
        <div className="checkout-btn-container">
          <button className="checkout-btn">Checkout</button>
        </div>

        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <div>
              <h6>Address</h6>
              <p>11 Road no 16</p>
              <h6>Note: Flat no 4B</h6>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div className="edit-icon">
              <EditOutlined style={{ fontSize: 30 }} />
            </div>
          </Col>
        </Row>

        <Row gutter={16} className="odered-items">
          <Col className="gutter-row" span={10}>
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
          <Col className="gutter-row" span={14}>
            <div>
              <Row>
                <Col span={4}>
                  <div>
                    <PlusSquareOutlined style={{ fontSize: 30 }} />
                  </div>
                </Col>
                <Col span={4}>
                  <div className="numberInput">
                    <input className="numberInput" type={Number} value={1} />
                  </div>
                </Col>
                <Col span={4}>
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

        <Row gutter={16}>
          <Col className="gutter-row" span={10}>
            <div className="selected-food">
              <Row>
                <Col span="4" style={{ marginRight: 10 }}>
                  <Image height="100%" width="100%" src={"/food3.svg"} />
                </Col>
                <Col span="12">
                  <h6>Beef Teheri</h6>
                  <p>haji Biriyani</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={14}>
            <div>
              <Row>
                <Col span={4}>
                  <div>
                    <PlusSquareOutlined style={{ fontSize: 30 }} />
                  </div>
                </Col>
                <Col span={4}>
                  <div className="numberInput">
                    <input className="numberInput" type={Number} value={1} />
                  </div>
                </Col>
                <Col span={5}>
                  <div>
                    <MinusSquareOutlined style={{ fontSize: 30 }} />
                  </div>
                </Col>
                <Col span={9}>
                  <div>
                    <p>300 taka</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row gutter={16} className="odered-items">
          <Col className="gutter-row" span={14}>
            <div className="selected-food">
              <Row>
                <Col span="12">
                  <h6>Sub Total</h6>
                  <p>Delivery Fee</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div>
              <Row>
                <Col span="20" className="amount">
                  <span>700 taka</span>
                  <p>120 taka</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row gutter={16} className="odered-items">
          <Col className="gutter-row" span={14}>
            <div className="selected-food">
              <Row>
                <Col span="12">
                  <p>Discount</p>
                  <button className="add-promo-btn">Add Promo</button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div>
              <Row>
                <Col span="20" className="amount">
                  <span>0 taka</span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row gutter={16} className="odered-items total-amount">
          <Col className="gutter-row" span={14}>
            <div className="selected-food">
              <Row>
                <Col span="12">
                  <h6>Discount</h6>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div>
              <Row>
                <Col span="20" className="amount">
                  <h6>820 taka</h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row gutter={16} className="odered-items">
          <Col className="gutter-row" span={24}>
            <div className="selected-food">
              <Row>
                <Col span="12">
                  <h6>Payment method</h6>
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value={1}><h6>Cash on Delivery</h6></Radio>
                      <Radio value={2}><h6>Card</h6></Radio>
                      <Radio value={3}><h6>Bkash</h6></Radio>
                    </Space>
                  </Radio.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row gutter={16} className="odered-items total-amount">
          <Col className="gutter-row" span={14}>
            <div className="selected-food">
              <Row>
                <Col span="12"></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
