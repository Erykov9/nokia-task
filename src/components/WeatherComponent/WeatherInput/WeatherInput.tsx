import { useState } from "react";
import { Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import WeatherStore from "../../../mobx/WeatherStore";
import "react-bootstrap-typeahead/css/Typeahead.css";
import cities from "cities.json";

const WeatherInput = () => {
  const [selected, setSelected] = useState<City[]>([]);
  const [error, setError] = useState<boolean>(false);

  const submitHandler = async (): Promise<void> => {
    setError(false);
    removeHandler();

    if (selected.length !== 0) {
      for (let w in selected) {
        const lat = selected[w].lat;
        const lng = selected[w].lng;
        await WeatherStore.getWeather(lat, lng);
      }

      return;
    }

    setError(true);
    return;
  };

  const removeHandler = () => {
    WeatherStore.removeAllWeatherInfo();
    setSelected([]);
  };

  return (
    <div>
      {error && <span>You have to fill this field</span>}
      <Typeahead
        id="cities"
        labelKey="name"
        options={cities}
        onChange={(s) => {
          setSelected(s as City[]);
        }}
        multiple
        selected={selected}
      />
      <Button className="mt-2" onClick={submitHandler}>
        Check forecast
      </Button>
      <Button className="mt-2 ms-2" variant="danger" onClick={removeHandler}>Remove all</Button>
    </div>
  );
};

export default WeatherInput;
