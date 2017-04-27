/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost:27017/movies-dev');

const celebrities = [
  {
    name: 'Arnold',
    occupation: "acttion actor",
    catchPhrase: "sayonara baby"
  },
  {
    name: 'Keanu',
    occupation: "acttion actor",
    catchPhrase: "I know kung fu"
  },
  {
    name: 'Tom Hardy',
    occupation: "best actor",
    catchPhrase: "mmm"
  },
];

Celebrity.create(celebrities, (err, docs)=> {

  if(err)
   {throw err;}
  docs.forEach((drone) => {
    console.log(drone.name);
  });

  mongoose.connection.close();
});
