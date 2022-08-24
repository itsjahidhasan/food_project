import { ArrowLeftOutlined } from "@ant-design/icons";
import Router from 'next/router'
import { Input, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Common from "./common";
import React, { useState } from 'react';
const { Paragraph } = Typography;

export default function UserProfile(){

  const [editableName, setEditableName] = useState('Name');
  const [editablephone, setEditablephone] = useState('Phone');
  const [editableEmail, setEditableEmail] = useState('Email');
 


    return(
      <Common>
            <div className='profile'>
            <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Profile</p>
        </div>
       <div className="profilebox">
     
       
       <div className="inputs">
        <p>Name</p>
       <Paragraph
        editable={{
          onChange: setEditableName,
        }}
      >
        {editableName}
      </Paragraph>
      </div>
      <div className="inputs">
        <p>Number</p>
       <Paragraph
        editable={{
          onChange: setEditablephone,
        }}
      >
        {editablephone}
      </Paragraph>
       </div>
      <div className="inputs">
      <p>Email</p>
       <Paragraph
      
        editable={{
          onChange: setEditableEmail,
        }}
      >
        {editableEmail}
      </Paragraph>
      </div>
       </div>
      </div>
      </Common>
    )
}