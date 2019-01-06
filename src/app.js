import weatherForecastData from './data';
import DayForecast from './components/DayForecast/DayForecast';

const main = () => {
  const mainContainer = document.getElementById('main-container');

  weatherForecastData.forEach(data => {
    let dayForecast = new DayForecast(data);
    let dayForecastElement = dayForecast.render();

    mainContainer.appendChild(dayForecastElement);
  });
};

main();
