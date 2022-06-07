import Router from 'next/router'
import { FormOutlined }from "@ant-design/icons";
import Common from './common';
import { Layout } from 'antd';

export default function WebProfile() {
    const { Sider, Content } = Layout;
    return (
        <Common>
            <Layout className='profile'>
                <Sider>
                    <ul>
                        <p>My profile</p>
                        <p>Change Password</p>
                        <p>Purchased Items</p>
                        <p>My Review</p>
                        <p>My Favourites</p>
                    </ul>
                </Sider>
                <Content>
                    <div className='infohead'>
                        <div>
                            <h3>Fahim Khan</h3>
                            <p>fahmikhan@gmail.com</p>
                        </div>
                        <div>
                            <button id='edit'><FormOutlined />Edit Profile</button>
                        </div>
                    </div>
                    <div className='personal'>
                        <h3>Personal Information</h3>
                        <div>
                            <div className="information">
                                <div>
                                    <p>Your Name:</p>
                                </div>
                                <div  id='info' >
                                    <p>Fahim Khan</p>
                                </div>
                            </div>
                            <div className='information'>
                                <div >
                                    <p>Phone:</p>
                                </div>
                                <div  id='info' >
                                    <p>018xxxxxxxx</p>
                                </div>
                            </div>
                            <div className='information' >
                                <div >
                                    <p>Email:</p>
                                </div>
                                <div  id='info' >
                                    <p>fahmikhan@gmail.com</p>
                                </div>
                            </div>
                            <div className='information' >
                                <div >
                                    <p>Country:</p>
                                </div>
                                <div  id='info'>
                                    <p>Bangladesh</p>
                                </div>
                            </div>
                            <div className='information'>
                                <div >
                                    <p>Nationality:</p>
                                </div>
                                <div  id='info'>
                                    <p>Bangladeshi</p>
                                </div>
                            </div>
                        </div>
                    </div></Content>
            </Layout>
        </Common>
    )
}