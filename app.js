function formatDate(timestamp) {
  //calculate the date
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function formatFutureDates(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];
  let day = days[date.getDay()];
  return `${day}`;
}
function firstForecast(response) {
  let tempElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let forecast = document.querySelector("#forecast");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let date = document.querySelector("#time");
  let icon = document.querySelector("#topicon");

  celsiusTemp = response.data.daily[0].temperature.day;

  icon.setAttribute("src", response.data.daily[0].condition.icon_url);
  date.innerHTML = formatDate(response.data.daily[0].time * 1000);
  forecast.innerHTML = response.data.daily[0].condition.description;
  cityElement.innerHTML = response.data.city;
  wind.innerHTML = Math.round(response.data.daily[0].wind.speed);
  humidity.innerHTML = response.data.daily[0].temperature.humidity;
  tempElement.innerHTML = Math.round(celsiusTemp);
}
function secondForecast(response) {
  let temp = document.querySelector("#temp1");
  let date = document.querySelector("#date1");
  let icon = document.querySelector("#icon1");
  icon.setAttribute("src", response.data.daily[1].condition.icon_url);
  date.innerHTML = formatFutureDates(response.data.daily[1].time * 1000);
  temp.innerHTML = Math.round(response.data.daily[1].temperature.day);
}
function thirdForecast(response) {
  let temp = document.querySelector("#temp2");
  let date = document.querySelector("#date2");
  let icon = document.querySelector("#icon2");
  icon.setAttribute("src", response.data.daily[2].condition.icon_url);
  date.innerHTML = formatFutureDates(response.data.daily[2].time * 1000);
  temp.innerHTML = Math.round(response.data.daily[2].temperature.day);
}
function fourthForecast(response) {
  let temp = document.querySelector("#temp3");
  let date = document.querySelector("#date3");
  let icon = document.querySelector("#icon3");
  icon.setAttribute("src", response.data.daily[3].condition.icon_url);
  date.innerHTML = formatFutureDates(response.data.daily[3].time * 1000);
  temp.innerHTML = Math.round(response.data.daily[3].temperature.day);
}
function fifthForecast(response) {
  let temp = document.querySelector("#temp4");
  let date = document.querySelector("#date4");
  let icon = document.querySelector("#icon4");
  icon.setAttribute("src", response.data.daily[4].condition.icon_url);
  date.innerHTML = formatFutureDates(response.data.daily[4].time * 1000);
  temp.innerHTML = Math.round(response.data.daily[4].temperature.day);
}
function search(city) {
  let apiKey = "2cf2304b8354b8ea17a2e89be11364ot";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=2cf2304b8354b8ea17a2e89be11364ot&units=metric`;
  axios.get(apiUrl).then(firstForecast);
  axios.get(apiUrl).then(secondForecast);
  axios.get(apiUrl).then(thirdForecast);
  axios.get(apiUrl).then(fourthForecast);
  axios.get(apiUrl).then(fifthForecast);
}
function handlesubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}
function showFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");

  //remove active class from celsius link
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let f = (celsiusTemp * 9) / 5 + 12;
  temp.innerHTML = Math.round(f);
}
function showCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");

  //add active class from celsius link
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");

  temp.innerHTML = Math.round(celsiusTemp);
}
let apiKey = "2cf2304b8354b8ea17a2e89be11364ot";
let city = "Lagos";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=2cf2304b8354b8ea17a2e89be11364ot&units=metric`;
axios.get(apiUrl).then(firstForecast);
axios.get(apiUrl).then(secondForecast);
axios.get(apiUrl).then(thirdForecast);
axios.get(apiUrl).then(fourthForecast);
axios.get(apiUrl).then(fifthForecast);
let form = document.querySelector("#search-form");
form.addEventListener("submit", handlesubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

let celsiusTemp = null;
//search("Lagos")
