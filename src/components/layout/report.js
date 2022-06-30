import { ArrowLeftOutlined } from "@ant-design/icons";

import Router from 'next/router'
import WebProfile from "./webProfile";
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

<input id='input'type="text" />
<button id="button" className="send-b">Send</button>
</div>
</div>

    )
}