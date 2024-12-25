const API_key = "b12624dd5e1945192f57ac1b41582e9e"
const API_URL= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(API_URL+city+`&appid=${API_key}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // weather status icons
    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://www.svgrepo.com/show/276635/cloudy-cloud.svg"
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "https://www.svgrepo.com/show/279144/rain-forecast.svg"
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://www.svgrepo.com/show/22289/drizzle.svg"
    }
    else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "https://www.svgrepo.com/show/396043/cloud-with-snow.svg"
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "https://www.svgrepo.com/show/491949/weather-color-sun-cloud.svg"
    }
    else (weatherIcon.src = "https://www.svgrepo.com/show/407540/sun.svg")  // clear weather → svg = sun
}

// clicking option
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
// enter key option
searchBox.addEventListener("keypress", function(event) {
    if(event.key=="Enter")
        checkWeather(searchBox.value);
})

checkWeather(city);