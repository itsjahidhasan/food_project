import { Input } from 'antd';

export default function LoginFinish() {
    return (
        <div className='finish'>
            <p id='text'>Set Name</p>
            <Input id='input-field' />
            <p id='text'> Email</p>
            <Input id='input-field' />
            <div className='button'>
                <button id='button' >Finish</button>
            </div>

        </div>
    );
};