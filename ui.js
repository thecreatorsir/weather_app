class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.pressure = document.querySelector("#w-pressure");
    this.feels_like = document.querySelector("#w-feels-like");
    this.wind = document.querySelector("#w-wind");
  }

  Paint(result) {
    this.location.innerHTML = `${result.location.name},${result.location.region}`;
    this.desc.innerHTML = `${result.current.weather_descriptions}`;
    this.string.innerHTML = `temperature: ${result.current.temperature}`;
    this.icon.setAttribute("src", result.current.weather_icons);
    this.humidity.innerHTML = `humidity: ${result.current.humidity}`;
    this.pressure.innerHTML = `pressure: ${result.current.pressure}`;
    this.feels_like.innerHTML = `feels like: ${result.current.feelslike}`;
    this.wind.innerHTML = `wind speed: ${result.current.wind_speed}`;
  }
}
