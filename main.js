function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('weather-info').innerHTML = 'City not found!';
            } else {
                const weatherInfo = `
                    <p>City: ${data.name}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            document.getElementById('weather-info').innerHTML = 'Error fetching data!';
            console.error('Error:', error);
        });
}
