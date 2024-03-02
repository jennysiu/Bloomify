const APIkey = "a69ab5ecb3b3c6e1ed7ac0baa202eabb";

// uses location prop passeed down from weatherwidget
const weatherAPIfetch = ({ location }) => {

    const latitude = location[0].latitude
    const longitude = location[0].longitude

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

    export default weatherAPIfetch