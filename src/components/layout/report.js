import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input } from 'antd';
import WebProfile from "./webProfile";
import Router from 'next/router'
const { TextArea } = Input;

export default function Report (){
   
    return(
        <div className="report">
<div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Report & Feedback</p>
        </div>
<div className="reports">
<button id="button">View Previous Reports</button>
<TextArea rows={4} id='input' />
<button id="button" className="send-b">Send</button>
</div>
</div>

    )
}