import weatherForecastData from './data';
import DayForecast from './components/DayForecast/DayForecast';

const main = () => {
  const mainContainer = document.getElementById('main-container');
  const dayForecast = new DayForecast(weatherForecastData[0]);
  const dayForecastElement = dayForecast.render();

  mainContainer.appendChild(dayForecastElement);
};

main();
