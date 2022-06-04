import { format, fromUnixTime } from 'date-fns';
import { defaultValue, images } from './data-management';
import fetchFromServer from './modules/weather-api';
import { getIcon, getImage, toMiles, getCredit } from './utils';


const loadingImg = document.querySelector('.loading');
const loadingParent = loadingImg.parentElement;

const toggleSuffix = (() => {
  const bodyClass = document.querySelector('body').classList;
  return (e) => {
    if (e.target.checked) {
      bodyClass.add('fahrenheit');
      defaultValue.units = 'imperial';
    } else if (bodyClass.contains('fahrenheit')) {
      bodyClass.remove('fahrenheit');
      defaultValue.units = 'metric';
    }
    formSubmit();
  };
})();


function formSubmit() {
  loadingParent.appendChild(loadingImg);
  

  // let url2 =  `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=6bdf3f4518ab8449705dbd12bbe6865d`
  defaultValue.search = document.querySelector('input').value || defaultValue.search;; // save last search, to use when user switches to fahrenheit or back to celsius
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultValue.search}&units=${defaultValue.units}&appid=6bdf3f4518ab8449705dbd12bbe6865d`;
  fetchFromServer(url)
  .then(updateDisplay)
  .catch((error) => {
    console.log(error);
    alert(error)

  });
}

const updateDisplay = (() => {
  const city = document.querySelector('.city');
  const temperature = document.querySelector('.temperature');
  const atmosphere = document.querySelector('.atmosphere');
  const date = document.querySelector('.date span');
  const time = document.querySelector('.time span');
  const icon = document.querySelector('.main-icon i');
  const humidity = document.querySelector('.humidity .value');
  const feelsLike = document.querySelector('.feels-like .value');
  const wind = document.querySelector('.wind-speed .value');
  const visibility = document.querySelector('.visibility .value');
  const body = document.querySelector('body');
  const credit = document.querySelector('.credit a');
  return (data) => {
    if(data.cod === '404') {
      alert(data.message);
      loadingImg.remove();
      return;
    }
    city.textContent = data.name
    temperature.textContent = data.main.temp.toFixed(1);
    atmosphere.textContent = data.weather[0].main;
    date.textContent = format(fromUnixTime(data.dt), `E, do LLL,  yyyy`);
    time.textContent = format(fromUnixTime(data.dt), `h:mm a`);
    icon.className = `bi bi-${getIcon(data.weather[0].icon)}`;
    humidity.textContent = data.main.humidity;
    feelsLike.textContent = data.main.feels_like.toFixed(1);
    wind.textContent = (defaultValue.units == 'metric') ?  (data.wind.speed * 60 * 60 / 1000).toFixed(1) :data.wind.speed.toFixed(1);

    visibility.textContent = (defaultValue.units == 'metric') ? (data.visibility / 1000).toFixed(1) : toMiles((data.visibility / 1000).toFixed(1));
    body.style.backgroundImage = 'url(' + getImage(data.weather[0].icon) + ')';
    loadingImg.remove();
    credit.textContent = getCredit(data.weather[0].icon).name;
    credit.href = getCredit(data.weather[0].icon).link;
  
}
})();

(() => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmit();
  });
  const toggleBtn = document.querySelector('#toggle-cf');
  toggleBtn.addEventListener('change', toggleSuffix);
})();

formSubmit()