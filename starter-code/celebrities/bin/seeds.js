const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost:27017/${dbName}`);

const celebrities = [
  {
    name: 'Homer Simpson',
    occupation:'Cartoon',
    catchPhrase: 'Doh'

  },
  {
    name: 'Ty Burrel',
    occupation:'Comedian',
    catchPhrase: 'Im a cool dad thats my thang'
  },
  {
    name: 'Sylvester Stallone',
    occupation:'Actor',
    catchPhrase: 'Te hace falta ver mas bax'
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} books`)
  mongoose.connection.close()
});

mongoose.connect(`mongodb://localhost:27017/movies`);

const movies = [
  {
    title: 'The simpsons movie',
    genre: 'Comedy',
    plot: 'asdas'

  },
  {
    title: 'Modern family',
    genre: 'Comedy',
    plot: 'FFF'
  },
  {
    title: 'Top gun',
    genre: 'Action',
    plot: 'HHH'
  }
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});