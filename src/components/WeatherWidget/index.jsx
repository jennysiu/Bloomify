import React, { useState } from 'react';
import { Button } from 'antd';
import { LocationProvider, LocationContext } from '../../contexts/ContextLocation'
import weatherAPIfetch from '../../utils/weatherAPIfetch';

const WeatherWidget = ({ location, setLocation }) => {

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log('Gelocation not supported')
        }

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const storedLocation = [{ latitude: latitude, longitude: longitude }]
            setLocation({ storedLocation });

            console.log(`Latitude: ${latitude} Longitude: ${longitude}`);
            localStorage.setItem('location', JSON.stringify(storedLocation))
        }

        function error() {
            console.log('Not able to retrieve location')
        }

        weatherAPIfetch({ location })

    }

    return (
        
        <>
        <LocationProvider>
        <Button onClick={getUserLocation}>Get weather for current location</Button>
        <span>
            {/* <h1>Weather in {data.name}</h1> */}
            {/* <p>{data.weather[0].description}
            <p>Temperature: {data.main.temp}</p>
            <p>Humidity: {data.main.humidity} %</p>
            <p>Rain: {data.main.</p> */}
        </span>
        </LocationProvider>
        </>
    )
}

// create widget for weather to be rendered into
// search bar (#user-input)
// location 
// weather icon
// temperature
// rain
// humidity

// 

export default WeatherWidget