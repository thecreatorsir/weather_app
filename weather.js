class Weather {
  constructor(city, state) {
    this.apiKey = "41606eefd8ca0c1865ae414f5fab57d5";
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const getResponse = await fetch(
      `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city},${this.state}`
    );

    const dataResponse = await getResponse.json();

    return dataResponse;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
