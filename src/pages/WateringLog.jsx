import React, { useContext, useState } from 'react';
import Calendar from '../components/Calendar'
import TaskList from '../components/TaskList';
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos'
import WeatherWidget from '../components/WeatherWidget';
import { Row, Col, Layout } from 'antd';
import { LocationProvider, LocationContext } from '../contexts/ContextLocation'
import '../../src/index.css'
import DashSearchBar from '../components/DashSearchBar';

// Basic page CSS
const layoutStyle = {
    backgroundColor: 'var(--background-color)',
    padding: 15,
    borderRadius: '1%'
}

function WateringLog() {

    const { toDos, setToDos } = useContext(ToDoContext); 
    const { location, setLocation } = useContext(LocationContext)
    const [name, setName] = useState('');

    return (
        <>
        {/* Wrap the components in the Providers */}
        <ToDoProvider>
            <LocationProvider>
                <DashSearchBar />
                <Layout style={layoutStyle}>
                    <div className='content-container'>
                        <Row gutter={16} style={{ marginBottom: 16 }}>
                            <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ marginBottom: 16 }}>
                                <Calendar toDos={toDos} setToDos={setToDos} />
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: 16 }}>
                                <div style={{ marginBottom: 16 }}> 
                                <TaskList toDos={toDos} setToDos={setToDos} className="mb-16" />
                                </div>
                                <div style={{ marginBottom: 16 }}>
                                <WeatherWidget location={location} setLocation={setLocation} className="mb-16"/> 
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Layout>
            </LocationProvider>
        </ToDoProvider>
        </>
    )
    }

export default WateringLog;
