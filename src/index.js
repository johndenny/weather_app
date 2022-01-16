import './style.css';
import pagePrint from './page_print';
import newWeather from './new_weather';
import unitToggle from './unit_toggle';

document.body.appendChild(pagePrint());
document.querySelector('.searchButton').addEventListener('click', newWeather);
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    newWeather();
  }
});
document.querySelector('#unitF').addEventListener('click', unitToggle);
