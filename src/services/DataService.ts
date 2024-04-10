import axios from 'axios';

class DataService {
  private readonly API_KEY = process.env.REACT_APP_API_KEY;

  async getWeatherByCityParams(lat: string, lon: string) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}36&appid=${this.API_KEY}`);
      return response;
    } catch(error) {
      throw new Error("Forecast fetch failed" + error);
    }
  };

  async getWeatherByCityName(city: string) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}`);
      return response;
    } catch(error) {
      throw new Error("Forecast fetch failed" + error)
    }
  };

};

export default new DataService();