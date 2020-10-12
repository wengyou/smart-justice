import React, {useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom'
import './userTwo.scss'


const UserTwo = () => {
    return(
        <div className='userTwo-container'>
            <div className='userTwo-wrapper'>
                <div>
                    <p className='title'>个人中心</p>
                    <div className='userMes'>所属单位：</div>
                    <div className='userMes'>个人工号：</div>
                    <div className='userMes'>个人账号：</div>
                    <div className='userMes'>注册时间：</div>
                </div>
                <div className='img'></div>
            </div>
            <Button shape='round' className='btn' >点击续费</Button>
        </div>
    )
}

export default UserTwo;