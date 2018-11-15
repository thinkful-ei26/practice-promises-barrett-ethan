/* eslint-disable strict */
const searchTerm = process.argv[2];

const axios = require('axios');

const BASE_URL = 'https://swapi.co/api';

axios.get(`${BASE_URL}/people/1`)
  .then(results => {
    console.log(results.data.name);
  })
  .catch(error => {
    console.log(error);
  });
