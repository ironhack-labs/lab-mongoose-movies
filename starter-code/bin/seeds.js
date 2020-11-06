const celebrities = [
    {
        name : "Leonardo Di Caprio",
        occupation: "Actor",
        catchPhrase: "Save the world"
    },
    {
        name : "Michael Phelps",
        occupation: "Swimmer",
        catchPhrase: "No pain no gain"
    },
    {
        name : "John Cena",
        occupation: "Wrestler",
        catchPhrase: "U cant see me"
    }
]
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
//const Celebrity = require('../models/celebrity.model');
//const celebrities = require('./bin/seeds');

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    Celebrity.insertMany(celebrities)
    .then(console.log("Success"))
    .catch(err => console.log(err))
  })
  .catch(err => console.log("Error connecting to database"))



/*
    Celebrity
    .insertMany(celebrities)
    .then(console.log("Celebrities have been added"))
    .catch(error=>console.log("An error has occurred"))*/
