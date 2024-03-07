// show option to retreive user name
// show option for users to input location 

import { Input, Button, Card, Layout, Row, Col, Flex } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { LocationContext, LocationProvider } from '../contexts/ContextLocation';
import searchWeatherAPIfetch from '../utils/searchWeatherAPIfetch';
import weatherAPIfetch from '../utils/weatherAPIfetch';

const { Search } = Input;

// Basic page CSS
const layoutStyle = {
  backgroundColor: 'var(--background-color)',
  padding: 15,
  borderRadius: '1%'
}


const Settings = () => {
  const { setLocation } = useContext(LocationContext); 

  const [weatherData, setWeatherData] = useState(null);

  const [username, setUsername] = useState('')


  const userNameSearch = (values) => {
    localStorage.setItem('username', values);
    setUsername(values)
    console.log('Username submitted:', values);
  };

  const onSearch = (value) => {
    if (value.trim !== '') {
      searchWeatherAPIfetch({ location: { location }, setLocation: { setLocation }, value });
    }
  };

  useEffect(() => {
    const handleStorage = () => {

      const storedUsername = localStorage.getItem('username') ?? "";

      setUsername(storedUsername)
      
      const location = JSON.parse(localStorage.getItem('location'));
      
      setLocation(location);

      const weatherData = JSON.parse(localStorage.getItem('weather'));
      setWeatherData(weatherData);
    };

    window.addEventListener('storage', handleStorage);

    handleStorage();

    return () => window.removeEventListener('storage', handleStorage);
  }, [setLocation]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  };

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const storedLocation = [{ latitude: latitude, longitude: longitude }];
    setLocation(storedLocation);

    
    localStorage.setItem('location', JSON.stringify(storedLocation));

    
    weatherAPIfetch({ location: storedLocation, setLocation });
  }

  
  function error() {
    console.log('Not able to retrieve location');
  }

  return (
    <>
      <Layout style={layoutStyle}>
        <Flex align="center" justify="space-evenly">
          <Row>
           
              <Card className="weatherCard" style={{ marginRight: 20 }}>
                <div>
                  <h3>Username: </h3>
                  <p>{username}</p>
                </div>
                <div className="searchSection">
                  <Search placeholder="Enter Username" onSearch={userNameSearch} style={{ flex: 1 }} />
                </div>
              </Card>
            

            <br></br>

            
              <LocationProvider>
                <Card className="weatherCard">
                  <div>
                    <h3>Location: </h3>
                    <p>{weatherData ? weatherData.name : ''}</p>
                  </div>
                  <div className="searchSection">
                    <Search placeholder="Enter Your Location" onSearch={onSearch} style={{ flex: 1 }} />
                    <Button onClick={getUserLocation}>Use current location</Button>
                  </div>
                </Card>
              </LocationProvider>
           
          </Row>
        </Flex>
      </Layout>
    </>
  );
};


export default Settings;
