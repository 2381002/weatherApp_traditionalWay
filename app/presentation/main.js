import { getWeather } from "../domain/weatherUseCase.js";
import { updateUI, showError } from "./uiController.js";

document.getElementById("search-btn").addEventListener("click", async () => {
    const cityInput = document.getElementById("city-input");
    const errorMessage = document.getElementById("error-message");
    const weatherInfo = document.getElementById("weather-info");

    errorMessage.classList.add("hidden");
    weatherInfo.classList.add("hidden");

    try {
        const weatherData = await getWeather(cityInput.value);
        updateUI(weatherData);
    } catch (error) {
        showError(error.message);
    }
});
