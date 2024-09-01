const apiKey = "a7cd134423540c6192a1c60adb560896";
const cityInput = document.getElementById('location');


async function getWeatherData() {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    return await response.json();

}

function displayWeatherInfor(data) {
    const {name: city, 
            main: {tenp, humidity},
            weather: [{description, id}]} = data;

    console.log(data)
}

function getWeatherEmoji(weatherId) {

}

function displayError(mesage) {
    const errorDisplay = document.createElement("p");
     
}




