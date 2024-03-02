import React, { useState, } from 'react';
import { Button, Modal } from 'antd';
import { LocationProvider, LocationContext } from '../../contexts/ContextLocation'
import weatherAPIfetch from '../../utils/weatherAPIfetch';
import { Input, Space } from 'antd';
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

// const onSearch = (value, _e, info) => console.log(info?.source, value);

const WeatherWidget = ({ location, setLocation }) => {

    const onSearch = (value) => {searchWeatherAPIfetch({ location: { location }, setLocation: {       setLocation }, value })

}

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

        // save to local storage
        localStorage.setItem('location', JSON.stringify(storedLocation));

        weatherAPIfetch({ location: storedLocation, setLocation })
        .then(setIsWeatherFetched(true))
    }



    // Gets weather data from local storage
    const storedWeather = localStorage.getItem('weather')
    const weather = JSON.parse(storedWeather)

    // If user location cannot be retrieved
    function error() {
        console.log('Not able to retrieve location')
    }

    return (
        <>
            <LocationProvider>
                <Search placeholder="Search for a location" onSearch={onSearch} style={{ width: 200 }} />
                <br></br>
                <Button onClick={getUserLocation}>Or use your geolocation</Button>
                <br></br>
                    {/* <Button onClick={() => setIsWeatherFetched(true)}>Show Latest Weather</Button> */}
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
            </LocationProvider>
        </>
    )
}

export default WeatherWidget