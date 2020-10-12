import React, {useEffect, useState} from 'react';
import { Input } from 'antd';
import './helper.scss';

const { Search } = Input;
const Helper = () => {
    return(
        <div className='helper-container'>
            <div className='chat'>

            </div>
            <Search
                placeholder="请输入您想要咨询的内容"
                enterButton="发送"
                size="middle"
                onSearch={value => console.log(value)}
                style={{ width: '30vw',marginLeft: '20vw'}}
            />
        </div>
    )
}

export default Helper;