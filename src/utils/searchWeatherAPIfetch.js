const APIkey = "a69ab5ecb3b3c6e1ed7ac0baa202eabb";

const searchWeatherAPIfetch = ({ value }) => {

    const coordURL = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${APIkey}`

    fetch(coordURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getLatLon(data)
        })

    function getLatLon(data) {

        const latitude = data[0].lat
        const longitude = data[0].lon
        getWeatherToday(latitude, longitude)

        const storedLocation = [{ latitude: latitude, longitude: longitude }]

        localStorage.setItem('location', JSON.stringify(storedLocation));
    }

    function getWeatherToday(latitude, longitude) {

        const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`

        fetch(baseURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                localStorage.setItem('weather', JSON.stringify(data))
            })
    }

};

export default searchWeatherAPIfetch