// define storage object
const storage = new Storage();

const weatherLocation = storage.getLocationData();
//define weather objrct
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// define ui object
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather());

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  //get the weather again and paint the ui
  getWeather();
  //set to local storage
  storage.setLocationData(city, state);
  //close modal
  $("#locModal").modal("hide");
  e.preventDefault();
});

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      console.log(result);
      ui.Paint(result);
    })
    .catch((err) => console.log(err));
}
