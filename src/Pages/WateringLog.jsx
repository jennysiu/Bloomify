import React, { useContext } from 'react';
import Calendar from '../components/Calendar'
import TaskList from '../components/TaskList';
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos'

function WateringLog() {

    const { toDos, setToDos } = useContext(ToDoContext); 

return (
    <>
    {/* Wrap the components in the ToDoProvider so that toDos can be passed down as props to TaskList and Calendar */}
    <ToDoProvider>
        <TaskList toDos={toDos} setToDos={setToDos} />
        <Calendar toDos={toDos} setToDos={setToDos} />
    </ToDoProvider>
    </>
)
}

export default WateringLog;
