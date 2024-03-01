import React, { createContext, useState, useEffect } from 'react';

// CODE TO CREATE 'TODOCONTEXT' so that the toDos array can be accessed across the application

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
    const [toDos, setToDos] = useState([]);

    // Use effect to render existing todos from local storage/state
    useEffect(() => {
        const storedToDos = JSON.parse(localStorage.getItem('toDos')) || [];
        setToDos(storedToDos);
    }, []);

    return (
        <ToDoContext.Provider value={{ toDos, setToDos }}>
            {children}
        </ToDoContext.Provider>
    );
};

export { ToDoProvider, ToDoContext };