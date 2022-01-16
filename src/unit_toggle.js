export default function unitToggle(event) {
  [...document.querySelectorAll('.temperature')].forEach((temperatureElement) => temperatureElement.classList.toggle('none'));
  [...document.querySelectorAll('.windSpeed')].forEach((windElement) => windElement.classList.toggle('none'));
  event.target.removeEventListener('click', unitToggle);
  document.querySelector('.unit.selected').addEventListener('click', unitToggle);
  [...document.querySelectorAll('.unit')].forEach((unitElement) => unitElement.classList.toggle('selected'));
  [...document.querySelectorAll('.high')].forEach((highElement) => highElement.classList.toggle('none'));
  [...document.querySelectorAll('.low')].forEach((lowElement) => lowElement.classList.toggle('none'));
}
