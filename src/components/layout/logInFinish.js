import { Input } from 'antd';
import Link from "next/link";
export default function LoginFinish() {
    return (
        <div className='Finish'>
            <div className='finish'>
            <p id='text'>Set Name</p>
            <Input id='input-field' />
            <p id='text'> Email</p>
            <Input id='input-field' />
            <Link href="/" passHref>
                <div className='button'>
                    <button id='button'>Finish</button>
                </div>
            </Link>
        </div>
        </div>
    );
};