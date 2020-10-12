import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'
import ep from '../../static/images/4.png';
import person from '../../static/images/3.png';

const Home = () => {
    return (
        <div className='container'>
            <h3 className='title title1'>请选择您想使用的版本</h3>
            <h5 className='title title2'>使用过程中可以随时切换</h5> 
            <div className='edition'>
                <div className='enterprise part'>
                    <img className='img' src={ep} />
                    <p className='p1'>欢迎使用</p>
                    <p className='p2'>企业版</p>
                    <p className='p3'>您将创建一个企业空间，并邀请您的团队成员加入，共同使用</p>
                    <Button className='button'>
                        <Link to='/enterprise'>进入企业版</Link>
                    </Button>
                </div>
                <div className='personal part'>
                    <img className='img' src={person} />
                    <p className='p1'>欢迎使用</p>
                    <p className='p2'>个人版</p>
                    <p className='p3'>您将创建一个个人空间，输入您的诉求，系统将自动帮您分析哦</p>
                    <Button className='button'>
                        <Link to='/personal'>进入个人版</Link>                  
                    </Button>
                </div>
            </div> 
        </div>
    )
};

export default Home;
