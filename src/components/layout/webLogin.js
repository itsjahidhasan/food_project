import { Input, Checkbox } from 'antd';
import Link from "next/link";
import Common from './common';
import React, { useState } from 'react'
import { Otp } from './otp';

export default function WebLogin() {
//     const [visible, setVisible] = useState(false);
//     const [showComponent, setShowComponent] = useState(false);

// const handleClick = () => {
//     setShowComponent(showComponent) 
//     setVisible(false)
// }
    
    return (
        <Common>
  <div className="signup">
    <div className='weblog'>
           
            <h2 id='webtitle'>Login / Sign Up</h2>
                    <Input className="input" placeholder="Number" />
                    <p> <span> <Checkbox /></span> I agree to the terms and Conditions</p>
                    <Link href="/loginotp" passHref>
                        <button id='button'>Continue</button>
                    </Link>
                    {/* <button id='button' onClick={Pto}>Continue</button> */}
            
        </div>
  </div>
  
        </Common>
        
     
    );
};

// function Pto(){
//     return(
//         <div className='otp'>
//             <h6 id="text">Enter OTP</h6>
//             <div className='input-field'>
//                 <Input className='input-text' />
//                 <Input className='input-text' />
//                 <Input className='input-text' />
//                 <Input className='input-text' />
//             </div>
//             {/* <Link href='/logInFinish' passHref>
//                 <button id='button'>Continue</button>
//             </Link> */}
//         </div>
//     )
// }

