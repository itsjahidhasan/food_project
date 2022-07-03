import React from 'react';
import { Empty } from 'antd';
import Common from './common';
import Footer from '../footer';

const Purchase = () => {
    return (
        <div className='purchase'>
            <Common>
                <div >
                    <Empty />;
                </div>

            </Common>
            <div className="footers"> <Footer></Footer></div>
        </div>
    );
};

export default Purchase;