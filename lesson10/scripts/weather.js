

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={6.64}&lon={49.75}&appid={c428260516199fc2a7b36ae4fe6f2a00}';


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



e
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data._____}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
  let desc = data.weather[0].______;
  weatherIcon.setAttribute('___', _____);
  weatherIcon.setAttribute('___', _____);
  captionDesc.textContent = `${desc}`;
}