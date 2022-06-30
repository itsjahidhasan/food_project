import { ArrowLeftOutlined, BgColorsOutlined } from "@ant-design/icons";
import Router from 'next/router'
import { Divider } from 'antd';
import Image from "next/image";
export default function Reorder() {
    return (
        <div className="reorder">
            <div id="nav" className='headers'>
                <ArrowLeftOutlined className="arrow" onClick={() => Router.back()} style={{
                    fontSize: '25px',
                    color: '#ffaa00'
                }}
                />
            </div>
            <div className="reorderbox">

                <div>
                    <div className="ord">
                        <div className="left">
                            <p>Order ID #289187</p>
                            <p>Cash on Delivery</p>
                        </div>
                        <div className="right">
                            <p>Delivered</p>
                            <p>9 Mar 8:45 PM</p>
                            <p > Block D, Road 7, House 123</p>
                        </div>
                    </div>
                    <div className="divider">
                        <Divider style={{ background: '#707070' }} />
                    </div>
                </div>
                <div>
                    <div className="detail">
                        <Image height="60%" width="80%" src={"/food1.png"} />
                        <div>
                            <p id="bold">Mutton Kacchi Full</p>
                            <p>haji Biriyani</p>
                        </div>
                        <p>4</p>
                        <p>1000/-</p>
                    </div>
                </div>
                <div >
                    <div className="detail">
                        <Image height="60%" width="80%" src={"/food2.png"} />
                        <div>
                            <p id="bold">Mutton Kacchi Full</p>
                            <p>haji Biriyani</p>
                        </div>
                        <p>2</p>
                        <p>500/-</p>
                    </div>
                    <div className="divider">
                        <Divider style={{ background: '#707070' }} />
                    </div>
                </div>
                <div className="price">
                    <div className="ord">
                        <div className="left">
                            <p>Sub Total</p>
                            <p>Delivery Charge</p>
                            <p>Discount</p>
                        </div>
                        <div className="right">
                            <p>1520/-</p>
                            <p>110/-</p>
                            <p >0/-</p>
                        </div>
                    </div>
                    <div className="divider">
                        <Divider style={{ background: '#707070' }} />
                    </div>
                    <div className="ord">
                        <p>Total Bill</p>
                        <p>1670/-</p>
                    </div>
                </div>
                <div className="button">
                    <button id="button">Reorder</button>
                </div>
            </div>
        </div>
    )
}