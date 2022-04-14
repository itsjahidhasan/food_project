import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
export default function UserProfile(){
const back =()=>{

}

    return(
        <div className='profile'>
            <div className='header'>
            <ArrowLeftOutlined onClick={back} id='icon' style={{ fontSize: '25px'}}
            />
        <p id='icon'> Profile</p>
        </div>
        <Input  className='inputs' size="large" placeholder="Name /n new /n" suffix={<EditOutlined />} />
        <Input  className='inputs' size="large" placeholder="Number" suffix={<EditOutlined />} />
        <Input  className='inputs' size="large" placeholder="Email" suffix={<EditOutlined />} />
      </div>
    )
}