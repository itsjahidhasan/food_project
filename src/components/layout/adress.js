import { ArrowLeftOutlined, EditOutlined, DeleteOutlined  } from "@ant-design/icons";
import Router from 'next/router'

export default function Adressess(){
    return(
        <div className='profile'>
            <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Addressess</p>
        </div>
       <div>
       <UserAdress></UserAdress>
       <UserAdress></UserAdress>
   
       </div>
      <div>
          <button id="button">Add New Button</button>
      </div>
      </div>
    )
}

function UserAdress(){
    return(
            <div className="user">
                <div className="">
                  <p id="add">11 road no. 16</p>
                  
                  <p id ='add'>Note flat no 4B</p>
                </div>
                    <div>
                    <EditOutlined style={{ fontSize: '21px' }}/>
                    <DeleteOutlined style={{ fontSize: '21px',marginLeft:'20px'}}/>
                    </div>
            </div>
    )
}