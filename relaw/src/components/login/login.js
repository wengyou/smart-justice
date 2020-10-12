import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form } from 'antd';
import { withRouter } from 'react-router-dom';
import * as user from '../../redux/actionCreators/users.js';
import './login.scss';


const Login = (props) => {

    const { dispatchSubmit, login, history } = props;
    const [flag, setFlag] = useState('login');

    useEffect(() => {
        flag === 'register' && props.parent(flag);
    },[flag]);

    //登陆后跳转
    useEffect(() => {
        login && history.push('/home');
    }, [login]);

    //提交登陆表单
    const handleSubmit = (values) => {
        dispatchSubmit(values);
    }

    return(
        <div className='bg_white flex direction_column login_form'>
            <h1 className='font_blue bold'>登录</h1>
            <Form onFinish={handleSubmit}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入您的用户名！' }]}
                >
                    <Input placeholder='请输入账号'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码！' }]}
                >
                    <Input type='password' placeholder='请输入密码'/>
                </Form.Item>

                <Form.Item>
                    <Button className='login_button' type='primary' htmlType='submit'>
                        登录
                    </Button>
                </Form.Item>
            </Form>
            <div className='login_addition flex between'>
                <span 
                    className='font_blue'
                    onClick={
                        () => {setFlag('register')}
                    }
                >
                    免费注册
                </span>
                <span>忘记密码</span>
            </div>
        </div>
    )
}

export default withRouter(connect(
    state => ({
        login: state.users.login
    }),
    dispatch => ({
        dispatchSubmit(args){
            dispatch(user.login(args))
        }

    })
)(Login));