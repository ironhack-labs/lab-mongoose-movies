/*jshint esversion: 6*/
const mongoose = require('mongoose');

const Celebrity = require('../models/celebrities');

mongoose.connect('mongodb://localhost:27017/celebrities');

const Celebrities = [
  {
    name: 'Christopher Walken',
    occupation: 'Actor',
    catchPhrase: 'Just listen to this'
  },
  {
    name: 'Mathew McConnahey',
    occupation: 'Actor',
    catchPhrase: 'Alright, alright, alright'
  },
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Awesome'
  }];

Celebrity.create(Celebrities, (err, docs)=> {
  if(err) {
    throw err;
  }
  docs.forEach((celebrity)=>{
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
