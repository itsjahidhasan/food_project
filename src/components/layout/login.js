import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CloseOutlined } from "@ant-design/icons";
import { Drawer, Input, Checkbox, Button, Space, Radio } from 'antd';
import Link from "next/link";
export default function Login({ isLoginOpen = true }) {
    const [visible, setVisible] = useState(isLoginOpen);

    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        setVisible(isLoginOpen)
    }, [isLoginOpen]);

    // const OTPpage = () => {
    //     window.location.href('/src/components/login-OTP/login-Otp.js')
    // }

    return (

        <div className='body'>
            <Drawer
                title="Login/Sign Up"
                placement='bottom'
                width={500}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ background: "#000" }}
                headerStyle={{ display: 'none' }}
                extra={
                    <Space>
                        <p >Login/Sign Up</p>
                        <div className="cartIcon" style={{ fontSize: 25 }}>
                            <CloseOutlined />
                        </div>
                    </Space>
                }
            >
                <div className="first" >
                    <p id='text'>Login/Sign Up</p>
                    <div className="cartIcon" style={{ fontSize: 25 }}>
                        <CloseOutlined />
                    </div>
                </div>


                <div className="vertical-center">
                    <Input className="input" placeholder="Basic usage" />
                    <p> <span> <Checkbox /></span> I agree to the terms and Conditions</p>
                    <Link href='/loginotp'>
                        <a ><button id='button'>Continue</button></a>

                    </Link>

                </div>

            </Drawer>
        </div>
    );
}