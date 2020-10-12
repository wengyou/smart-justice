import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form } from 'antd';
import * as users from '../../redux/actionCreators/users';
import './register.scss';


const Register = (props) => {
    const { dispatchSubmit } = props;
    const [flag, setFlag] = useState('');
    useEffect(() => {
        flag !== '' && props.parent(flag);
    },[flag]);

    //提交注册
    const hanleSubmit = (values) => {
        dispatchSubmit(values);
    }

    return(
        <div className='register-form bg_white flex direction_column'>
            <h1 className='font_blue bold'>注册</h1>
            <Form
                onFinish={hanleSubmit}
            >
                <Form.Item
                name='username'
                rules={[{required: true, message: '请输入您的用户名！'}]}
                >
                    <Input type='username' placeholder='请输入用户名'/> 
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[{required: true, message: '请输入您的密码！'}]}
                >
                    <Input type='password' placeholder='请输入密码'/>
                </Form.Item>
                <Form.Item
                    name='real_name'
                    rules={[
                        {required: true, message: '请输入您的真实姓名！'},
                        {min: 2, message: '请输入正确格式的姓名！'}
                    ]}
                >
                    <Input placeholder='请输入真实姓名'/>
                    </Form.Item>
                <Form.Item
                    name='email'
                    rules={[
                        {required: true, message: '请输入您的邮箱号！'},
                        {type: 'email', message: '请输入正确格式的邮箱！'}
                    ]}
                >
                    <Input placeholder='请输入邮箱'/>
                </Form.Item>
                <Form.Item>
                    <Button 
                        className='register-button' 
                        type='primary' 
                        htmlType='submit'
                        danger
                    >
                        免费注册
                    </Button>
                </Form.Item>
            </Form>
            <div className='register-addition flex between'>
                <span className=''>注册表示同意 <a>《相关条款》</a></span>
                <span>
                    已有账号？
                    <span 
                        className='font_blue'
                            onClick={
                                () => {setFlag('login')}
                            }
                    >
                        登录
                    </span>
                </span>
            </div>
        </div>
    )
}

export default connect(
    state => ({

    }),
    dispatch => ({
        dispatchSubmit(args){
            dispatch(users.register(args));
        }
    })
)(Register);