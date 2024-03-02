import React from 'react';
import { Layout, Breadcrumb } from 'antd';


// internal imports
import './style.css';

const { Header, Content } = Layout;



const CustomHeader = () => {
    return (
        <div class="page-header">

        <h1 style={{ color: 'white', textAlign: 'center' }}>Bloomify</h1> 

        </div>
    );
};

export default CustomHeader;
