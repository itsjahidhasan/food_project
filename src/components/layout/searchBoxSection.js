import { Input, Space, Row, Col } from "antd";
import { ControlOutlined } from "@ant-design/icons";

export default function search() {
  const siftingStyle = {
    textAlign: "center",
    marginTop: "30px",
    paddingBottom: "30px",
  };
  const lefticon = {
    fontSize: 16,
    color: "#141414",
    background: "none",
    marginLeft: "45px",
    border: "2px solid #DBB154",
    boxShadow: "5px 10px 20px black",
  };
  const searchStyle = {
    fontSize: 16,
    color: "#2E2E2E",
    border: "2px solid #DBB154",
    borderRadius: "15px",
    boxShadow: "5px 10px 20px black",
  };
  const { Search } = Input;

  return (
    <>
      <div style={siftingStyle} className="search-box-section">
        <div>
          <Row>
            <Col span={4}></Col>
            <Col span={16}>
              {" "}
              <Search style={searchStyle} />
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}
