import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button, Modal, Form, Input, Select } from 'antd';
import {DownOutlined} from '@ant-design/icons';
import * as users from '../../redux/actionCreators/users';
import './index.scss'

const Header = props => {
    const { login, history, dispatchSubmit } = props;
    const { Option } = Select;
    const [showCreate, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!showCreate);  
    };

    const toEnterprise = () => {
        history.push('/enterprise');
    }

    const handleSubmit = (values) => {
        const args = {
            ...values,
            callback: (e) => (setShow(e))
        }
        dispatchSubmit(args)
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <div className='header_wrap flex direction_column center'>
                    <img className='header_img' src={require('../../static/images/5.png')} alt='' />
                    <Button onClick={toggleModal} >创建企业/组织</Button>
                </div>
            </Menu.Item>
        </Menu>
    )

    return (
        <div className='font_white bg_blue header bold shadow flex center_column'>
            <p>智 慧 司 法</p>
            <Dropdown 
                overlay={menu}
                >
                <span
                    style={{
                        //display: login? 'block': 'none' 
                    }} 
                    className='eSpace' 
                    onClick={toEnterprise}
                >
                    企业空间 
                    <DownOutlined style={{marginLeft: "5px"}} />
                </span>
            </Dropdown>
            <span
                style={{
                    display: login? 'block': 'none' 
                }} 
                className='pSpace'
             >
                 个人空间
            </span>
            <Modal
                width={430}
                visible={showCreate}
                footer={null}
                onCancel={toggleModal}
            >
                <div className='flex direction_column center_column'>
                    <img className='modal_img' src={require('../../static/images/6.png')} alt='' />
                    <div className='modal_title flex direction_column center'>
                        <div>企业版（试用）</div>
                        <div>剩余免费使用时间：15天</div>
                    </div>
                    <Form onFinish={handleSubmit} style={{width: '75%'}}>
                        <Form.Item name='team_name' rules={[{ required: true, message: '请输入企业/组织名称！' }]}>
                            <Input placeholder='企业/组织名称' />
                        </Form.Item>
                        <Form.Item name='scale' rules={[{ required: true, message: '请选择企业/组织规模！' }]}>
                            <Select>
                                <Option value='15'>1 - 15人</Option>
                                <Option value='30'>16 - 30人</Option>
                                <Option value='50'>31 - 50人</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item 
                            name='phone' 
                            type='number' 
                            rules={[
                                { required: true, message: '请输入您或其他负责人的联系方式' },
                                {pattern: new RegExp(/^1[3456789]\d{9}$/), message: '请输入正确格式联系方式！'}
                    
                                ]}
                        >
                            <Input placeholder='请输入您或其他负责人的联系方式' />
                        </Form.Item>
                        <Form.Item>
                            <Button className='modal_button' type='primary' htmlType='submit'>开始试用</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
};

export default withRouter(connect(
    state => ({
        login: state.users.login
    }),
    dispatch => ({
        dispatchSubmit(args){
            dispatch(users.createOrganization(args))
        }
    })
)(Header));