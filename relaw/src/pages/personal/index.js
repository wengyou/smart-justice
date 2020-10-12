import React, {useEffect, useState} from 'react';
import { Layout, Menu } from 'antd';
import { FormOutlined, HeatMapOutlined, RadarChartOutlined, EditOutlined, TeamOutlined, CopyOutlined, UserOutlined } from '@ant-design/icons';
import Case from '../../components/case/case';
import Recommond from '../../components/recommend/recommond';
import UserTwo from '../../components/userTwo/userTwo';
import Helper from '../../components/helper/helper';

const { Header, Content, Footer, Sider } = Layout;
const Personal = () => {
    const [key, setKey] = useState('1');
    return(
        <div>
            <Layout>
                <Sider
                    theme='light'
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{minHeight: '90vh'}}
                >
                    <Menu 
                        theme="light" 
                        mode="inline" 
                        defaultSelectedKeys={['1']} 
                        style={{fontSize: '12px'}}
                        onClick={(item) => {
                            setKey(item.key);
                        }}
                    >
                        <Menu.Item key="1" icon={<FormOutlined />}>
                            案件咨询
                        </Menu.Item>
                        <Menu.Item key="2" icon={<EditOutlined />}>
                            咨询助手
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TeamOutlined />}>
                            个人中心
                        </Menu.Item>
                        <Menu.Item key="4" icon={<CopyOutlined />}>
                            文书生成
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UserOutlined />}>
                            律师推荐
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div 
                            className="site-layout-background" 
                            style={{width: '74vw', minHeight: '80vh', backgroundColor: '#fff',marginLeft: '3vw', borderRadius: '8px' }}
                        >
                            {key === '1' && <Case />}
                            {key === '2' && <Helper />}
                            {key === '3' && <UserTwo />}
                            {/* {key === '4' && <Helper />} */}
                            {key === '5' && <Recommond />}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>@版权所有-重庆邮电大学智慧司法团队</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Personal;