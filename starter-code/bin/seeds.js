const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Edward Norton",
    occupation: "Actor",
    catchPhrase: "Bite the curb",
  },
  {
    name: "Clint Eastwood",
    occupation: "Actor",
    catchPhrase: "Do you feel lucky punk?",
  },
  {
    name: "Dwayne Johnson",
    occupation: "Actor",
    catchPhrase: "Do you smell what the Rock is cooking?",
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

const movies = [
  {
    title: "American History X",
    genre: "Crime, Drama",
    plot: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
  },
  {
    title: "Dirty Harry",
    genre: "Action, Crime, Thriller",
    plot: "When a mad man calling himself 'the Scorpio Killer' menaces the city, tough as nails San Francisco Police Inspector Harry Callahan is assigned to track down and ferret out the crazed psychopath.",
  },
  {
    title: "The Scorpion King",
    genre: "Action, Adventure, Fantasy, Thriller",
    plot: "A desert warrior rises up against the evil army that is destroying his homeland. He captures the enemy's key sorcerer, takes her deep into the desert and prepares for a final showdown.",
  }
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});

