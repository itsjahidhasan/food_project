import Router from 'next/router'
import Common from './common';
import Footer from "../footer";
import { LaptopOutlined,FormOutlined, NotificationOutlined, UserOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Layout ,Input, Space, Menu } from 'antd';
import React from 'react';
import  { useState } from 'react'
import UserProfile from './userProfile';


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


export default function WebProfile() {
  const [changeP, setChange] = useState(false)
  const[another, setanother]=useState(false)
const change =()=>{
setChange(true)
}
const ano =()=>{
setanother(true)
}
    const { Sider, Content } = Layout;
    return (
      <>
        <Common>
             
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
            marginTop: '3rem',
            background: 'black'
          }}
          items={items2}
          
        >
         
          <Menu.Item key="2" >
            My Profile
          </Menu.Item>
            
            <Menu.Item key="2" onClick={change}>
            Change Password
          </Menu.Item>
            <Menu.Item key="2" onClick={ano}>
            Purchased Items
          </Menu.Item>
            <Menu.Item key="2" onClick={() => Router.push("./userProfile")}>
            My Review
          </Menu.Item>
            <Menu.Item key="2" onClick={() => Router.push("./userProfile")}>
            My Favourites
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            marginTop: '3rem',
            minHeight: 500,
            background: 'black'
          }}
        >
    <section>
       { !changeP ? (<div>
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
                    </div>
       </div>) :(
                    <div>
                      <ChangePass></ChangePass>
                    </div>)} 
    </section>
        </Content>
      </Layout>
    </Layout>
        </Common>
        <Footer></Footer>
        </>
    )
}


function ChangePass() {
  return (
      <div>
          <h4>Change Password</h4>
          <Space direction="vertical">
              <Input.Password placeholder="input password" />
              <Input.Password
                  placeholder="input password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
          </Space>
      </div>
  )
}