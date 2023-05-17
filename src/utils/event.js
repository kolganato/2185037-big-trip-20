import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import duration from 'dayjs/plugin/duration.js';
dayjs.extend(utc);
dayjs.extend(duration);

const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_FORMAT_FORM = 'DD/MM/YY HH:mm';
const DATE_FORMAT_SCHEDULE = 'DD/MM/YYTHH:mm';
const DAY_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';
const DAY_DURATION_FORMAT = 'D[D] HH[H] m[M]';
const HOUR_DURATION_FORMAT = 'HH[H] m[M]';
const MINUTE_DURATION_FORMAT = 'm[M]';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeEventDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function humanizeEventDateShedule(date) {
  return date ? dayjs(date).format(DATE_FORMAT_SCHEDULE) : '';
}

function humanizeEventDateForm(date) {
  return date ? dayjs(date).format(DATE_FORMAT_FORM) : '';
}

function humanizeEventDay(day) {
  return day ? dayjs(day).format(DAY_FORMAT) : '';
}

function humanizeEventTime(time) {
  return time ? dayjs(time).format(TIME_FORMAT) : '';
}

function humanizeEventDurationTime(dateFrom, dateTo){
  const timeDiffMs = dayjs(dateTo).diff(dateFrom);

  if(dayjs.duration(timeDiffMs).asDays() > 1){
    return dayjs(timeDiffMs).utc().format(DAY_DURATION_FORMAT);
  }

  if(dayjs.duration(timeDiffMs).asMinutes() > 59){
    return dayjs(timeDiffMs).utc().format(HOUR_DURATION_FORMAT);
  }

  return dayjs(timeDiffMs).utc().format(MINUTE_DURATION_FORMAT);
}

function isEventFuture(event){
  return dayjs(event).isBefore(event.dateFrom);
}

function isEventPast(event){
  return dayjs(event).isAfter(event.dateTo);
}

function isEventPresent(event){
  return (dayjs(event).isAfter(event.dateFrom) && dayjs(event).isBefore(event.dateTo));
}

export {
  getRandomArrayElement,
  humanizeEventDateShedule,
  humanizeEventDateForm,
  humanizeEventDate,
  humanizeEventDay,
  humanizeEventTime,
  humanizeEventDurationTime,
  isEventFuture,
  isEventPast,
  isEventPresent
};
