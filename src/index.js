let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let dateNow = document.querySelector("#datenow");
let timeNow = document.querySelector("#timenow");
timeNow.innerHTML = `${hours}:${minutes}`;
dateNow.innerHTML = `${day}, ${month} ${date}`;

function showCurrent(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let apiKey = "6643c7326a4c2a38838264a28531d97e";
  let openWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(openWeatherApi).then(showCurrent);
}
function handleYourCity(event) {
  event.preventDefault();
  let city = document.querySelector(".enterCityField").value;
  searchCity(city);
}

let cityForm = document.querySelector("#cityInput");
cityForm.addEventListener("submit", handleYourCity);

searchCity("London");

function getMyPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "6643c7326a4c2a38838264a28531d97e";
  let openWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(openWeatherApi).then(showCurrent);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getMyPosition);
}

let currentLocation = document.querySelector("#current-city-button");
currentLocation.addEventListener("click", getCurrentLocation);

/*function myPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "6643c7326a4c2a38838264a28531d97e";
  let openWeatherApi = `https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(openWeatherApi).then(yourCity, showTemp);
}


function convertToFarenheit(event) {
  event.preventDefault();
  let alternativeTempF = document.querySelector("#current-temp");
  let temperature = alternativeTempF.innerHTML;
  temperature = Number(temperature);
  alternativeTempF.innerHTML = Math.round((temperature * 9) / 5 + 32);
}*/

/*let toFarenheit = document.querySelector("#farenheit");
toFarenheit.addEventListener("click", convertToFarenheit);

function convertToCelcius(event) {
  event.preventDefault();
  let alternativeTempC = document.querySelector("#current-temp");
  let temperature = alternativeTempC.innerHTML; // taking current-temp in HTML as a string
  temperature = Number(temperature); //convering a string to number
  alternativeTempC.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}

let toCelcius = document.querySelector("#celcius");
toCelcius.addEventListener("click", convertToCelcius);*/
