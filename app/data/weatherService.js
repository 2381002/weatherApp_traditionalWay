export async function fetchWeatherData(city) {
    const API_KEY = '47b9b97958f166a8513c3156ea0b9e25';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        
        // Debugging: Log response status
        console.log("Response Status:", response.status);

        if (!response.ok) {
            const errorData = await response.json(); // Parsing JSON Error
            console.error("API Error:", errorData); // Debugging: Tampilkan error dari API
            throw new Error(errorData.message || "City not found");
        }

        const data = await response.json(); // Parsing JSON jika berhasil
        console.log("API Response Data:", data); // Debugging: Log response data
        return data;
    } catch (error) {
        console.error("Fetch Error:", error); // Debugging: Log error jika fetch gagal
        throw new Error("Failed to fetch weather data");
    }  
}