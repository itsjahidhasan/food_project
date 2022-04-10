import { Input, Space } from "antd";
import {
  FilterOutlined
} from '@ant-design/icons';



export default function search() {
  const siftingStyle = {
    textAlign: "center",
    marginTop: "30px",
    paddingBottom: "30px",
  };
  const lefticon = {
    fontSize: 16,
    color: "#FFAA00",
    background: "none",
    marginLeft: "45px",
    border: "2px solid #DBB154",
    boxShadow: "5px 10px 20px black",
  };
  const searchStyle = {
    fontSize: 16,
    width:300,
    color: "#2E2E2E",
    border: "2px solid #DBB154",
    borderRadius: "15px",
    boxShadow: "5px 10px 20px black",
  };
  const { Search } = Input;

  return (
    <>
      <div style={siftingStyle}>
        <div>
          <Search style={searchStyle} />

          <button style={lefticon}> <FilterOutlined/> </button>
        </div>
      </div>
    </>
  );
}
