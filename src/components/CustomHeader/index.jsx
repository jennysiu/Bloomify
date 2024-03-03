import React from 'react';
import { Layout, Breadcrumb } from 'antd';


// internal imports
import './style.css';

const { Header, Content } = Layout;

const CustomHeader = () => {
    return (
        <h1 className="dashboardTitle">Bloomify</h1> 
    );
};

export default CustomHeader;
