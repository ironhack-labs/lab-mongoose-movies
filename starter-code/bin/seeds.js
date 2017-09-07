const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const {dbURL}= require('../config/db');

mongoose.connect(dbURL);

const celebrities = [
  {
    name : 'Tom Hanks',
    occupation: 'Actor',
    catchPhrase: 'Hey ho!'
  },
  {
    name : 'Jhonny Deep',
    occupation: 'Actor',
    catchPhrase: 'Lets go for some ladies!'
  },
  {
    name : 'Penelope Cruz',
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
