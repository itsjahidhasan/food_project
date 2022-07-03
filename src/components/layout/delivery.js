import Router from 'next/router'
import { Divider, Steps } from 'antd';
import React, { useState } from 'react';
const { Step } = Steps;

  
 export default function Delivery(){
    const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };
    return(
        <div className='delivary'>
            <div>
        <p>Your Order has been Placed Successfully</p>
        <p>Your order ID 2354#45y</p>
        <p>Your order is Delivered </p>
       <h2>Thank You!</h2>
        </div>
        <div>
            <p>Order Status</p>
            <Steps current={current} onChange={onChange} direction="vertical" >
        <Step title="Order Confirm" description="" />
        <Step title="Preparing Food" description="" />
        <Step title="On The Way" description="" />
        <Step title="Delivered" description="" />
      </Steps>

        </div>
      <div className='btun'>
      <button className="deli-button" onClick={() => Router.push("./")}>GO Back To Home</button>
      </div>
        </div>
        
    )
}