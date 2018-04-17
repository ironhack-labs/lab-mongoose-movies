const mongoose = require("mongoose");

const Celebrity = require ("../models/celebrity-model.js");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const celebrities = [
    {
      name: "Geroge Clooney",
      occupation: "Actor",
      catchPhrase: "What else ? Nespresso"
    },
    {
      name: "Zinedine Zidane",
      occupation: "Football Player",
      catchPhrase: "Materrazi ? Easy boom"
    },
    {
      name: "Paulo Coelho",
      occupation: "Author",
      catchPhrase: "The Alchimist is my blueprint"
    }
  ];

  Celebrity.create(celebrities)
     .then(() => {
        console.log(`Created ${celebrities.length} celebrities`);
     })
     .catch((err) => {
       console.log("Creation ERROR 💩 ", err)
     })