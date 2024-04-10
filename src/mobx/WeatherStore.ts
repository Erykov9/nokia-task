import { action, makeAutoObservable } from "mobx";
import DataService from "../services/DataService";

export type SortValues = "temp" | "humidity"

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
  async getWeatherByCityName(name: string): Promise<Forecast | undefined> {
    const response = await DataService.getWeatherByCityName(name);
    if(response.data) {
      this.weather.push(response.data);
      return response.data;
    }
    return;
  }

  @action
  removeAllWeatherInfo(): void {
    this.weather = [];
  };

  @action
  sort(sortBy: SortValues, isAscending: boolean): void {
    if(this.weather.length !== 0) {
      if(isAscending) {
        const sortedWeather = this.weather.sort((a, b) => a.main[sortBy] - b.main[sortBy]);
        this.weather = sortedWeather;
      } else {
        const sortedWeather = this.weather.sort((a, b) => b.main[sortBy] - a.main[sortBy]);
        this.weather = sortedWeather;
      }
    }
  }
  
};

export default new WeatherStore();