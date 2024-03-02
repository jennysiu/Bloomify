import React, { useContext, useState } from 'react';
import Calendar from '../components/Calendar'
import TaskList from '../components/TaskList';
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos'
import WeatherWidget from '../components/WeatherWidget';
import { Button } from 'antd';
import { LocationProvider, LocationContext } from '../contexts/ContextLocation'

function WateringLog() {

    const { toDos, setToDos } = useContext(ToDoContext); 
    const { location, setLocation } = useContext(LocationContext)

return (
    <>
    {/* Wrap the components in the Providers */}
    <ToDoProvider>
    <LocationProvider>
        <TaskList toDos={toDos} setToDos={setToDos} />
        <Calendar toDos={toDos} setToDos={setToDos} />
        <WeatherWidget location={location} setLocation={setLocation}/>
        </LocationProvider>
    </ToDoProvider>
    </>
)
}

export default WateringLog;
