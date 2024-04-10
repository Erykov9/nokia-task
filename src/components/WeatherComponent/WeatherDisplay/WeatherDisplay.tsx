import { observer } from "mobx-react";
import WeatherStore, { SortValues } from "../../../mobx/WeatherStore";
import { Col, Form, Row } from "react-bootstrap";
import WeatherCard from "./WeatherCard/WeatherCard";

const WeatherDisplay = observer(() => {
  const { weather } = WeatherStore;

  const sortHandler = (e: string) => {
    const sortBy: string = e.split(":")[0];
    const isAscending: boolean = e.split(":")[1] === "ascending" ? true : false;
    WeatherStore.sort(sortBy as SortValues, isAscending);
  }

  if (weather.length === 0) {
    return <></>;
  }

  return (
    <Row className="mt-3">
      <Row>
        <Col>
        <h4>Filters</h4>
        <Form.Select
          aria-label="Default select example"
          className="mb-2 mt-2"
          onChange={(e) => sortHandler(e.target.value)}
        >
          <option>Sort by</option>
          <option value="temp:ascending">Temperature: Ascending</option>
          <option value="temp:descending">Temperature: Descending</option>
          <option value="humidity:ascending">Humidity: Ascending</option>
          <option value="humidity:descending">Humidity: Descending</option>
        </Form.Select>
        </Col>
      </Row>

      <Row className="d-flex justify-content-between">
        {weather.map((weather) => (
          <Col xs={12} key={weather.name}><WeatherCard weather={weather} /></Col>
        ))}
      </Row>
    </Row>
  );
});

export default WeatherDisplay;
