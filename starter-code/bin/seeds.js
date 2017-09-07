const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const {dbURL}= require('../config/db');

mongoose.connect(dbURL);

const celebrities = [
  {
    movieName : 'Scary Movie',
    occupation: 'Terror',
    catchPhrase: 'Hey ho!'
  },
  {
    movieName : 'American Pie',
    occupation: 'Comedy',
    catchPhrase: 'Lets go for some ladies!'
  },
  {
    movieName : 'Star Wars',
    occupation: 'Drama',
    catchPhrase: 'Bla bla bla'

  }
];

Celebrity.create(celebrities,(err,docs)=>{
  if(err){
    throw err;
  }
  docs.forEach(c=> console.log(c.movieName));
  mongoose.connection.close();
});
