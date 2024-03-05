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
<Layout style={layoutStyle}>
        <Row gutter={16} style={{ marginBottom: 16 }}>
            <Col span={16}>
                <Calendar toDos={toDos} setToDos={setToDos} />
            </Col>
            <Col span={8}>
                <TaskList toDos={toDos} setToDos={setToDos} className="mb-16" />
                <br></br>
                <DashSearchBar name={name} setName={setName} className="mb-16"/>
                <br></br>
                <WeatherWidget location={location} setLocation={setLocation} className="mb-16"/>
            </Col>
        </Row>
        </Layout>
    </LocationProvider>
    </ToDoProvider>
    </>
)
}

export default WateringLog;
