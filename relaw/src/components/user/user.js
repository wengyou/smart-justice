import React, {useEffect } from 'react';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as users from '../../redux/actionCreators/users';
import './user.scss'


const User = (props) => {

    const { dispatchUserInfo, dispatchLawyerInfo, users } = props;

    useEffect(() => {
        users.type === '普通用户' ? dispatchUserInfo(): dispatchLawyerInfo();
    }, []);
    let history = useHistory();
    function confirm() {
        Modal.confirm({
          title: 'Confirm',
          icon: <ExclamationCircleOutlined />,
          content: '确认退出系统？',
          okText: '确认',
          cancelText: '取消',
          onOk() {
               history.push('/') 
          }
        });
      }
    return(
        <div className='user-container'>
            <div className='user-wrapper'>
                <div>
                    <p className='title'>个人中心</p>
                    <div className='userMes'>所属单位：</div>
                    <div className='userMes'>个人工号：</div>
                    <div className='userMes'>个人账号：</div>
                    <div className='userMes'>注册时间：</div>
                </div>
                <div className='img'></div>
            </div>
            <div className='btn-wrapper'>
                <Button type="primary" onClick={confirm}>退出系统</Button>
                <Button type="primary" danger>注销账号</Button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        users: state.users
    }),
    dispatch => ({
        dispatchUserInfo(){
            dispatch(users.userInfo());
        },
        dispatchLawyerInfo(){
            dispatch(users.lawyerInfo())
        }
    }) 
)(User);