// show option to retreive user name
// show option for users to input location 

// import React from 'react';
// import { Button, Form, Input } from 'antd';

// const onFinishUsername = (values) => {
//   localStorage.setItem('username', values.username);
//   console.log('Username submitted:', values);
// };

// const onFinishLocation = (values) => {
//   localStorage.setItem('location', values.location);
//   console.log('Location submitted:', values.location); // Use values.location instead of values
// };


// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

// const Settings = () => (
//   <>
//     {/* Username Form */}
//     <Form
//       name="usernameForm"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       style={{
//         maxWidth: 600,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinishUsername}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: false,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Submit Username
//         </Button>
//       </Form.Item>
//     </Form>

//     {/* Location Form */}
//     <Form
//       name="locationForm"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       style={{
//         maxWidth: 600,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinishLocation}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Enter Location"
//         name="location"
//         rules={[
//           {
//             required: false,
//             message: 'Please input your location here!',
//           },
//         ]}
//       >
//         <Input />
//         <span style={{ margin: '8px' }}>OR</span>
//         <Button type="primary" htmlType="submit">
//           Get current location
//         </Button>
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Submit Location
//         </Button>
//       </Form.Item>
//     </Form>
//   </>
// );

// export default Settings;


// import { Input, Space, Button, Card } from 'antd';
// import React, { useState, useEffect } from 'react';
// import searchWeatherAPIfetch from '../utils/searchWeatherAPIfetch';
// import weatherAPIfetch from '../utils/weatherAPIfetch';
// import { LocationContext, LocationProvider } from '../contexts/ContextLocation';
// const { Search } = Input

// const userNameSearch = (values) => {
//   localStorage.setItem('username', values);
//   console.log('Username submitted:', values);
// };

// const locationSearch = (value) => {
//   localStorage.setItem('location', value);
//   console.log('Location submitted:', value);
// }

// const Settings = ({ location, setLocation}) => {

//   const [weatherData, setWeatherData] = useState(null)

// const onSearch = (value) => { 
//   if (value.trim !== '') {
//     searchWeatherAPIfetch({ location: { location }, setLocation: { setLocation }, value })
//   }
// }

// useEffect(() => {
//   const handleStorage = () => {
//       // Gets weather data from local storage
//       const location = JSON.parse(localStorage.getItem('location'))
//       // Puts data from local storage into state
//       setLocation(location)
      
//       const weatherData = JSON.parse(localStorage.getItem('weather'))
//       setWeatherData(weatherData)
//   }

//   window.addEventListener('storage', handleStorage);

//   handleStorage(); 

//   return () => window.removeEventListener('storage', handleStorage);
// }, []);

// const getUserLocation = () => {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(success, error);
//   } else {
//       console.log('Gelocation not supported')
//   }
// }

// function success(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   const storedLocation = [{ latitude: latitude, longitude: longitude }]
//   setLocation({ storedLocation });

//   // save to local storage
//   localStorage.setItem('location', JSON.stringify(storedLocation));

//   // call the API with the stored location
//   weatherAPIfetch({ location: storedLocation, setLocation })
// }

// // If user location cannot be retrieved
// function error() {
//   console.log('Not able to retrieve location')
// }



//   return (
//     <>

// <Card title="Username" className="weatherCard">
//                     <div className="searchSection">
//                         <Search placeholder="Enter Username" onSearch={userNameSearch} style={{ flex: 1 }} />
//                         {/* <Button onClick={getUserLocation}>Use current location</Button> */}
//                     </div>
//                 </Card>
//                 <LocationProvider>
//                 <Card title="Location" className="weatherCard">
//                     <div className="searchSection">
//                         <Search placeholder="Enter Your Location" onSearch={onSearch} style={{ flex: 1 }} />
//                         <Button onClick={getUserLocation}>Use current location</Button>
//                     </div>
//                 </Card>
//                 </LocationProvider>
    
//     </>
//   )
// }

// export default Settings 

import { Input, Button, Card } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { LocationContext, LocationProvider } from '../contexts/ContextLocation';
import searchWeatherAPIfetch from '../utils/searchWeatherAPIfetch';
import weatherAPIfetch from '../utils/weatherAPIfetch';
const { Search } = Input;

const userNameSearch = (values) => {
  localStorage.setItem('username', values);
  console.log('Username submitted:', values);
};

const Settings = () => {
  const { setLocation } = useContext(LocationContext); // Import setLocation from the context

  const [weatherData, setWeatherData] = useState(null);

  const onSearch = (value) => {
    if (value.trim !== '') {
      searchWeatherAPIfetch({ location: { location }, setLocation: { setLocation }, value });
    }
  };

  useEffect(() => {
    const handleStorage = () => {
      // Gets weather data from local storage
      const location = JSON.parse(localStorage.getItem('location'));
      // Puts data from local storage into state
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

    // save to local storage
    localStorage.setItem('location', JSON.stringify(storedLocation));

    // call the API with the stored location
    weatherAPIfetch({ location: storedLocation, setLocation });
  }

  // If user location cannot be retrieved
  function error() {
    console.log('Not able to retrieve location');
  }

  return (
    <>
      <Card title="Username" className="weatherCard">
        <div className="searchSection">
          <Search placeholder="Enter Username" onSearch={userNameSearch} style={{ flex: 1 }} />
        </div>
      </Card>
      <LocationProvider>
        <Card title="Location" className="weatherCard">
          <div className="searchSection">
            <Search placeholder="Enter Your Location" onSearch={onSearch} style={{ flex: 1 }} />
            <Button onClick={getUserLocation}>Use current location</Button>
          </div>
        </Card>
      </LocationProvider>
    </>
  );
};

export default Settings;
