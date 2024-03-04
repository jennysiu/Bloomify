import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { LocationProvider, LocationContext } from '../../contexts/ContextLocation'
import weatherAPIfetch from '../../utils/weatherAPIfetch';
import { Input, Space, Card } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import searchWeatherAPIfetch from '../../utils/searchWeatherAPIfetch';
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const WeatherWidget = ({ location, setLocation }) => {

const [weatherData, setWeatherData] = useState(null)

    const onSearch = (value) => {
        if (value.trim !== '') {
        searchWeatherAPIfetch({ location: { location }, setLocation: { setLocation }, value })
        }
}

// useEffect listens for changes in local storage and updates state accordingly. This in turn re-renders the component, so shows the data from the correct location
    useEffect(() => {
        const handleStorage = () => {
            // Gets weather data from local storage
            const location = JSON.parse(localStorage.getItem('location'))
            // Puts data from local storage into state
            setLocation(location)
            
            const weatherData = JSON.parse(localStorage.getItem('weather'))
            setWeatherData(weatherData)
        }

        window.addEventListener('storage', handleStorage);

        handleStorage(); 

        return () => window.removeEventListener('storage', handleStorage);
    }, []);


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

        // save to local storage
        localStorage.setItem('location', JSON.stringify(storedLocation));

        // call the API with the stored location
        weatherAPIfetch({ location: storedLocation, setLocation })
    }

    // If user location cannot be retrieved
    function error() {
        console.log('Not able to retrieve location')
    }

    return (
        <>
            <LocationProvider>
                <Card
                    title="Weather"
                >
                    <Search placeholder="Search for a location" onSearch={onSearch} style={{ width: 200 , marginBottom: 5}} />
                    <Button onClick={getUserLocation}>Use current location</Button>
                    {weatherData ? (
                        <>
                            <h4>Showing weather in {weatherData.name}</h4>
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
                            <p>Description: {weatherData.weather[0].description}</p>
                            <p>Temperature: {weatherData.main.temp}</p>
                            <p>Humidity: {weatherData.main.humidity} %</p>
                            <p>Rain: {weatherData.rain}</p>
                        </>
                    ) : null}
                </Card>
            </LocationProvider>
        </>
    )
}

export default WeatherWidget