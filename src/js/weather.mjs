//Logic for weather
//first get the city and date values from the user submit

import { formatDate, toTitleCase } from "./util.mjs";

//some fine tuning by chatgpt
export function initWeather() {

  document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault(); //prevent auto-refresh on submit
    console.log("Form submit event fired");

    //get form values
    const rawCity= document.getElementById("city").value.trim();
    const rawState= document.getElementById("state").value.trim();
    const rawDate= document.getElementById("date").value;
    const apiKey = "f4f5709c3a974e43be4dab542cb448fa";

    const date = formatDate(rawDate);
    const city = toTitleCase(rawCity);
    const state = rawState.toUpperCase();

    console.log(city, state, date); //check if values are fetched

    fetchWeatherByCity(city, state, date, apiKey);
});

async function fetchWeatherByCity(city, state, date, apiKey) {
  const baseURL = "https://api.weatherbit.io/v2.0/forecast/daily";
  const url = `${baseURL}?city=${encodeURIComponent(city)},${encodeURIComponent(state)}&key=${apiKey}&units=I`; //I for Fahrenheit
  
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data); //check API structure
    displayWeatherData(data, date); // call displayWeatherData here
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
   }

function displayWeatherData(data, date) { 
  const weatherResult = document.getElementById("weatherResult"); //finds our correct date in the array.
  const forecast = data.data.find(forecast => forecast.valid_date === date);//access the first (& prob only) item in the data array


  if (forecast) {
    weatherResult.innerHTML = `
      <h3>Weather in ${forecast.city_name || "Unknown City"}, ${forecast.state_code || "Unknown State"} on ${date}:</h3>
      <p>Temperature: ${forecast.temp || "N/A"} °F</p><Weather: ${forecast.weather.description || "N/A"}</p>
      <p>Wind Speed: ${forecast.wind_spd || "N/A"}m/s</p>`;

  } else {
    weatherResult.innerHTML = `<p>No weather data available for the specified date.<p>`
  }
  }
}
