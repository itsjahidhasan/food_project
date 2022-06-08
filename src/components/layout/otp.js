import { Input } from "antd";
import Link from "next/link";
import React, { useState } from 'react'
export default function Otp() {
    const [validOtp, setValidOtp] = useState('')
    const [seeOtp, setSeeOtp] = useState(false)

    const getotp = (ot) => {
        setValidOtp(ot.target.value);
        console.log(ot.target.value);

    }
    const valid = () => {
        console.log('cliked');
        setSeeOtp(true);
        console.log(validOtp);
    }
    return (
        <div>
            <h6 id="text">Enter OTP</h6>
            <div >

                <Input.Group className='input-field' onChange={getotp} >
                    <Input className='input-text' maxLength={1} />
                    <Input className='input-text' maxLength={1} />
                    <Input className='input-text' maxLength={1} />
                    <Input className='input-text' maxLength={1} />
                </Input.Group>
            </div>
            <Link href='/logInFinish' passHref>
                <button id='button' onClick={valid}>Continue</button>
            </Link>
        </div>
    )
}


