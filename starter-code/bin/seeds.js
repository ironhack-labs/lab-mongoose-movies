require('../configs/db.config.js')
const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model.js')
const Movie = require('../models/Movie.model.js')


const arrayCelebrity = [
    {
        name: "Bart Simpson",
        occupation: "actor",
        catchPhrase: "Multiplícate por cero"
    },
    {
        name: "Hommer Simpson",
        occupation: "actor",
        catchPhrase: "Ouch!"
    },
    {
        name: "Magie Simpson",
        occupation: "actrice",
        catchPhrase: "Buah!"
    },

]

Celebrity.deleteMany({})
  .then(() => Celebrity.create(arrayCelebrity))
  .then(celebrityElem => console.log(`You've add ${celebrityElem.length} celebrities`))
  .then(() => mongoose.connection.close())
  .catch(err => console.log ('error', err))


  const arrayMovie = [
    {
        title: "Los Simpsons en Madrid",
        genre: "Comedia",
        plot: "Los Simpson se dan una vuelta por Gran Vía",
    },
    {
        title: "Bart Simpson en Ironhack",
        genre: "actor",
        plot: "Bart se apunta al Bootcamp de Ironhack en Madrid "
    },
    {
        title: "Los Simpson en Cádiz",
        genre: "actor",
        plot: "La familia Simpson se va a la playa"
    },

]

Movie.deleteMany({})
  .then(() => Movie.create(arrayMovie))
  .then(movieElem => console.log(`You've add ${movieElem.length} movies`))
  .then(() => mongoose.connection.close())
  .catch(err => console.log ('error', err))