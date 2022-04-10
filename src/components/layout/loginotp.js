import { Input } from 'antd';

export default function Loginotp() {
    return (
        <div className='otp'>
            <h6 id="text">Enter OTP</h6>
            <div className='input-field'>
                <Input className='input-text' />
                <Input className='input-text' />
                <Input className='input-text' />
                <Input className='input-text' />
            </div>
            <button id='button' >Continue</button>
        </div>
    );
};