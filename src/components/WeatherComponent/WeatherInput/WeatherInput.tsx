import cities from "../../../vendor/cities.json";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import WeatherStore from "../../../mobx/WeatherStore";
import "react-bootstrap-typeahead/css/Typeahead.css";

const WeatherInput = () => {
  const [selected, setSelected] = useState<City[]>([]);
  const [error, setError] = useState<boolean>(false);

  const submitHandler = async (): Promise<void> => {
    setError(false);
    if(selected.length !== 0) {
      for(let w in selected) {
        const lat = selected[w].lat;
        const lng = selected[w].lng;
        await WeatherStore.getWeather(lat, lng)
      }

      return;
    }

    setError(true);
    return;
  };
  
  return (
    <div>
      {error && <span>You have to fill this field</span>}
      <Typeahead
        id="cities"
        labelKey="city"
        options={cities}
        onChange={(s: any) => {
          setSelected(s);
        }}
        multiple
        selected={selected}
      />
      <Button className="mt-2" onClick={submitHandler}>Check forecast</Button>
    </div>
  );
};

export default WeatherInput;
