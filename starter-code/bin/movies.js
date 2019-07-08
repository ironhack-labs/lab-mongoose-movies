const mongoose = require('mongoose');
const Movies = require('../models/movies');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Avengers: Endgame",
    genre: "Action", 
    enredo: "Avengers will try to put a new end on Thanos",
  }, 
  {
    title: "Toy Story 4",
    genre: "fantasy", 
    plot: "Woody and Buzz have a new adventure with a new toy",
  }, 
  {
    title: "Annabelle 3",
    genre: "horror", 
    plot: "Annaelle is back!",
  }
]

Movies.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});