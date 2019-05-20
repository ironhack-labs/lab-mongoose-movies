const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.models')
const Movie = require("../models/Movie.models")

const dbname = "HallOfFame";
mongoose.connect(`mongodb://localhost/${dbname}`);

const Celebrities = [
  {
    name: "Popino.",
    occupation: "Ser el mejor perro.",
    catchPhrase: "Raluca, portate mejor.",
  },

  {
    name: "Pepe.",
    occupation: "Llamarse Pepe.",
    catchPhrase: "Hola, soy Pepe.",
  },

  {
    name: "German.",
    occupation: "Lead Teacher.",
    catchPhrase: "Pues eso está muy bien.",
  }
]

// Celebrity.create(Celebrities)
//   .then(celebs => {
//     mongoose.disconnect()
//       .then( ()=> console.log('Desconectado de la BBDD'))
//       .catch(err => console.log('Error desconectando', err))
    
//     console.log(`Se han creado ${celebs.length} celebrities.`)})
//   .catch(err => console.log('Ha ocurrido un error creando celebrities', err))

const Movies = [
  {
    title: "La Guerra de las Kardashian",
    genre: "Drama",
    plot: "Six drama queens fight over the smallest things for 4 hours in this amazing film"
  },
  {
    title: "500 days of bootcamp",
    genre: "Comedy",
    plot: "A bunch of good-for-nothings face a bootcamp that will seem much more longer than it is"
  },
  {
    title: "El diario de Noah",
    genre: "Drama",
    plot: "Un chino de la leche escribe un diario sobre sus aventuras empresariales"
  },
]


Movie.create(Movies)
  .then(movies => {
    console.log(`Created ${movies.length} movies`)
    mongoose.disconnect()
  })
  .catch(err => {
    console.log(err)
  })