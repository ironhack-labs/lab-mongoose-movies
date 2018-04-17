const mongoose = require ("mongoose");

const Celebrity = require ("../models/celebrity.js");

mongoose.Promise = Promise;

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


  const Celebrities = [{
    name : "Lucky Lucke", 
    occupation : "Serial saver", 
    catchPhrase : "Rantanplan ! Catch the Daltons." 
    },
    {
    name : "The Daltons", 
    occupation : "Serial robbers", 
    catchPhrase : "Where is the bank ?" 
    },
    {
    name : "Rantanplan", 
    occupation : "Serial loser", 
    catchPhrase : "I need to sleep..." 
    }] 

  Celebrity.create(Celebrities)
    .then (()=> {
        console.log(`created ${Celebrities.length} celebrities`);
      })
    .catch ((err)=> {
      console.log('Erro connecting to mongo', err)
   });