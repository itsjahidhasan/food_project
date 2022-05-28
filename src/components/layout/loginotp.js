import { Input } from 'antd';
import Link from "next/link";

export default function Loginotp() {
    return (
      <div className="otpbox">
            <div className='otp'>
            <h6 id="text">Enter OTP</h6>
            <div className='input-field'>
                <Input className='input-text' />
                <Input className='input-text' />
                <Input className='input-text' />
                <Input className='input-text' />
            </div>
            <Link href='/logInFinish' passHref>
                <button id='button'>Continue</button>
            </Link>
        </div>
      </div>
    );
};