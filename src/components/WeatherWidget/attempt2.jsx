import React, { useState, } from 'react';
import { Button, Modal } from 'antd';
import { LocationProvider, LocationContext } from '../../contexts/ContextLocation'
import weatherAPIfetch from '../../utils/weatherAPIfetch';

const WeatherWidget = ({ location, setLocation }) => {

    const [isWeatherFetched, setIsWeatherFetched] = useState(false)

    // Function to get user's location. Upon successfully retrieving location, calls the weatherAPI to fetch weather for that location. 
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log('Gelocation not supported')
        }
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const storedLocation = [{ latitude: latitude, longitude: longitude }]
        setLocation({ storedLocation });
        // set location to
        localStorage.setItem('location', JSON.stringify(storedLocation));

        weatherAPIfetch({ location: storedLocation, setLocation })
            .then(setIsWeatherFetched(true));

    }

    // Retrieves weather data to local storage
    const storedWeather = localStorage.getItem('weather')
    const weather = JSON.parse(storedWeather)

    // If user location cannot be retrieved
    function error() {
        console.log('Not able to retrieve location')
    }

    return (
        <>
            <LocationProvider>
                <Button onClick={() => setIsWeatherFetched(true)}>Show Latest Weather</Button>
                <span>
                    {weather ? (
                        <>
                            <h1>Showing weather in {weather.name}</h1>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                            <p>Description: {weather.weather[0].description}</p>
                            <p>Temperature: {weather.main.temp}</p>
                            <p>Humidity: {weather.main.humidity} %</p>
                            <p>Rain: {weather.rain}</p>
                        </>
                    ) : null}
                </span>
                <Button onClick={getUserLocation}>Change/set current location</Button>
            </LocationProvider>
        </>
    )
}

export default WeatherWidget