import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Layout } from 'antd';

import TaskList from '../components/TaskList';
import DashWaterLog from '../components/DashWaterLog';
import DashSearchBar from '../components/DashSearchBar';
import PlantOfTheDay from '../components/PlantOfTheDay';
import WeatherWidget from '../components/WeatherWidget';
import DashPlantCard from '../components/DashPlantCard'
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos';
import { MyPlantsContext, MyPlantsProvider } from '../contexts/ContextMyPlants';
import { LocationProvider, LocationContext } from '../contexts/ContextLocation';
import '../../src/index.css'

// Basic page CSS
const layoutStyle = {
  backgroundColor: 'var(--background-color)',
  padding: 15,
  borderRadius: '1%'

}

const Dashboard = () => {
  const { toDos, setToDos } = useContext(ToDoContext);
  const { location, setLocation } = useContext(LocationContext)
  const {myPlants, setMyPlants} = useContext(MyPlantsContext);
  console.log(myPlants)
  const [userName, setUserName] = useState('')

useEffect(() => {
  const storageUserName = localStorage.getItem('username')
  if (storageUserName) {
    setUserName(storageUserName)
  }
}, [])

  return (
    <>
      <Layout style={layoutStyle}>
      <h1>Welcome back {userName || 'Guest'}!</h1>
      
        {/* need to pass plant data from ContextPlantData but we can only set this up once searchResults is ready */}
        {/* Pass plants data to DashPlantCard */}
        <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ marginBottom: 16 }}>
          {/* Assuming DashPlantCard is to be rendered for each plant. Adjust if it's just one card. */}
          
            <DashPlantCard myPlants = {myPlants} />
          
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{ marginBottom: 16 }}>
          <ToDoProvider>
            <TaskList toDos={toDos} setToDos={setToDos} />
          </ToDoProvider>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: 16 }}>
          <WeatherWidget location={location} setLocation={setLocation} />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: 16 }}>
          <PlantOfTheDay />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: 16 }}>
          <DashSearchBar />
        </Col>
      </Row>
      </Layout>
    </>
  );

  
};

export default Dashboard;
