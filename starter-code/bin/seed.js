
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/celebrities`);

const Celebrity = require('../models/celebrity.model');
Celebrity.collection.drop();

const Movie = require('../models/movie.model');
Movie.collection.drop()


const celebrity = [
  {
    name: "Aria Martinez Martin",
    occupation: "actriz",
    catchPhrase: "Soy libre y feliz",
  },
  {
    name: "Nidian Martin",
    occupation: "cantante",
    catchPhrase: "Cuando amas lo que haces no tendras que trabajar ni un dia",
  },
  {
    name: "Ely Espinoza",
    occupation: "desconocido",
    catchPhrase: "Los abuelos son para malcriar no criar",
    },

]

Celebrity.create(celebrity)
  .then((cel) => {
    console.log('Se han creado celebridades', cel)
  })
  .catch((error) => {
    console.log(`Impossible to add the celebrity. ${error}`);
  });


const movie = [
  {
    title: "Las cronicas de Nidi con Mongodb",
    genre: "Suspenso",
    plot: "Despues de descansar consigue los problemas con Mongodb",
  },
  {
    title: "Ely como abuela",
    genre: "Drama",
    plot: "Convierte a chiqui en una niña rebelde",
  },
  {
    title: "Chiqui",
    genre: "Comedia",
    plot: "Una niña feliz en medio de una pandemia",
  },

]

Movie.create(movie)
  .then((mov) => {
    console.log('Se han creado peliculas', mov)
  })
  .catch((error) => {
    console.log(`Impossible to add the movie. ${error}`);
  });

