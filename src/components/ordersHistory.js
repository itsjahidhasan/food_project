import React from 'react';
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function OrdersHistory(){
    
    
   
    return(
        <div className='order'>
            <div className='title'>
            <ArrowLeftOutlined id='icon' style={{ fontSize: '25px'}}
            />
        <p id='icon'> Order History</p>
      </div>
           
            <Orders></Orders>
            <Orders></Orders>
        </div>
    )
}

function Orders(){
    return(
            <div className="orders">
                <div>
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