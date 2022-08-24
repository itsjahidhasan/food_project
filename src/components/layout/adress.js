import { ArrowLeftOutlined, EnvironmentOutlined, CaretDownOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Tabs, Radio, Input, Dropdown, Menu, Space, Select } from "antd";
import Router from 'next/router'
const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;


export default function Adressess() {
  const [addnew, setnew] = useState(false)


  const HandleNewAddress = () => {

    setnew(true);
  };
  return (
    <div className='addressbar'>
      <div className='headers'>
        <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize:25, color:'goldenrod' }}
        />
        <p id='icon'> Address</p>

      </div>
      <Tabs defaultActiveKey="1" centered style={{ inkBar: false }} >
        <TabPane tab={
          <div id="place">
            <span >
              My Place
            </span>
          </div>

        }
          key="1">
          {!addnew ? (<div className="user">
            <div className="">
              <p id="add">Address <span> <DeleteOutlined style={{ fontSize: '21px', marginLeft: '20px' }} /></span></p>
              <p>11 road no. 16</p>
              <p id='add'>Note flat no 4B</p>
            </div>
            <div>
              <p id="add">Address <span> <DeleteOutlined style={{ fontSize: '21px', marginLeft: '20px' }} /></span></p>
              <p>11 road no. 16</p>
              <p id='add'>Note flat no 4B</p>
            </div>
          </div>) : (
            <div>
              <UserAddress></UserAddress>
            </div>)}
        </TabPane>
        <TabPane tab={
          <div id="place">
            <span>
              Order For Othes
            </span>
          </div>
        }
          key="2">
          Content of Tab Pane 2
          <div className="addres">
            <p>Name</p>
            <TextArea rows={1} className='input' />
            <p>Mobile Number</p>
            <TextArea rows={1} className='input' />
            <p>Delivary Location</p>
            <p><span> <EnvironmentOutlined /> Banani</span></p>
            <br />

            <p>Address</p>
            <TextArea rows={4} className="addinput" />
            <button className="address" >Continue</button>
          </div>

        </TabPane>
      </Tabs>
      {/* <div className="subheader">
      <p id="place">My Place</p>
      <p id="place">Order For Others</p>
      </div> */}

      <div className="addbtn">
        <button className="address" onClick={HandleNewAddress}>Add New Place</button>
      </div>
    </div>
  )
}

function UserAddress() {

  const Finish = () => {
    window.location.reload(false);
  };
 
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
  const provinceData = ['Home', 'Jiangsu'];
  const iconstyle={color:'white'}
  return (
    <div className="addres">
      <p>Name</p>
      <div className="home"> <p>
      <Select
      showArrow = {iconstyle}
    labelInValue
    defaultValue={provinceData[0]}
  
    
    style={{
      width: 120,
    }}
    onChange={handleChange}
  >
    <Option value="jack">Office </Option>
    <Option value="lucy">Others</Option>
  </Select>
      </p></div>

      <p>Address</p>
      <TextArea rows={4} className="addinput" />

      <div className="addbtn">
        <button className="address" onClick={Finish}>Finish</button>
      </div>
    </div>
  )
}