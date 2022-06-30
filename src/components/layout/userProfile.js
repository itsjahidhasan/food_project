import { ArrowLeftOutlined } from "@ant-design/icons";
import Router from 'next/router'
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Common from "./common";
export default function UserProfile(){


    return(
      <Common>
            <div className='profile'>
            <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Profile</p>
        </div>
       <div className="reorderbox">
       <Input style={{ height:65, color:'red'}} className='inputs' size="large" placeholder={'name'} suffix={<EditOutlined />} />
        <Input style={{ height:65}}  className='inputs' size="large" placeholder="Number" suffix={<EditOutlined />} />
        <Input style={{ height:65}} className='inputs' size="large" placeholder="Email" suffix={<EditOutlined />} />
       </div>
      </div>
      </Common>
    )
}