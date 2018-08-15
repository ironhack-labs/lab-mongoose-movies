'use strict';

function getCurrentLocation () {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      const coords = position.coords;
      resolve(coords);
    }, () => {
      reject(new Error('Error!!!'));
    });
  });
  return promise;
}

function main () {
  const latitudeInput = document.querySelector('input[name="latitude"]');
  const longitudeInput = document.querySelector('input[name="longitude"]');
  const submitButton = document.querySelector('form button');
  const acquiringString = document.querySelector('#acquiring');

  getCurrentLocation()
    .then(coords => {
      latitudeInput.value = coords.latitude;
      longitudeInput.value = coords.longitude;
      submitButton.removeAttribute('disabled');
      acquiringString.classList.add('hidden');
    })
    .catch(err => {
      console.log(err);
    });
}

window.addEventListener('load', main);
