const unitSwitchPrint = () => {
  const degreeUnitContainer = document.createElement('div');
  const unitF = document.createElement('span');
  const unitC = document.createElement('span');

  unitF.id = 'unitF';
  unitF.classList = 'unit';
  unitF.innerText = '°F';
  unitC.id = 'unitC';
  unitC.classList = 'unit selected';
  unitC.innerText = '°C';
  degreeUnitContainer.classList = 'degreeUnitContainer';

  degreeUnitContainer.appendChild(unitF);
  degreeUnitContainer.appendChild(unitC);

  return degreeUnitContainer;
};

export default function pagePrint() {
  const entireContainer = document.createElement('div');
  const loadingWheel = document.createElement('div');

  loadingWheel.classList = 'loadingWheel none';
  entireContainer.classList = 'entireContainer';

  // Search Contianer
  const searchContainer = document.createElement('div');
  const searchInputContainer = document.createElement('div');
  const search = document.createElement('input');
  const searchButton = document.createElement('button');

  searchButton.classList = 'searchButton';
  search.classList = 'searchInput';
  searchInputContainer.classList = 'searchInputContainer';
  searchContainer.classList = 'searchContainer';

  searchButton.innerHTML = '&#10140';
  loadingWheel.innerHTML = '&#x2600';

  searchInputContainer.appendChild(search);
  searchInputContainer.appendChild(searchButton);
  searchContainer.appendChild(searchInputContainer);
  searchContainer.appendChild(unitSwitchPrint());

  // Weather Results Container
  const entireWeatherContainer = document.createElement('div');
  const weatherContainer = document.createElement('div');
  const weatherWeekContainer = document.createElement('div');

  weatherWeekContainer.classList = 'weatherWeekContainer';
  weatherContainer.classList = 'weatherContainer';
  entireWeatherContainer.classList = 'entireWeatherContainer';

  entireWeatherContainer.appendChild(searchContainer);
  entireWeatherContainer.appendChild(weatherContainer);
  entireWeatherContainer.appendChild(weatherWeekContainer);
  entireContainer.appendChild(entireWeatherContainer);
  entireContainer.appendChild(loadingWheel);

  return entireContainer;
}
