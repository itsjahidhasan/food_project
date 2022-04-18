import React from 'react';
import { ArrowLeftOutlined } from "@ant-design/icons";
import Router from 'next/router'
export default function Terms(){

    return(
        <div className='order'>
           <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Order Histroy</p>
        </div>
           
          <p>Text will be written here</p>
           
        </div>
    )
}

