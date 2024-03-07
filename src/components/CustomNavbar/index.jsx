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
    BookOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';

// internal imports
import './index.css'
import image from "../../assets/images/leafe-icon.jpg"

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
    getItem(<Link to='/explore'>Explore</Link>, '3', <SearchOutlined />),
    getItem(<Link to='/my-plants'>My Plants</Link>, '2', <UserOutlined />),
    getItem(<Link to='watering-log'>Watering Log</Link>, '4', <CalendarOutlined />),
    getItem(<Link to='settings'>Settings</Link>, '6', <SettingOutlined />),
];

const CustomNavBar = () => {
    return (
        <>
                {/* <img id='navbar-img' src={image} ></img> */}
                <h1 id='navbar-title-icon'>B</h1>
                <Menu 
                defaultSelectedKeys={['1']} 
                mode="inline" 
                items={items}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0)'}} />
            
        </>
    );
};
export default CustomNavBar;

