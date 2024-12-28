import { fetchWeatherData } from "../data/weatherService.js";

export async function getWeather(city) {
    if (!city.trim()) {
        throw new Error("City name cannot be empty");
    }

    return await fetchWeatherData(city);
}
