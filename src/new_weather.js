import newWeatherPrint from './new_weather_print';

export default async function newWeather() {
  document.querySelector('.weatherContainer').innerHTML = '';
  document.querySelector('.weatherWeekContainer').innerHTML = '';
  document.querySelector('.loadingWheel').classList.toggle('none');
  try {
    const input = document.querySelector('input').value;
    const responseMetric = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=4da0b70995463ed570d9e1fbbbd99315`);
    const weatherDataMetric = await responseMetric.json();
    const coordinates = weatherDataMetric.coord;
    const weekResponseMetric = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely&appid=4da0b70995463ed570d9e1fbbbd99315`);
    const weekResponseImperial = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&exclude=minutely&appid=4da0b70995463ed570d9e1fbbbd99315`);
    const weekDataMetric = await weekResponseMetric.json();
    const weekDataImperial = await weekResponseImperial.json();
    newWeatherPrint(weekDataMetric, weekDataImperial, weatherDataMetric);
  } catch (error) {
    document.querySelector('.weatherContainer').innerText = 'No Results Found.';
  }
  document.querySelector('.loadingWheel').classList.toggle('none');
}
