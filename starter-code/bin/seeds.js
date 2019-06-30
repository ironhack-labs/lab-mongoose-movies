const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie');

//nombre de la basedates "celebrity-project"
const dbName = 'mongoose-movies';
mongoose.connect('mongodb://localhost/mongoose-movies');  //o poner la const dbName= ${dbName}

const celebrities = [
  {
    name: "Andrés Pajares", //ponerlo genérico {{celebrity}}
    occupation: "Actor", //ponerlo genérico
    catchPhrase: "Hemos hecho mucho por el cine español" //ponerlo genérico
  },
  {
    name: "Fernando Esteso",
    occupation: "Actor",
    catchPhrase: "Siempre actuaba con el ánimo levantao"
  },
  {
    name: "Antonio Ozores",
    occupation: "Actor",
    catchPhrase: "silaneñoritaposvayaltrerunpanconbolloperocuandosalgo"
  }
]

Celebrity.create(celebrities)
  .then(celebritiesCreated => {
    console.log(`Creadas ${celebritiesCreated.length} celebridades`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))

const movies = [
  {
    title: "Blade Runner",
    genre: "sci-fi",
    plot: "Retirada de los Nexus 6"
  },
  {
    title: "Blade Runner 2049",
    genre: "sci-fi",
    plot: "Espectacular"
  },
  {
    title: "Terminator",
    genre: "sci-fi",
    plot: "¿Cuando empezaron los viajes temporales?"
  }
]

Movie.create(movies)
  .then(moviesCreated => {
    console.log(`Creadas ${moviesCreated.length} peliculas`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))