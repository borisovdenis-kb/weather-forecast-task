import './style.css';
import Composite from "../Composite";
import {convertDateToVerbose, convertDateToDayOfWeek} from "../../utils/date-utils";
import {getIconByForecast, getDescriptionByForecast} from "../../utils/weather-utils";

export default class DayForecast extends Composite {
  constructor (data) {
    super(data);
    this.template = `
      <div class="day-forecast">
        <div class="day-forecast__week-day center">${convertDateToDayOfWeek(this.data.date)}</div>
        <div class="day-forecast__date center">${convertDateToVerbose(this.data.date)}</div>
        <div class="day-forecast__icon-container center">
          <img class="day-forecast__icon" src="${getIconByForecast(this.data)}">
        </div>
        <div class="day-forecast__temperature">
          <div class="day-forecast__temperature-day center">днем ${this.data.temperature.day}°</div>
          <div class="day-forecast__temperature-night center">ночью ${this.data.temperature.night}°</div>
        </div>
        <div class="day-forecast__precipitation center">${getDescriptionByForecast(this.data)}</div>
      <div>
    `;
  }
}