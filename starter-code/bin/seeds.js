
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'Mongoose-Movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    {
      name: 'Tom Cruise',
      occupation: "actor",
      catchPhrase :"highest-paid actor"
    },
    {
        name: 'Beyonce',
        occupation: "singer",
        catchPhrase :"lead singer"
    },
    {
        name: 'Daffy Duck',
        occupation: "unknown",
        catchPhrase :"cartoon-character"
    }
];

Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));