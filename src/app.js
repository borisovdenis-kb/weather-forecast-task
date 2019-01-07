import weatherForecastData from './data';
import DayForecast from './components/DayForecast/DayForecast';
import Carousel from "./components/Carousel/Carousel";

const main = () => {
  const carouselContainer = document.getElementsByClassName('main-container__carousel-container')[0];
  const carousel = new Carousel();

  weatherForecastData.forEach(data => {
    let dayForecast = new DayForecast(data);
    carousel.addItem(dayForecast);
  });

  const carouselElement = carousel.render();
  carouselContainer.appendChild(carouselElement);

  defineCarouselShift(carousel);
};

const defineCarouselShift = (carouselComponent) => {
  const leftShiftBtn = document.getElementsByClassName('main-container__left-shift')[0];
  const rightShiftBtn = document.getElementsByClassName('main-container__right-shift')[0];

  leftShiftBtn.addEventListener('click', () => {
    carouselComponent.leftShift();
  });

  rightShiftBtn.addEventListener('click', () => {
    carouselComponent.rightShift();
  });
};

main();
