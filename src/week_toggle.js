export default function weekToggle(element) {
  document.querySelector('.weatherDetailsContainer.selected').classList.toggle('selected');
  document.querySelector('.weatherDayContainer.selected').classList.toggle('selected');
  const weatherDayContainerArray = [...document.querySelectorAll('.weatherDayContainer')];
  const weatherDetailsContainerArray = [...document.querySelectorAll('.weatherDetailsContainer')];
  const newIndex = weatherDayContainerArray.indexOf(element.target);
  weatherDayContainerArray[newIndex].classList.toggle('selected');
  weatherDetailsContainerArray[newIndex].classList.toggle('selected');
}
