//Logic for weather
//first get the city and date values from the user submit



//some fine tuning by chatgpt
 export function initWeather() {

   document.getElementById("weatherForm").addEventListener("submit", function(event) {
     event.preventDefault(); //prevent auto-refresh on submit
     console.log("Form submit event fired");
  
     //get form values
     const city= document.getElementById("city").value.trim();
     const state= document.getElementById("state").value.trim();
     const date= document.getElementById("date").value;
     const apiKey = "f4f5709c3a974e43be4dab542cb448fa";

     fetchWeatherByCity(city, state, date, apiKey);
   });

   async function fetchWeatherByCity(city, state, date, apiKey) {
    const baseURL = "https://api.weatherbit.io/v2.0/current";
    const url = `${baseURL}?city=${encodeURIComponent(city)},${encodeURIComponent(state)}&key=${apiKey}&lang=en&units=M&include=M`;
    
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      displayWeatherData(data, date); // call displayWeatherData here
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
   }

   function displayWeatherData(data, date) { 
    const weatherResult = document.getElementById("weatherResult");
    const forecast = data.data.find(forecast => forecast.valid_date === date);//access the first (& prob only) item in the data array


    if (forecast) {
      weatherResult.innerHTML = `
        <h3>Weather in ${weather.city_name}, ${weather.state_code} on ${date}:</h3>
        <p>Temperature: ${weather.temp} °F</p><Weather: ${weather.weather.description}</p>
        <p>Wind Speed: ${weather.wind_spd}m/s</p>`;

    } else {
      weatherResult.innerHTML = `<p>No weather data available for the specified date.<p>`
    }
  }
}


//minutely instead of M
