export function updateUI(weatherData) {
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const weatherDesc = document.getElementById("weather-desc");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("wind-speed");

    cityName.textContent = weatherData.name;
    temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
    weatherDesc.textContent = `Condition: ${weatherData.weather[0].description}`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    weatherInfo.classList.remove("hidden");
}

export function showError(errorMessage) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = errorMessage;
    errorElement.classList.remove("hidden");
}
