const mongoose = require('mongoose');
const celebrityModel = require('../models/Celebrity.js');
const movieModel = require('../models/Movie.js');



const dbName = 'lab-4week-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const movies = [
  {
    title: 'test',
    genre: 'test',
    plot: 'test'
  
  },
  {
    title: 'test2',
    genre: 'test2',
    plot: 'test2'
  
  },
    {
    title: 'test3',
    genre: 'test3',
    plot: 'test3'
  
  }
]


movieModel.create(movies)
  .then((data) => {
     console.log('The user is saved and its value is: ', data) })






