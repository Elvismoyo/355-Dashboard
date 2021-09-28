/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
searchCity = () => {
    var city = document.getElementById('city-input').value;
    if(city == 0)
    city = "Queens";
    getWeatherData(city)
    .then((res)=>{
        console.log(res);
        
        
      showWeatherData(res);
    }).catch((error)=>{
      console.log(error);
      console.log("Something happend");
    })
  }

  function search(e){
    if(e.keyCode == 13)
    searchCity();
  }
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}



/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("weather-output").classList.add('visible');
 
}
