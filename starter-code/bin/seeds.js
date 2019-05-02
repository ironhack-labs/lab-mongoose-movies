const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');
const Movie = require("../models/movie");
mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const celebrities = [
{
    name: 'Jon Snow',
    occupation: 'Knight',
    catchPhrase: 'Winter is coming'
},

{
    name: 'Travis Scott',
    occupation: 'Artist',
    catchPhrase: "It's Lit"
},

{
    name: 'Muhammad Ali',
    occupation: 'Professional Boxer',
    catchPhrase: 'Float like a Butterfly sting like a Bee'
}

]

Celeb.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });

  const movies = [
    {
        title: 'Infinity War',
        genre: 'Action/Adventure',
        plot: 'Thanos collects all the stones'
    },
        
    {
        title: 'Captain Marvel',
        genre: 'Action/Adventure',
        plot: 'Get the tesseract'
    },

    {
        title: 'Endgame',
        genre: 'Action/Adventure',
        plot: 'Defeat Thanos'
    },

  ];

  Movie.create(movies, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
  });
  