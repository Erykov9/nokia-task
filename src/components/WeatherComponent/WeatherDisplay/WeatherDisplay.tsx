import { observer } from "mobx-react";
import WeatherStore from "../../../mobx/WeatherStore";
import { Row } from "react-bootstrap";

const WeatherDisplay = observer(() => {
  const { weather } = WeatherStore;

  return (
    <Row className="mt-3">
      <h3>WeatherDisplay</h3>
      {weather.length !== 0 && weather.map(weather => <p key={weather.base}>2</p>)}
      
    </Row>
  );
});

export default WeatherDisplay;