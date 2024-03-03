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
import { Menu, theme } from 'antd';

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
    getItem(<Link to='/search-results'>Results</Link>, '5', <SearchOutlined />),
    getItem('Settings', '6', <SettingOutlined />),
    getItem('FAQ', '7', <SoundOutlined />),
    getItem('Sign Out', '8', <LogoutOutlined />),
    
];
const CustomNavBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
                <Menu 
                theme="dark" 
                defaultSelectedKeys={['1']} 
                mode="inline" 
                items={items} />
    );
};
export default CustomNavBar;

