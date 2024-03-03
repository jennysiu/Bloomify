import React, { createContext, useState, useEffect } from 'react';

// 'MyPlantsContext' so that the toDos  can be accessed across the application

const MyPlantsContext = createContext();

const MyPlantsProvider = ({ children }) => {
    const [myPlants, setMyPlants] = useState([]);

    // Use effect to render existing todos from local storage/state
    useEffect(() => {
        const storedMyPlants = JSON.parse(localStorage.getItem('myPlantsInLocal')) || [];
        setMyPlants(storedMyPlants);
    }, []);

    return (
        <MyPlantsContext.Provider value={{ myPlants, setMyPlants }}>
            {children}
        </MyPlantsContext.Provider>
    );
};

export { MyPlantsProvider, MyPlantsContext };