import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    UserOutlined,
    HomeOutlined,
    SearchOutlined,
    CalendarOutlined,
    SettingOutlined,
    SoundOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<Link to='/dashboard'>Dashboard</Link >, '1', <HomeOutlined />),
    getItem(<Link to='/my-plants'>My Plants</Link>, '2', <UserOutlined />),
    getItem(<Link to='/explore'>Explore</Link>, '3', <SearchOutlined />),
    getItem(<Link to='watering-log'>Watering Log</Link>, '4', <CalendarOutlined />),
    getItem('Settings', '5', <SettingOutlined />),
    getItem('FAQ', '6', <SoundOutlined />),
    getItem('Sign Out', '7', <LogoutOutlined />),
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: '#1DA57A', // Change the background color here
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <h1 style={{ color: 'white', textAlign: 'center' }}>Bloomify</h1> {/* Add a title with styling */}
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        My plants
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;

