const mongoose     = require('mongoose');
const Movie         = require('../models/Movie');


mongoose
  .connect('mongodb://localhost/celebrities-app', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


const mov = [
  {
    title: 'Harry Potter 1',
    genre: 'adventure',
    plot: 'Stuff happens.'
  },
  {
    title: 'Harry Potter 2',
    genre: 'adventure',
    plot: 'Stuff happens.'
  },
  {
    title: 'Harry Potter 3',
    genre: 'adventure',
    plot: 'Stuff happens.'
  }
]


Movie.create(mov)
.then(()=>{
  console.log('it worked')
})
.catch(()=>{
  console.log('it didnt work')
})