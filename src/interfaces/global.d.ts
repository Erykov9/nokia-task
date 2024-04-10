type Forecast = {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezome: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
};

type Clouds = {
  all: number;
};

type Coord = {
  lon: number;
  lat: number;
};

type Main = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Sys = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type Wind = {
  speed: number;
  deg: number;
};

type City = {
  admin_name: string;
  capital: string;
  city: string;
  country: string;
  iso2: string;
  lat: string;
  lng: string;
  population: string;
  population_proper: string;
}



