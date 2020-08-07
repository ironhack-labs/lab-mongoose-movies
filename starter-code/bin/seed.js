const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'scientology is GREAT!!'
  },
  {
    name: 'Al Pacino',
    occupation: 'Actor',
    catchPhrase: 'Wooh ahh!'
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'If everything was perfect, you would never learn and you would never grow.'
  },
  {
    name: 'Daffy Duck',
    occupation: 'Duck',
    catchPhrase: "You're despicable!"
  },
];

const movies = [
  {
    title: 'Mission: Impossible',
    genre: 'Action',
    plot: 'An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.'
  },
  {
    title: 'Dreamgirls',
    genre: 'Drama',
    plot: 'A trio of black female soul singers cross over to the pop charts in the early 1960s, facing their own personal struggles along the way.'
  },
  {
    title: 'The Last Samurai',
    genre: 'Action',
    plot: 'An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.'
  }
]

mongoose
  .connect('mongodb://localhost/mongoose-movies-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    
    Celebrity.collection.drop(); //cleans the database
    Movie.collection.drop();

    Celebrity.create(celebrities)
      .then(celebritiesFromDB => {
        console.log({ celebritiesFromDB });
      }).catch(err => console.log(`error seeding celebs the DB: ${err}`))

    Movie.create(movies)
      .then(moviesFromDB => {
        console.log({ moviesFromDB });
      }).catch(err => console.log(`error seeding movies the DB: ${err}`))

    setTimeout(() => {
        mongoose.disconnect();
    }, 5000)
    
  })
  .catch(err => console.error('Error connecting to mongo', err));