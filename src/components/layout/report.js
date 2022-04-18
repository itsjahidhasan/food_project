import { ArrowLeftOutlined } from "@ant-design/icons";

import Router from 'next/router'
export default function Report (){
   
    return(
        <div className="report">
<div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Report & Feedback</p>
        </div>
<div>
<button className="reports">View Previous Reports</button>

<input id='input'type="text" />
<button className="reports">Send</button>
</div>
</div>
    )
}