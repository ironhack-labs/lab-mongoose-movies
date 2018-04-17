const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity"); 

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoos-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const celebrities = [
    {
      name: "Isaac Asimov",
      occupation: "Writer",
      catchPhrase: "Violence is the last refuge of the incompetent."
    },
    {
      name: "Serge Gainsbourg",
      occupation: "Songwriter",
      catchPhrase: "Alcohol keeps the fruits. Smoke keeps the meat."
    },
    {
      name: "Roger Waters",
      occupation: "Songwriter",
      catchPhrase: "Together we stand, divided we fall"
    }
  ];

  Celebrity.create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} new celebrities `)
  })
  .catch(() => {
    console.log("Creation Error 💩", err);
  });


