const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')
 
mongoose.connect('mongodb://localhost/20190328-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // celebrities seed list
const celebrities = [
  {
    name: "Maxima",
    occupation: "Queen",
    catchPhrase: "Hij was een beetje dom"
  },
  {
    name: "Oprah",
    occupation: "Talkshow host",
    catchPhrase: "Anything you can imagine, you can create"
  },
  {
    name: "Daniel Radcliffe",
    occupation: "Actor",
    catchPhrase: "Don't try too hard to be something you're not"
  }
];

Celebrity.create(celebrities)
  .then(cel => {
    console.log('Succesful import', cel);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });

// movies seeds list
const movies = [
  {
    title: 'Pirates of the Caribean',
    genre: 'Adventure',
    plot: 'There never ain\'t too much rum!'
  },
  {
    title: 'Titanic',
    genre: 'Drama',
    plot: 'Even the greatest may sink'
  },
  {
    title: 'The Lion King',
    genre: 'Animation',
    plot: 'Hakuna Matata'
  }
];
 
Movie.create(movies)
  .then(mov => {
    console.log('Succesful import', mov);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });
 