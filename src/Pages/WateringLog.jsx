import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import Calendar from '../components/Calendar';

function WateringLog() {

    const [toDos, setToDos] = useState([
        {
            task: '',
            date: null,
        }
    ]);

return (
    <>
    <TaskList toDos={toDos} setToDos={setToDos}/>
    <Calendar toDos={toDos} setToDos={setToDos} />
    </>
)
}

export default WateringLog;
