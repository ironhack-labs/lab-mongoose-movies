const mongoose = require('mongoose');
const CelebrityModel = require('./../models/Celebrity');
const MovieModel = require('./../models/Movie');

const celebrities = [
  {
    name: 'Michael Jachson',
    occupation: 'King of pop',
    catchPhrase: 'Thriller!'
  },
  {
    name: 'Carrero Blanco',
    occupation: 'Bomb expert',
    catchPhrase: 'Voló, carero voló'
  },
  {
    name: 'M.Rajoy',
    occupation: 'Politician',
    catchPhrase: 'Los catalanes hacen cosas'
  }
];

const movies = [
  {
    title: 'Star Wars',
    genre: 'Science fiction',
    plot: 'yo-tu-tu'
  },
  {
    title: 'Gattaca',
    genre: 'Science fiction',
    plot: 'yo-tu-tu'
  },
  {
    title: 'Big Fish',
    genre: 'Science fiction',
    plot: 'yo-tu-tu'
  }
]

mongoose.connect('mongodb://localhost:27017/celebrities', {useNewUrlParser: true})
  .then( () => {
    return CelebrityModel.create(celebrities);
  })
  .then( () => {
    return MovieModel.create(movies);
  })
  // when the previous promised is finished get feedback:
  .then((insertedDocuments) => {
    console.log('Inserted documents:', insertedDocuments.length);
    mongoose.connection.close();
  })
  .catch( () => console.log('Error connecting to MongoDB', err));