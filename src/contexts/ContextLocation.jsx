import React, { createContext, useState, useEffect } from 'react';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState([]);

    // Use effect to render existing todos from local storage/state
    useEffect(() => {
        const storedLocation = JSON.parse(localStorage.getItem('location')) || [];
        setLocation(storedLocation);
    }, []);

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export { LocationProvider, LocationContext };