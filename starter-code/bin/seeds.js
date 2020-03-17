require('dotenv').config();
const mongoose = require('mongoose');
//Model Movie
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
//Connecting DB
mongoose.connect(`mongodb://localhost/${process.env.DBNAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

//Remove previous collection if exist
Celebrity.collection.drop();

const celebrities = [
  {
    name : "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Mision imposible"
  },
  {
    name : "Kim Kardashian",
    occupation: "Vividora",
    catchPhrase: "Más operaciones"
  },
  {
    name : "Zidane",
    occupation: "Entrenador",
    catchPhrase: "Centro y gol"
  }
];

Celebrity.create(celebrities, (err)=>{
  if (err) {throw(err);}
  console.log(`Created ${celebrities.length} celebrities`);
});

Movie.collection.drop();

const movies = [
  {
    title: "Avatar",
    genre: "Ciencia ficcion",
    plot: "Unos"
  },
  {
    title : "Avatar 2",
    genre: "Ciencia ficcion",
    plot: "Se anunciara"
  },
  {
    title : "Avatar 3",
    genre: "Ciencia ficcion",
    plot: "Se anunciara"
  }
];

Movie.create(movies, (err)=>{
  if (err) {throw(err);}
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});