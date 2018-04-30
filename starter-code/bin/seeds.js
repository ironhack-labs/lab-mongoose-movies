const mongoose = require('mongoose');
const Movie = require('../models/movies');


const movies = [
  {
    title: 'Uganda', 
    genre: 'war',
    plot: "People in this country getting slaughtered"
  },
  {
    title: 'Miami Vices', 
    genre: 'crime',
    plot: "His fathers past has haunted him for years, now he returns to avenge his father"
  },
  {
    title: 'Music Moguls', 
    genre: 'Documentary',
    plot: "Different perspective in the music industry"
  }
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});