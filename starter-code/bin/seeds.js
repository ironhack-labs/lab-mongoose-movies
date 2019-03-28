const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true});

const celebrities = [
  {
    name: 'Lionel Messi',
    occupation: 'God',
    catchPhrase: 'Goal!'
  },
  {
    name: 'Zooey Deschanel',
    occupation: 'Actress',
    catchPhrase: 'Summer has always been my favorite season, i feel happier.'
  },
  {
    name: 'Ricky Gervais',
    occupation: 'Actor, comedian',
    catchPhrase: 'When you are dead, you do not know you are dead, it is only painful and difficult for others. The same applies when you are stupid.'
  }
]

const movies = [
  {
    title: "Avengers",
    genre: "Sci-Fi",
    plot: "they fight to save the world from space invaders."
  },
  {
    title: "IT",
    genre: "Terror",
    plot: "Some kids need to defeat the bad clown"
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
    plot: "The locals from a new discovered planet need to fight the oppressing humans"
  }
]

Celebrity.create(celebrities)
  .then(celebrities => {
    console.log(`There were ${celebrities.length} celebrity documents added to the database`);
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(`There has been an error creating the database: ${err}`)
  });

  Movie.create(movies)
  .then(movies => {
    console.log(`There were ${movies.length} movie documents added to the database`);
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(`There has been an error creating the database: ${err}`)
  });