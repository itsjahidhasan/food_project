import { ArrowLeftOutlined, EditOutlined, DeleteOutlined  } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Router from 'next/router'
import AddNewAddress from "../addNewAddress";
import UserAdress from "../useradress";

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
        <p id='icon'> Addressess</p>
        </div>
       <div>
       <UserAdress></UserAdress>
     
       </div>
      <div className="addbtn">
          <button className="address" onClick={HandleNewAddress}>Add New Address</button>
      </div>
      <AddNewAddress isAddOpen={isAddOpen} ></AddNewAddress>
      </div>
    )
}

// function UserAdress(){
//     return(
//             <div className="user">
//                 <div className="">
//                   <p id="add">11 road no. 16</p>
//                        <p id ='add'>Note flat no 4B</p>
//                 </div>
//                     <div>
//                     <EditOutlined style={{ fontSize: '21px' }}/>
//                     <DeleteOutlined style={{ fontSize: '21px',marginLeft:'20px'}}/>
//                     </div>
                   
//             </div>
//     )
// }