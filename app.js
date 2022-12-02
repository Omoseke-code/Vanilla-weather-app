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
function firstTemperature(response) {
  let tempElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let forecast = document.querySelector("#forecast");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let date = document.querySelector("#time");
  date.innerHTML = formatDate(response.data.daily[0].time * 1000);
  forecast.innerHTML = response.data.daily[0].condition.description;
  cityElement.innerHTML = response.data.city;
  wind.innerHTML = Math.round(response.data.daily[0].wind.speed);
  humidity.innerHTML = response.data.daily[0].temperature.humidity;
  tempElement.innerHTML = Math.round(response.data.daily[0].temperature.day);
}
let apiKey = "2cf2304b8354b8ea17a2e89be11364ot";
let apiUrl =
  "https://api.shecodes.io/weather/v1/forecast?query=Lagos&key=2cf2304b8354b8ea17a2e89be11364ot&units=metric";
axios.get(apiUrl).then(firstTemperature);
