import { Input, Checkbox } from 'antd';
import { CloseOutlined, ContainerFilled } from "@ant-design/icons";
import Link from "next/link";
import Common from './common';

export default function WebLogin() {
    return (
        <Common>
  <div className="signup">
    <div className='weblog'>
            <div className="logtitle">
            <h2 id='webtitle'>Login / Sign Up</h2>
            </div>
            
            <div className="logtext">
                    <Input className="input" placeholder="number" />
                    <p> <span> <Checkbox /></span> I agree to the terms and Conditions</p>
                    <Link href="/loginotp" passHref>
                        <button id='button'>Continue</button>

                    </Link>
                </div>
        </div>
  </div>
        </Common>
        
     
    );
};