require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = process.env.DBURL; // mongoose-movies-proyect
mongoose.connect("mongodb://localhost/celebrities", {useMongoClient: true});   

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Este CRUD es una misión simposible",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Deja de permitir que gente que hace tan poco por ti controle tanto de tu mente, de tus sentimientos y de tus emociones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Christiano Ronaldo",
    occupation: "Futbolista",
    catchPhrase: "Siiiiiiiiuuuu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
]

Celebrity.collection.drop();

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });

mongoose.connect("mongodb://localhost/movies", {useMongoClient: true});   

const movies = [
  {
    title: "Los juegos del hambre",
    genre: "Ciencia ficción",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Dos rubias de pelo en pecho",
    genre: "Comedia",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Esta casa es una ruina",
    genre: "Comedia",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
]

Movie.collection.drop();

Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
  });


 