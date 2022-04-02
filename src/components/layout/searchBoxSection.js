import { Input, Space } from "antd";


export default function search() {
  const siftingStyle = {
    textAlign: "center",
    marginTop: "30px",
    paddingBottom: "30px",
  };
  const lefticon = {
    fontSize: 16,
    color: "yellow",
    background: "none",
    marginLeft: "45px",
    boxShadow: "5px 10px 20px black",
  };
  const searchStyle = {
    fontSize: 16,
    color: "#2E2E2E",
    background: "none",
    border: "2px solid yellow",
    borderRadius: "15px",
    boxShadow: "5px 10px 20px black",
  };
  const searchIconStyle = {
    fontSize: 16,
    color: "yellow",
    background: "none",
    overflow: "hidden",
    marginLeft: "-25px",
  };

  return (
    <>
      <div style={siftingStyle}>
        <div>
          <input type="text" style={searchStyle}></input>
          <span style={searchIconStyle}>S</span>

          <button style={lefticon}>Icon</button>
        </div>
      </div>
    </>
  );
}
