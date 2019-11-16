const mongoose = require("mongoose");
const Celebrities = require("../Models/Celebrity")

mongoose
  .connect('mongodb://localhost/RandomCollection', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [{
  name: 'Frank Constanza',
  occupation: 'actor',
  catchPhrase: '"Serenity now!"',
}, {
  name: 'Elaine Benes',
  occupation: 'actress',
  catchPhrase: '"Get out!"',
}, {
  name: 'The Soup Nazi',
  occupation: 'chef',
  catchPhrase: '"No soup for you!"',
}];


Celebrities.create(celebrities);