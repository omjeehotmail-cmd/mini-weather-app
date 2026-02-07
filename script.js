const apiKey = "beacfce018b74b4bb97143429260502";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (city === "") {
        resultDiv.innerHTML = "⚠ Please enter a city name";
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = "❌ City not found";
                return;
            }

            resultDiv.innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>🌡 Temperature: ${data.current.temp_c} °C</p>
                <p>☁ Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="weather icon">
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = "⚠ Error fetching data";
            console.error(error);
        });
}