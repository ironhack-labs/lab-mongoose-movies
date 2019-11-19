const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

//const dbName = 'library';

const celebrities = [
    {
        name: "Tom Cruise",
        occupation: "Actor",
        catchPhrase: "Mission impossible" 
    },
    {
        name: "Beyonce",
        occupation: "Singer",
        catchPhrase: "Single ladies" 
    },
    {
        name: "Bradd Pitt",
        occupation: "Actor",
        catchPhrase: "Hey bro" 
    },
    {
        name: "Leo Messi",
        occupation: "Player",
        catchPhrase: "que bueno que viniste" 
    }
];



mongoose
  .connect('mongodb://localhost:27017/Celebrity', { useNewUrlParser: true })
  .then(() => {
    return Celebrity.create(celebrities); //celebrities is the array of celebrities that we are going to insert into the database
  })
  .then(insertedDocuments => {
    console.log('Inserted documents:', insertedDocuments.length);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));