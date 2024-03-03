import React, { createContext, useContext, useState } from 'react';

const PlantContext = createContext();

export const usePlants = () => useContext(PlantContext);

export const PlantProvider = ({ children }) => {
    const [plants, setPlants] = useState([]);
    return (
        <PlantContext.Provider value={{ plants, setPlants }}>
            {children}
        </PlantContext.Provider>
    );
};
