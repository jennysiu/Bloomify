import axios from 'axios'
const APIkey = "a69ab5ecb3b3c6e1ed7ac0baa202eabb"

const locationAPIfetch = () => {

    // Probably need to set this to localstorage rather than just usestate
    // const [location, setLocation] = useState(null);
    // const [weather, setWeather] = useState(null);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log('Gelocation not supported')
        }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        localStorage.setItem('location', JSON.stringify(latitude, longitude))

        // setLocation({ latitude, longitude });
        console.log(`Latitude: ${latitude} Longitude: ${longitude}`);

        const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`

        fetch(baseURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                // setWeather(data)
            })

            .catch((error) => {
                console.log("No searches found!");
            });
    }

    function error() {
        console.log('Not able to retrieve location')
        // TO DO: add in default location to show results from? London?
    }
}

    export default locationAPIfetch