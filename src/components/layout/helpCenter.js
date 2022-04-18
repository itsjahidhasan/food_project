import { ArrowLeftOutlined, PhoneFilled,MessageOutlined, WarningOutlined } from "@ant-design/icons";
import Router from 'next/router'

export default function HelpCenter(){
    return(
        <div className='profile'>
            <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Help Center</p>
        </div>
       <div>
       <UserAdress></UserAdress>
      
   
       </div>
      </div>
    )
}

function UserAdress(){
    return(
        <>
        <div className="helpline">
                <div className="help">
                  <p id="add">Helpline</p>
                 </div>
                    <div>
                    <PhoneFilled />
                    </div>
            </div>
        <div className="helpline">
                <div className="help">
                  <p id="add">Chat with custommer care</p>
                 </div>
                    <div>
                    <MessageOutlined />
                    </div>
            </div>
        <div className="helpline" onClick={()=>Router.push('./report')}>
                <div className="help">
                  <p id="add">Report & Feedback</p>
                 </div>
                    <div>
                    <WarningOutlined />
                    </div>
            </div>
        </>
            
            
    )
}