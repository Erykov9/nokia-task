import WeatherInput from './WeatherInput/WeatherInput';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';

const WeatherComponent = () => {
  return (
    <div >
      <h4>Choose city/cities:</h4>
      <WeatherInput/>
      <WeatherDisplay/>
    </div>
  );
};

export default WeatherComponent;