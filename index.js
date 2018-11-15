/* eslint-disable strict */
const searchTerm = process.argv[2];

const axios = require('axios');

const BASE_URL = `https://swapi.co/api/people/?search=${searchTerm}`;

// ${searchTerm}
function getName(searchTerm){
  axios.get(`${BASE_URL}`)
    .then(response => {
      console.log(`${response.data.results[0].name} has been found`);
    })
    .then(response => {
      console.log(`${response.data.results[0].gender} has starred in the following films:`);
    })
  // .then(response => {
  //   console.
  // })
    .catch(error => {
      console.log(error);
    });
}

function getName(){
  axios.get(`${BASE_URL}`)
  .then(response => {
    console.log(`${response.data.results[0].name} has been found`);
};


function getGender (){
  axios.get(`${BASE_URL}`)
  .then(response => {
    console.log(`${response.data.results[0].name} has been found`);
};

function getFilms