const mongoose = require('mongoose')
const Celebrity = require('./../models/Celebrity')
const data = [
  {
    name: "Tom Cruise",
    occupation: "actor",
    catchPhrase: 'CatchPhrase'
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: 'CatchPhrase'
  },
  {
    name: "Daffy Duck",
    occupation: "comedian",
    catchPhrase: 'CatchPhrase'
  }
]

mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.create(data)
    .then(res => console.log('Data in DB'))
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });