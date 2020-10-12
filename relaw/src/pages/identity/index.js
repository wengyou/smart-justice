import React, {useEffect, useState} from 'react';
import Footer from '../../components/footer';
import Login from '../../components/login/login';
import Register from '../../components/register/register';
import LoginPassword from '../../components/loginPassword/loginPassword';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss';
import bg from '../../static/images/1.png';

const Identity = (props) => {
    const [identifyFlag, setIdentifyFlag] = useState('login');
    useEffect(() => {
        setIdentifyFlag(identifyFlag)
    }, [identifyFlag]);
    return (
        <div className='flex center login direction_column'>
            <div className='flex center shadow bordser grow'>
                <div className='bg_white'>
                    <img className='login-img' src={bg} alt='' />
                </div>
                {
                    identifyFlag === 'login' && <Login parent={(flag) => {setIdentifyFlag(flag)}}/>
                }
                {
                    identifyFlag === 'register' && <Register parent={(flag) => {setIdentifyFlag(flag)}} />
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Identity;