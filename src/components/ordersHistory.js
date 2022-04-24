import React from 'react';
import { ArrowLeftOutlined } from "@ant-design/icons";
import Router from 'next/router'
export default function OrdersHistory(){

    return(
        <div className='order'>
           <div className='headers'>
            <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{ fontSize: '25px'}}
            />
        <p id='icon'> Order Histroy</p>
        </div>
           
            <Orders></Orders>
            <Orders></Orders>
        </div>
    )
}

function Orders(){
    return(
            <div className="orders">
                <div onClick={()=>Router.push('./reorder')}>
                  <p>Order ID #289187</p>
                  <p>Mutton Biriyani, Chicken leg...</p>
                </div>
                <div>
                 <p>Delivered</p>
                    <p>9 Mar 8:45 PM</p>
                 </div>
            </div>
    )
}