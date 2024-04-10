import WeatherComponent from '../../components/WeatherComponent/WeatherComponent';
import { Route, Routes } from 'react-router';
const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherComponent/>}/>
      </Routes>
    </div>
  )
};

export default MainPage;