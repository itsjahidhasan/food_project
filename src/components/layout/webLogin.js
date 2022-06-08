import { Input, Checkbox } from 'antd';
import Common from './common';
import React, { useState } from 'react'
import  Otp  from './otp';


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
                                <Otp></Otp>
                            </div>)
                    }
                </div>
            </div>
        </Common>
    );
};


