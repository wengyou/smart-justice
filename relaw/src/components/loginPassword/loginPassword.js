import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import './loginPassword.scss';


const LoginPassword = (props) => {
    const [flag, setFlag] = useState('');
    useEffect(() => {
        flag !== '' && props.parent(flag);
    },[flag]);
    return(
        <div className='bg_white flex direction_column login_form'>
            <h1 className='font_blue bold'>设置登录密码</h1>
            <Input placeholder='请输入手机号'/>
            <Input type='password' placeholder='设置8位以上数字、字母组合的密码'/>
            <Input type='password' placeholder='确认密码'/>
            <Button className='login_button' type='primary' danger>
                <Link to='/home'>完成注册</Link>
            </Button>
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

export default LoginPassword;