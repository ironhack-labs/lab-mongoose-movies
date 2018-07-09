require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = process.env.DB_URL;

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Beltrán',
    occupation: 'Wordpress generator',
    catchPhrase: 'SASS mola'
  },
  {
    name: 'Giorgio',
    occupation: 'Waiting the drop',
    catchPhrase: 'Oh yeah'
  },
  {
    name: 'Marc',
    occupation: 'Delete code',
    catchPhrase: 'Esto es super super super fácil'
  }
]
const movies = [
  {
    title: 'Human Centipede',
    genre: 'Comedy',
    plot: '3 dudes discover the true meaning of friendship'
  },
  {
    title: 'Narnia Chronicles',
    genre: 'Terror',
    plot: 'A bunch of kids come out of the closet'
  },{
    title: 'Forrest Gump',
    genre: 'Fantasy',
    plot: 'Drug addict takes advantage of a man with mental problems, so she can get a house, food and utils for free for the rest of her life'
  }
]
Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebs`)
});
Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
});