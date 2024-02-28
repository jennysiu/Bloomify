import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
import { Dashboard, Explore, MyPlants, WateringLog, Custom404 } from './components/Pages'
import './App.css'
import Navbar from './components/Navbar'

function App() {

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
            <Breadcrumb.Item>Welcome back, Joan!</Breadcrumb.Item>
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
          Bloomify ©{new Date().getFullYear()} Created by Adrianna Derkacz, Ahmed Ibrahim, Davou Jobbi, Laura Kane and Jenny Siu.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;