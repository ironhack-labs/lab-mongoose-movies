const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');

const DB_TITLE = 'starter-code';

mongoose.connect(`mongodb://127.0.0.1:27017/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});



const addCelebrities = [
    {
        name: "Angelina Jolie",
        occupation: "Actress",
        catchPhrase: "Lorem Ipsum"
    },
    {
        name: "Messi",
        occupation: "Footballer",
        catchPhrase: "Lorem Ipsum"
    },
    {
        name: "Jason Momoa",
        occupation: "Actor",
        catchPhrase: "Lorem Ipsum"
    },
];



 Celebrity.insertMany(addCelebrities)
  .then(newCelebrity => {
    newCelebrity.forEach(celebrity => {
      console.log("A new celebrity is created:", celebrity.name);
    });
  }).catch(err => console.log(`Error while creating a new celebrity: ${err}`));