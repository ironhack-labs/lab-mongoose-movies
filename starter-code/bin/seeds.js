const mongoose = require('mongoose');
const Celeb = require('../models/Celebrity');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const celebs = [
    {
        name: "Ryan Gosling",
        occupation: "Actor",
        catchPhrase: "Hey Girl."
    },
    {
        name: "Neymar da Silva Santos Jr",
        occupation: "Athlete",
        catchPhrase: "I try to be myself without being anything different."
    },
    {
        name: "Maluma",
        occupation: "Singer",
        catchPhrase: "Maluma, baby!"
    }
  ];

  Celeb.create(celebs)
  .then((response)=>{
      console.log(response);
  })
  .catch((err)=>{
    console.log(err);
  })