import { makeAutoObservable, toJS } from "mobx";
import DataService from "../services/DataService";

class WeatherStore {
  public weather = {};

  contructor() {
    makeAutoObservable(this);
  };
  
  async getWeather(lat: number, lon: number) {
    const response = await DataService.getWeatherByCityParams(lat, lon);
    if(response) {
      this.weather = response.data;
      console.log(toJS(response.data))
    }
  };
  
};

export default new WeatherStore();