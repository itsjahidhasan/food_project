import { ArrowLeftOutlined, EditOutlined, DeleteOutlined  } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Router from 'next/router'
import AddNewAddress from "../addNewAddress";


export default function Adressess(){
    const [visible, setVisible] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(false);
    
     
      const HandleNewAddress = () => {
        setIsAddOpen(!isAddOpen);
        setVisible(false);
      };
    return(
        <div className='profile'>
            <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Address</p>
        </div>
        <p id="place">My Place</p>
       <div>
      <UserAddress></UserAddress>
      <UserAddress></UserAddress>
     
       </div>
      <div className="addbtn">
          <button className="address" onClick={HandleNewAddress}>Add New Address</button>
      </div>
      <AddNewAddress isAddOpen={isAddOpen} ></AddNewAddress>
      </div>
    )
}

function UserAddress(){
    return(
            <div className="user">
                <div className="">
                  <p  id="add">Address <span> <DeleteOutlined style={{ fontSize: '21px',marginLeft:'20px'}}/></span></p>
                  <p>11 road no. 16</p>
                       <p id ='add'>Note flat no 4B</p>
                </div>
                    <div>
                    <p  id="add">Address <span> <DeleteOutlined style={{ fontSize: '21px',marginLeft:'20px'}}/></span></p>
                  <p>11 road no. 16</p>
                       <p id ='add'>Note flat no 4B</p>
                    </div>
            </div>
    )
}