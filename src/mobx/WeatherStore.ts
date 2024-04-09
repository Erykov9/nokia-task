import { makeAutoObservable } from "mobx";

class WeatherStore {
  contructor() {
    makeAutoObservable(this);
  };

  
};

export default new WeatherStore();