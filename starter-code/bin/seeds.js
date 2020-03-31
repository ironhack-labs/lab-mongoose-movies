const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'celebrities-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Sacha Baron Cohen',
    occupation: 'Commedian',
    catchPhrase: 'Whawhaweewa'
  },
  {
    name: 'Elon Musk',
    occupation: 'Entrepreneur',
    catchPhrase: `Let's go to mars`
  },
  {
    name: 'Frank Sinatra',
    occupation: 'Interpreter',
    catchPhrase: 'Fly me to the moon'
  }
]

Celebrity
  .create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(error => console.log(error))




const movies = [
  {
    title: 'Harry potter',
    genre: 'Drama',
    plot: 'A boy has a father'
  },
  {
    title: 'The Godfather',
    genre: 'American crime film',
    plot: 'Keep your friends close and your enemies closer'
  },
  {
    title: 'Interstellar',
    genre: 'Drama',
    plot: 'A guy leaves his daughter to travel around the space'
  }
]
  
Movie
  .create(movies)
  .then(() => {
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
  })
  .catch(error => console.log(error))