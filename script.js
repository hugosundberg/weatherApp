const apiKey = "a7cd134423540c6192a1c60adb560896";
const cityInput = document.getElementById('location');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

async function search() {
    const weatherData = await getWeatherData();
    displayWeatherInfo(weatherData);
}

async function getWeatherData() {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const {name: city, 
            main: {temp, feels_like, humidity},
            wind: {speed, deg},
            weather: [{description, id}]
        } = data;

    document.getElementById("todayTemp").textContent = (temp - 273.15).toFixed(1) + "°C";
    document.getElementById("todayFeelsLike").textContent = (feels_like - 273.15).toFixed(1) + "°C";
    document.getElementById("todayHumidity").textContent = humidity + "%";
    document.getElementById("todayWindSpeed").textContent = speed + " m/s " + calculateWindDirection(deg);
    document.getElementById("todayDescription").textContent = capitalizeWord(description);
}

function calculateWindDirection(degrees) {
    if (degrees >= 337.5 || degrees < 22.5) {
        return 'N'; // North
    } else if (degrees >= 22.5 && degrees < 67.5) {
        return 'NE'; // Northeast
    } else if (degrees >= 67.5 && degrees < 112.5) {
        return 'E'; // East
    } else if (degrees >= 112.5 && degrees < 157.5) {
        return 'SE'; // Southeast
    } else if (degrees >= 157.5 && degrees < 202.5) {
        return 'S'; // South
    } else if (degrees >= 202.5 && degrees < 247.5) {
        return 'SW'; // Southwest
    } else if (degrees >= 247.5 && degrees < 292.5) {
        return 'W'; // West
    } else if (degrees >= 292.5 && degrees < 337.5) {
        return 'NW'; // Northwest
    } else {
        return 'Invalid input'; // Invalid input if the degrees are not between 0 and 360
    }
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "";
        case (weatherId >= 300 && weatherId < 400):
            return "";
        case (weatherId >= 500 && weatherId < 600):
            return "";
        case (weatherId >= 600 && weatherId < 700):
            return "";
        case (weatherId >= 700 && weatherId < 800):
            return "";
        case (weatherId === 800):
            return "";
        case (weatherId >= 801 && weatherId < 810):
            return "";
        default:
            return "";
    }
}

function capitalizeWord(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(' ');

    // Map over each word, capitalize the first letter, and concatenate the rest of the word
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the array of words back into a single string
    return capitalizedWords.join(' ');
}

function getWeatherEmoji(weatherId) {

}

function displayError(mesage) {
    const errorDisplay = document.createElement("p");
     
}




