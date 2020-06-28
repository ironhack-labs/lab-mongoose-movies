const mongoose = require('mongoose');

// const Celebrity = require('../models/celebrity');

// const dbName = 'celebrities';

const Movie = require('../models/movie');

const dbName = 'celebrities';

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

 

// const celebrities = [
//     {
//         name: "Tom Hanks",
//         occupation: "actor",
//         catchPhrase: "My mama always said, Life was like a box of chocolates. You never know what you're gonna get."
//     },
//     {
//         name: "Marlon Brando",
//         occupation: "actor",
//         catchPhrase: "It’s not personal. It’s business."
//     },
//     {
//         name: "Al Pacino",
//         occupation: "actor",
//         catchPhrase: "You wanna f*ck with me? Okay. You wanna play rough? Okay. Say hello to my little friend."
//     },

// ]

 

// Celebrity.create(celebrities, (err) => {

//   if (err) { throw(err) }

//   console.log(`Created ${celebrities.length} celebrities`)

//   mongoose.connection.close();

// });

const movies = [
    {
        title: "Terminator",
        genre: "sci-fi",
        plot: "Un asesino cibernético del futuro es enviado a Los Ángeles para matar a la mujer que procreará a un líder."
    },
    {
        title: "Pulp Fiction",
        genre: "thriller",
        plot: "Dos gangsters buscan recuperar un misterioso maletín"
    },
    {
        title: "The Godfather",
        genre: "drama",
        plot: "A mafia war"
    },

]

 

Movie.create(movies, (err) => {

  if (err) { throw(err) }

  console.log(`Created ${movies.length} movies`)

  mongoose.connection.close();

});