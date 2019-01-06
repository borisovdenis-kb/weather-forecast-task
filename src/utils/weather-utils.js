export const getIconByForecast = data => {
  if (data.isClear) {
    return 'assets/icons/sun.png';
  } else if (data.cloudiness.isRain && data.cloudiness.isSnow) {
    return 'assets/icons/snowing-rain.png';
  } else if (data.cloudiness.isRain && !data.cloudiness.isSnow) {
    return 'assets/icons/rain.png';
  } else if (!data.cloudiness.isRain && data.cloudiness.isSnow) {
    return 'assets/icons/snowing.png';
  } else if (!data.cloudiness.isRain && !data.cloudiness.isSnow) {
    return 'assets/icons/cloudy.png';
  }
};

export const getDescriptionByForecast = data => {
  if (data.isClear) {
    return 'без осадков';
  } else if (data.cloudiness.isRain && data.cloudiness.isSnow) {
    return 'дождь со снегом';
  } else if (data.cloudiness.isRain && !data.cloudiness.isSnow) {
    return 'дождь';
  } else if (!data.cloudiness.isRain && data.cloudiness.isSnow) {
    return 'снег';
  } else if (!data.cloudiness.isRain && !data.cloudiness.isSnow) {
    return 'облачно';
  }
};