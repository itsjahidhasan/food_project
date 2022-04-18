import { ArrowLeftOutlined } from "@ant-design/icons";
import Router from 'next/router'
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
export default function Setting(){


    return(
        <div className='profile'>
            <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Profile</p>
        </div>
        <Input  className='inputs' size="large" placeholder="Language" suffix={<EditOutlined />} />
       
      </div>
    )
}