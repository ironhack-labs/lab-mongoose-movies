const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const {dbURL}= require('../config/db');

mongoose.connect(dbURL);

const celebrities = [
  {
    celebrityName : 'Tom Hanks',
    occupation: 'Actor',
    catchPhrase: 'Hey ho!'
  },
  {
    celebrityName : 'Jhonny Deep',
    occupation: 'Actor',
    catchPhrase: 'Lets go for some ladies!'
  },
  {
    celebrityName : 'Penelope Cruz',
    occupation: 'Actrice',
    catchPhrase: 'Bla bla bla'

  }
];

Celebrity.create(celebrities,(err,docs)=>{
  if(err){
    throw err;
  }
  docs.forEach(c=> console.log(c.celebrityName));
  mongoose.connection.close();
});
