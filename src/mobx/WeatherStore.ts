import { action, makeAutoObservable, toJS } from "mobx";
import DataService from "../services/DataService";

class WeatherStore {
  public weather: Forecast[] = [];

  constructor() {
    makeAutoObservable(this);
  };
  
  @action
  async getWeather(lat: string, lon: string): Promise<Forecast | undefined> {
    const response = await DataService.getWeatherByCityParams(lat, lon);
    if(response.data) {
      this.weather.push(response.data);
      return response.data;
    }
    return;
  };

  @action
  removeAllWeatherInfo(): void {
    this.weather = [];
  };
  
};

export default new WeatherStore();