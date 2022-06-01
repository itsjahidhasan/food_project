import { Input, Checkbox } from 'antd';
import Link from "next/link";
import Common from './common';
import React, { useState } from 'react'



export default function WebLogin() {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('')
    const [validNum, setValidNum] = useState(false)
   
    


    const handleClick = () => {

        if (phone.length != 11) {
            setError('Please enter a valid number')
            console.log('wrong number');

        }
        else {
            setValidNum(true)
            console.log(phone);
        }



    }
    const getvalue = (val) => {
        setPhone(val.target.value);
    }
   

    return (
        <Common>
            <div className="signup">
                <div className='weblog'>

                    <h2 id='webtitle'>Login / Sign Up</h2>
                    {!validNum ?
                        (<div>
                            <Input className="input" placeholder="Number" onChange={getvalue} />
                            <p id='err'>{error}</p>
                            <p> <span> <Checkbox /></span> I agree to the terms and Conditions</p>
                           
                                <button id='button' onClick={handleClick}>Continue</button>
                            
                        </div>) : (
                            <div>
                                <Pto></Pto>
                               
                            </div>)
                    }
                </div>
            </div>

        </Common>


    );
};


function Pto(){
    const [validOtp, setValidOtp]=useState('')
    const [seeOtp, setSeeOtp]=useState(false)

    const getotp=(ot)=>{
       setValidOtp(ot.target.value);
       console.log(ot.target.value);
       
    }
    const valid =()=>{
        console.log('cliked');
        setSeeOtp(true);
        console.log(validOtp);
    }
    return(
        <div>
            <h6 id="text">Enter OTP</h6>
            <div >
            <form action=""></form>
                 <Input.Group className='input-field' onChange={getotp} >
                 <Input  className='input-text' maxLength={1}  />
                 <Input className='input-text' maxLength={1} />
                 <Input className='input-text' maxLength={1} />
                 <Input className='input-text' maxLength={1} />
                 </Input.Group>
            
                
                
            </div>
            <Link href='' passHref>
                <button id='button' onClick={valid}>Continue</button>
            </Link>
        </div>
    )
}

