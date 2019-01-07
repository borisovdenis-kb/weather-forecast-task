const months = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

const daysOfWeek = [
  'Понедельник', "Вторник", "Среда", "Четверг",
  "Пятница", "Суббота", "Воскресенье"
];

export const convertDateToVerbose = dateMs => {
  const date = new Date(dateMs);
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const convertDateToDayOfWeek = dateMs => {
  const date = new Date(dateMs);
  return daysOfWeek[date.getDay()];
};