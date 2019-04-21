require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const celebrities = [
  {
    name: 'Stan Lee',
    occupation: 'writer',
    catchPhrase: 'Excelsior'
  },
  {
    name: 'Arnold S',
    occupation: 'actor',
    catchPhrase: `I'll be back`
  },
  {
    name: 'Silvester S',
    occupation: 'actor',
    catchPhrase: `You're better than that`
  }
];

const movies = [
  {
    title: 'Iron Man',
    genre: 'Action',
    plot: `Spoiler alert: "I'm Iron Man"`
  },
  {
    title: 'Guardians of the Galaxy',
    genre: 'Action',
    plot: '"Just a bunch of a*holes"'
  },
  {
    title: 'Avengers',
    genre: 'Action',
    plot: 'We have a Hulk'
  }
];

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => console.log(`Connected to "${x.connections[0].name}".`))
  .catch(err => console.error('Error connecting to mongo', err));

Promise.all([Celebrity.create(celebrities), Movie.create(movies)])
  .then(([celebrities, movies]) => {
    console.log(`Success: ${celebrities.length} celebreties were created.`);
    console.log(`Success: ${movies.length} movies were created.`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`Error while populating database.`, err));
