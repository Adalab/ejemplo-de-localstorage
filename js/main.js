'use strict';

const criaturas = document.querySelector('.criaturas');

function getCriaturas() {
  const ENDPOINT = 'https://randomuser.me/api/?results=5';

  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('criaturas', JSON.stringify(data));

      paintCriaturas(data.results);
    });
}

function paintCriaturas(arr) {
  let lis = '';
    for (const criatura of arr) {
      lis += `
        <li class="criatura">
          <img src="${criatura.picture.large}" alt="${criatura.name.first} ${criatura.name.last}">
          <h2 class="criatura__name">${criatura.name.first} ${criatura.name.last}</h2>
        </li>
      `;
    }
    criaturas.innerHTML = lis;
}


// Si hay datos guardados:
if (localStorage.getItem('criaturas') !== null) {
  const savedData = JSON.parse(localStorage.getItem('criaturas'));
  console.log(savedData);
  paintCriaturas(savedData.results);
} else {
  // Carga los datos
// Si no, haz la petición y guarda los datos

  getCriaturas();
}

