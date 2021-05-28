require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

require("../app");


const fakeCelebrity = [
    {
        name: 'Beyonce',
        occupation: 'singer',
        catchPhrase: "Bernie, the bolt!"
        },
        {
        name: 'Tom Cruise',
        occupation: 'actor',
        catchPhrase: "Is that your final answer?"
        },
        {
        name: 'Daffy Duck',
        occupation: 'comedian',
        catchPhrase: "Would you like a jelly baby?"
        }
  ];

  Celebrity.create(fakeCelebrity)
    .then(celebDB => console.log(celebDB))
    .catch(error => console.log('error has occurred', error))