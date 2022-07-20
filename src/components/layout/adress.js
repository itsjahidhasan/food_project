import { ArrowLeftOutlined, CaretDownOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Drawer, Input, Dropdown, Menu, Space } from "antd";
import Router from 'next/router'



export default function Adressess() {
  const [addnew, setnew] = useState(false)


  const HandleNewAddress = () => {

    setnew(true);
  };
  return (
    <div className='profile'>
      <div className='headers'>
        <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px' }}
        />
        <p id='icon'> Address</p>
      </div>
      <p id="place">My Place</p>
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
      <div className="addbtn">
        <button className="address" onClick={HandleNewAddress}>Add New Address</button>
      </div>
    </div>
  )
}

function UserAddress() {
  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">Home</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">Office</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: 'seceond home',
          key: '3',
        },
      ]}
    />
  );

  const [getnewaddress, setnewaddress] = useState(false)


  const Finish = () => {
    setnewaddress(false)
    console.log('cliled');
    window.location.reload(false);
  };
  return (
    <div className="addres">
      <p>Name</p>
      <div className="home"> <p>Home <Dropdown overlay={menu} trigger={['click']}>
        <a onClick={e => e.preventDefault()}>
          <Space>
            <span>  <CaretDownOutlined style={{ fontSize: '25px', marginLeft: '1rem' }} /></span>

          </Space>
        </a>
      </Dropdown></p></div>

      <p>Address</p>
      <Input className="addinput" onAbort />
      <div className="addbtn">
        <button className="address" onClick={Finish}>Finish</button>
      </div>
    </div>
  )
}