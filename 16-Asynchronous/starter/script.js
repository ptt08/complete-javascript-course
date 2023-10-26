'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, cl) {
  const html = `
  <article class="country ${cl}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1_000_000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country (1)
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country
//     renderCountry(data);

//     // Get neighbor country (2)
//     console.log(data.borders);
//     const neighbor = data.borders?.[0];

//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);

//       console.log(data);

//       renderCountry(data);
//     });
//   });
// };

// getCountryAndNeighbor('brazil');

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

const country = 'portugal';
const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

console.log(request);

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};

getCountryData(country);
