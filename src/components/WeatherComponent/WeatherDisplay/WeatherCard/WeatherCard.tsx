import { Card, ListGroup } from "react-bootstrap";
import moment from "moment";
import "./WeatherCard.scss";

interface IWeatherCardProps {
  weather: Forecast;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ weather }) => {
  const sunrise = moment.unix(weather.sys.sunrise).utc().format("HH:mm");
  const sunset = moment.unix(weather.sys.sunset).utc().format("HH:mm");

  const celciusConverter = (temp: number) => {
    return (temp - 273.15).toFixed(1);
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Sunrise: <span>{sunrise}</span> / Sunset: <span>{sunset}</span></ListGroup.Item>
        <ListGroup.Item>Clouds: <span>{weather.clouds.all}%</span></ListGroup.Item>
        <ListGroup.Item>Temp.: <span>{celciusConverter(weather.main.temp)}°C</span> / Min. temp.: <span>{celciusConverter(weather.main.temp_min)}°C</span> / Max. temp.: <span>{celciusConverter(weather.main.temp_max)}°C</span> / Percertible temp.: <span>{celciusConverter(weather.main.feels_like)}°C</span></ListGroup.Item>
        <ListGroup.Item>Humidity: <span>{weather.main.humidity}%</span></ListGroup.Item>
        <ListGroup.Item>Wind speed: <span>{weather.wind.speed}m/s</span></ListGroup.Item>
        <ListGroup.Item>Country: <span>{weather.sys.country}</span></ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default WeatherCard;
