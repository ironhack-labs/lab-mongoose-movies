const express = require('express');
const app = express();

const mongoose     = require('mongoose');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
//falta cerrar conexxión


const Celebrity = require('../model/Celebrity.js')

var celebrities = [
  {
    name: 'brad pitt',
    ocupation: 'actor',
    catchPhrase: "A family is a risky venture, because the greater the love, the greater the loss... That's the trade-off. But I'll take it all"
  },
  {
    name: 'julia roberts',
    ocupation: 'actor',
    catchPhrase: "You know it’s love when all you want is that person to be happy, even if you’re not part of their happiness."

  },
  {
    name: 'meryl streep',
    ocupation: 'actor',
    catchPhrase: "Integrate what you believe in every single area of your life."

  },
];


module.exports = celebrities;
