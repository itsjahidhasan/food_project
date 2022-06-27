import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";

import { Drawer, Input } from "antd";
import UserAdress from "./useradress";

export default function AddNewAddress({ isAddOpen = true }) {
  const [visible, setVisible] = useState(isAddOpen);
  const [text, setText] = useState("");

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    setVisible(isAddOpen);
  }, [isAddOpen]);
  //closing drawer with Icon
  const adding = () => {
    setVisible(false);
    setText('')
  };
  const getText = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="body">
      <Drawer
        title="Login/Sign Up"
        placement="bottom"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ background: "#000" }}
        headerStyle={{ display: "none" }}
      >
        <div className="first">
          <p id="text">
            Farida Mention 63 <br />
            Dhaka
          </p>
          <div className="cartIcon" style={{ fontSize: 25 }}>
            <EditOutlined />
          </div>
        </div>
        <div className="vertical-center">
          <p>Note</p>
          <Input onBlur={getText} className="input" onAbort />

           <button id="button" onClick={adding}>
            Save
          </button> 
        </div>
      </Drawer>
      {<UserAdress text={text}></UserAdress>}
    </div>
  );
}
