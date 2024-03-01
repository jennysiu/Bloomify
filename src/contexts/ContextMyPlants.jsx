import React, { createContext, useState, useEffect } from 'react';

// CODE TO CREATE 'MyPlantsContext' so that the toDos array can be accessed across the application

const MyPlantsContext = createContext();

const MyPlantsProvider = ({ children }) => {
    const [myPlantsArray, setMyPlantsArray] = useState([]);

    // Use effect to render existing todos from local storage/state
    useEffect(() => {
        const storedMyPlantsArray = JSON.parse(localStorage.getItem('myPlantsArrayInLocal')) || [];
        setMyPlantsArray(storedMyPlantsArray);
    }, []);

    return (
        <MyPlantsContext.Provider value={{ myPlantsArray, setMyPlantsArray }}>
            {children}
        </MyPlantsContext.Provider>
    );
};

export { MyPlantsProvider, MyPlantsContext };