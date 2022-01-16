import { format, fromUnixTime } from 'date-fns';
import weekToggle from './week_toggle';

export default function newWeatherPrint(metric, imperial, dataWithName) {
  const weatherContainer = document.querySelector('.weatherContainer');
  const weatherWeekContainer = document.querySelector('.weatherWeekContainer');
  for (let i = 0; i < metric.daily.length; i += 1) {
    const weatherDetailsContainer = document.createElement('div');
    const weatherDataContainer = document.createElement('div');
    const weatherIcon = document.createElement('img');
    const temperatureC = document.createElement('div');
    const temperatureF = document.createElement('div');
    const locationText = document.createElement('div');
    const cityText = document.createElement('span');
    const descriptionText = document.createElement('span');
    const timeText = document.createElement('span');
    const otherDataContainer = document.createElement('div');
    const metricWindSpeed = document.createElement('span');
    const imperialWindSpeed = document.createElement('span');
    const humidityText = document.createElement('span');

    timeText.classList = 'timeText';
    metricWindSpeed.classList = 'windSpeed';
    metricWindSpeed.id = 'metricWindSpeed';
    imperialWindSpeed.classList = 'windSpeed none';
    imperialWindSpeed.id = 'imperialWindSpeed';
    humidityText.classList = 'humidityText';
    otherDataContainer.classList = 'otherDataContainer';
    otherDataContainer.classList = 'otherDataContainer';
    descriptionText.classList = 'descriptionText';
    cityText.classList = 'cityText';
    locationText.classList = 'locationText';
    temperatureC.classList = 'temperature';
    temperatureC.id = 'celcius';
    temperatureF.classList = 'temperature none';
    temperatureF.id = 'fahrenheit';
    weatherDetailsContainer.classList = 'weatherDetailsContainer';
    weatherDataContainer.classList = 'weatherDataContainer';
    weatherIcon.src = `http://openweathermap.org/img/wn/${metric.daily[i].weather[0].icon}@2x.png`;
    temperatureC.innerText = `${Math.round(metric.daily[i].feels_like.day)}°`;
    temperatureF.innerText = `${Math.round(imperial.daily[i].feels_like.day)}°`;
    cityText.innerText = dataWithName.name;
    descriptionText.innerText = metric.daily[i].weather[0].description;
    metricWindSpeed.innerText = `Wind Speed: ${Math.round(metric.daily[i].wind_speed)} km/h`;
    imperialWindSpeed.innerText = `Wind Speed: ${Math.round(imperial.daily[i].wind_speed)} mph`;
    humidityText.innerText = `Humidity: ${metric.daily[i].humidity}%`;
    timeText.innerText = format(new Date(fromUnixTime(metric.daily[i].dt)), 'iiii p');

    locationText.appendChild(cityText);
    locationText.appendChild(timeText);
    locationText.appendChild(descriptionText);
    weatherDataContainer.appendChild(weatherIcon);
    weatherDataContainer.appendChild(temperatureC);
    weatherDataContainer.appendChild(temperatureF);
    otherDataContainer.appendChild(metricWindSpeed);
    otherDataContainer.appendChild(imperialWindSpeed);
    otherDataContainer.appendChild(humidityText);
    weatherDataContainer.appendChild(otherDataContainer);
    weatherDetailsContainer.appendChild(weatherDataContainer);
    weatherDetailsContainer.appendChild(locationText);
    weatherContainer.appendChild(weatherDetailsContainer);

    // Weather Week Container
    const weatherDayContainer = document.createElement('div');
    const weekIcon = document.createElement('img');
    const weekText = document.createElement('span');
    const highLowContainer = document.createElement('div');
    const metricHigh = document.createElement('span');
    const metricLow = document.createElement('span');
    const imperialHigh = document.createElement('span');
    const imperialLow = document.createElement('span');

    highLowContainer.classList = 'highLowContainer';
    weekText.classList = 'weekText';
    weekIcon.classList = 'weekIcon';
    weatherDayContainer.classList = 'weatherDayContainer';
    metricHigh.classList = 'high';
    metricHigh.id = 'metricHigh';
    metricLow.classList = 'low';
    metricLow.id = 'metricLow';
    imperialHigh.classList = 'high none';
    imperialHigh.id = 'imperialHigh';
    imperialLow.classList = 'low none';
    imperialLow.id = 'imperialLow';

    weekIcon.src = `http://openweathermap.org/img/wn/${metric.daily[i].weather[0].icon}@2x.png`;
    weekText.innerText = format(new Date(fromUnixTime(metric.daily[i].dt)), 'iii');
    metricHigh.innerText = `${Math.round(metric.daily[i].temp.max)}°`;
    metricLow.innerText = `${Math.round(metric.daily[i].temp.min)}°`;
    imperialHigh.innerText = `${Math.round(imperial.daily[i].temp.max)}°`;
    imperialLow.innerText = `${Math.round(imperial.daily[i].temp.min)}°`;

    highLowContainer.appendChild(metricHigh);
    highLowContainer.appendChild(metricLow);
    highLowContainer.appendChild(imperialHigh);
    highLowContainer.appendChild(imperialLow);
    weatherDayContainer.appendChild(weekText);
    weatherDayContainer.appendChild(weekIcon);
    weatherDayContainer.appendChild(highLowContainer);
    weatherDayContainer.appendChild(highLowContainer);
    weatherWeekContainer.appendChild(weatherDayContainer);
    if (i === 0) {
      weatherDetailsContainer.classList.toggle('selected');
      weatherDayContainer.classList.toggle('selected');
    }
    weatherDayContainer.addEventListener('click', weekToggle);
  }
}
