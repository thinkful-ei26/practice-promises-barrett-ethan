/* eslint-disable strict */
const searchTerm = process.argv[2];

const axios = require('axios');

const BASE_URL = 'https://swapi.co/api';

// ${searchTerm}
// function getName(searchTerm){
//   axios.get(`${BASE_URL}`)
//     .then(response => {
//       console.log(`${response.data.results[0].name} has been found`);
//     })
//     .then(response => {
//       console.log(`${response.data.results[0].gender} has starred in the following films:`);
//     })
//   // .then(response => {
//   //   console.
//   // })
//     .catch(error => {
//       console.log(error);
//     });
// }

function getNameAndGender(){
  axios.get(`${BASE_URL}/people/?search=${searchTerm}`)
    .then(response => {
      console.log(`${response.data.results[0].name} has been found
    ${response.data.results[0].gender} has starred in the following films:`);
      return response;
    })
    .then((response) => {
      response.data.results[0].films
        .map(film => axios.get(film))
        .then(response => {
          console.log(response);
        });
    });
}

getNameAndGender(searchTerm);

// function getFilms() {
//     axios.get(`${BASE_URL}/films/`)
//   .then(response => {
//     console.log(`${response.data.results[0].gender} has been found`);
// });