import './style.css';
import Composite from "../Composite";
import {convertDateToVerbose} from "../../utils/date-utils";

export default class DayForecast extends Composite {
  constructor (data) {
    super(data);
    this.template = `
      <div class="day-forecast">
        <div class="day-forecast__week-day center">Сегодня</div>
        <div class="day-forecast__date center">${convertDateToVerbose(data.date)}</div>
        <div class="day-forecast__icon center">Место иконки</div>
        <div class="day-forecast__temperature">
          <div class="day-forecast__temperature-day center">днем ${this.data.temperature.day}</div>
          <div class="day-forecast__temperature-night center">ночью ${this.data.temperature.night}</div>
        </div>
        <div class="day-forecast__precipitation center">без осадков</div>
      <div>
    `;
  }
}