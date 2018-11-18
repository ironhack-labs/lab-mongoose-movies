const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

const Movie = require('../models/movie');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name : "Nombre1",
//     occupation : "occupation1",
//     catchPhrase : "catchPrase1"
//   },
//   {
//     name : "Nombre2",
//     occupation : "occupation2",
//     catchPhrase : "catchPrase2"
//   },
//   {
//     name : "Nombre3",
//     occupation : "occupation3",
//     catchPhrase : "catchPrase3"
//   },
//   {
//     name : "Nombre4",
//     occupation : "occupation4",
//     catchPhrase : "catchPrase4"
//   },
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });

const movies = [
  {
    title: "titulo1",
    genre: "genero1",
    plot: "argumento1"
  },
  {
    title: "titulo2",
    genre: "genero2",
    plot: "argumento2"
  },
  {
    title: "titulo3",
    genre: "genero3",
    plot: "argumento3"
  },
  {
    title: "titulo4",
    genre: "genero4",
    plot: "argumento4"
  }
];

Movie.create(movies, (err)=>{
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
  });