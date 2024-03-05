import React, { createContext, useState, useEffect } from 'react';

// 'MyPlantsContext' so that the toDos  can be accessed across the application

const PlantsToWaterReminder = createContext();

const MyPlantsProvider = ({ children }) => {
    const [myPlants, setMyPlants] = useState([]);

    // Use effect to render existing todos from local storage/state
    useEffect(() => {
        const storedMyPlants = JSON.parse(localStorage.getItem('myPlants')) || [];
        setMyPlants(storedMyPlants);
    }, []);

    return (
        <PlantsToWaterReminder.Provider value={{ myPlants, setMyPlants }}>
            {children}
        </PlantsToWaterReminder.Provider>
    );
};

export { MyPlantsProvider, PlantsToWaterReminder };