import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import { Layout } from 'antd';
import { Dashboard, Explore, MyPlants, WateringLog, Custom404 } from './pages'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToDoProvider } from './contexts/ContextsToDos';

function App() {

  const [collapsed, setCollapsed] = useState(false); 

  // Import Layout components here
const { Header, Content, Footer, Sider } = Layout;

  return (
    <>
      <Router basename={'/'}>
        {/* The whole app must be wrapped in the ToDoProvider so that the Watering Log page can access it */}
        <ToDoProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
        </Sider>

        <Layout>
          <Header />

          <Content style={{ margin: '16px', padding: 24, background: '#fff', minHeight: 360 }}>
            <Routes>
              <Route path='' element={< Dashboard />} />
              <Route path='/dashboard' element={< Dashboard />} />
              <Route path='/explore' element={< Explore />} />
              <Route path='/my-plants' element={< MyPlants />} />
              <Route path='/watering-log' element={< WateringLog />} />
              <Route path='/404' element={< Custom404 />} />
            </Routes>
          </Content>

          <Footer />
        </Layout>
      </Layout>
        </ ToDoProvider>
    </Router>
    
    </>
  )
}

export default App