import WeatherInput from './WeatherInput/WeatherInput';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';

const WeatherComponent = () => {
  return (
    <div >
      <h4>Choose city:</h4>
      <span style={{color: 'brown', fontSize: 12}}>Only poland</span>
      <WeatherInput/>
      <WeatherDisplay/>
    </div>
  );
};

export default WeatherComponent;