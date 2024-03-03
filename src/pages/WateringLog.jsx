import React, { useContext, useState } from 'react';
import Calendar from '../components/Calendar'
import TaskList from '../components/TaskList';
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos'
import WeatherWidget from '../components/WeatherWidget';
import { Row, Col } from 'antd';
import { LocationProvider, LocationContext } from '../contexts/ContextLocation'

function WateringLog() {

    const { toDos, setToDos } = useContext(ToDoContext); 
    const { location, setLocation } = useContext(LocationContext)

return (
    <>
        <Row>
            <Col span={24}>
                <TaskList toDos={toDos} setToDos={setToDos} />
            </Col>
        </Row>
        <Row justify="space=around" align="middle">
            <Col span={16}><Calendar toDos={toDos} setToDos={setToDos} /></Col>
            <Col className="gutter-row" span={1}></Col>
            <Col span={6}><WeatherWidget location={location} setLocation={setLocation} /></Col>
        </Row>
    </>
)
}

export default WateringLog;
