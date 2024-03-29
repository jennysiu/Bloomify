import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { LocationProvider, LocationContext } from '../../contexts/ContextLocation'
import weatherAPIfetch from '../../utils/weatherAPIfetch';
import { Input, Space, Card, Row, Col } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import searchWeatherAPIfetch from '../../utils/searchWeatherAPIfetch';
import './style.css'

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
                <Card className="weatherCard">
                <h2 id="weather-title">Weather</h2>
                    <div className="searchSection">
                        <Search placeholder="Search for a location" onSearch={onSearch} style={{ flex: 1 }} />
                        <Button 
                        className='current-location-btn'
                        onClick={getUserLocation}>Use current location</Button>
                    </div>
                    {weatherData ? (
                        <div className="weatherInfo">
                            <p className="weather-location">{weatherData.name}</p>
                            <Row>
                                <Col span={12}>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                        alt="Weather icon"
                                    />
                                </Col>
                                <Col span={12}>
                                    <div className="weatherResults">
                                        <p 
                                        id="weather-desc">
                                            {weatherData.weather[0].description.charAt(0).toUpperCase()+weatherData.weather[0].description.slice(1)}
                                        </p>
                                        <p>Temp: {weatherData.main.temp}°C</p>
                                        <p>Humidity: {weatherData.main.humidity}%</p>
                                        <p>Rain: {weatherData.rain || "N/A"}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ) : null}
                </Card>
            </LocationProvider>
        </>
    )
}

export default WeatherWidget