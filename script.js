const apiKey = "a7cd134423540c6192a1c60adb560896";
const cityInput = document.getElementById('location');

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
            weather: [{description, id}],
            

        } = data;

    document.getElementById("todayTemp").textContent = (temp - 273.15).toFixed(1) + "°C";
    document.getElementById("todayFeelsLike").textContent = (feels_like - 273.15).toFixed(1) + "°C";
    document.getElementById("todayHumidity").textContent = humidity + "%";
    document.getElementById("todayDescription").textContent = description;

}

function getWeatherEmoji(weatherId) {

}

function displayError(mesage) {
    const errorDisplay = document.createElement("p");
     
}




