// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity.model');


// const dbName = 'Celebritis';
// mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

// const celebritys = [
//   {
//     name: "Zatu",
//     occupation: "Cantante",
//     catchPhrase: "MC pionero de la música Rap."
//   },
//   {
//     name: "The Rock",
//     occupation: "Actor",
//     catchPhrase: "Actor y luchador profesional estadounidense."
//   },
//   {
//     name: "Steve Jobs",
//     occupation: "Visionario",
//     catchPhrase: "La innovación diferencia a un líder de un seguidor."
//   }
// ]


// Celebrity.create(celebritys)
//   .then(allCelebritys => console.log("Se han creado", allCelebritys.length, "celebritys en la BBDD"))
//   .catch(err => console.log("Error :", err))

const mongoose = require('mongoose');
const Movies = require('../models/movies.models');

const dbName = 'Celebritis';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const movies = [
  {
    title: "Duro de matar",
    genre: "accion",
    plot: "Mercenario más buscado del mundo, tiene que sobrevivir para salvar su reputacion."
  },
  {
    title: "Un pobre con dinero",
    genre: "video clip",
    plot: "Vision del status social."
  },
  {
    title: "Jobs",
    genre: "drama",
    plot: "Como se creo apple."
  },
  {
    title: "The Dog",
    genre: "accion",
    plot: "Pitxy es un perro influencer millonario que se pasa la vida buscando perritas receptivas."
  }
]

Movies.create(movies)
  .then(allMovies => console.log("Se han creado", allMovies.length, "peliculas en la BBDD"))
  .catch(err => console.log("Error :", err))