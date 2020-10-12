import React, {useEffect, useState} from 'react';
import { Input, Button  } from 'antd';
import {ForwardOutlined } from '@ant-design/icons';
import './case.scss';


const { TextArea } = Input;
const Case = () => {
    return (
        <div className='case-container'>
            <p className='title'>请输入您的陈述</p>
            <TextArea autoSize={{ minRows: 13}} className='input' />
            <Button type='primary' className='btn'>查看相似案例<ForwardOutlined /></Button>
        </div>
    )
}

export default Case;