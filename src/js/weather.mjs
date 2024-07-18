//Logic for weather

//first get the city and date values from the user submit
//some fine tuning by chatgpt
 export function initWeather() {

   document.getElementById("weatherForm").addEventListener("submit", function(event) {
     event.preventDefault(); //get rid of auto refresh page on submit
     console.log("Form submit event fired");
  
     //get form values
     const city= document.getElementById("activityCity").value;
     const state= document.getElementById("activityState").value;
     const date= document.getElementById("activityDate").value;
     const apiKey = "f4f5709c3a974e43be4dab542cb448fa";

     fetchWeatherByCity(city, "", apiKey);
   });

   async function fetchWeatherByCity(city, state= "", apiKey) {
    const baseURL = "https://api.weatherbit.io/v2.0/current";
    const url = `${baseURL}?city=${encodeURIComponent(city)}${state ? `,${encodeURIComponent(state)}` : ''}${country ? `&country=${encodeURIComponent(country)}` : ''}&key=${apiKey}&lang=en&units=M&include=minutely`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
   }

   function displayWeatherData(data, date) {
    const weatherResult = document.getElementById("weatherResult");
    const weather = data.data[0]; //access the first (& prob only) item in the data array

    weatherResult.innerHTML = `
    <h3>Weather in ${weather.city_name}, ${weather.state_code} on ${date}:</h3>
    <p>Temperature: ${weather.temp} °F</p><Weather: ${weather.weather.description}</p>
    <p>Wind Speed: ${weather.wind_spd}m/s</p>`;
  }
}


