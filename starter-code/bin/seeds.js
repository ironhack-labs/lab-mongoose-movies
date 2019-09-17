const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose
  .connect('mongodb://localhost/mongoose-celebrities', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

let celebrities = [
  {
    name: "Rami Malek",
    occupation: "Actor",
    catchPhrase: "Hello, friend."
  },
  {
    name: "Lizzo",
    occupation: "Rap Artist",
    catchPhrase: "I just took a DNA test"
  },
  {
    name: "Amy Adams",
    occupation: "Actress",
    catchPhrase: "Amazing actress"
  }
]

Celebrity.create(celebrities);