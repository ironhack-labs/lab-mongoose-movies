
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const DB_NAME = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebs = [
    { name: 'Arnold Schwarzenegger', occupation: 'Actor', catchPhrase: "I'll be back!"},
    { name: 'Zlatan Ibrahimovic', occupation: 'Football Player', catchPhrase: "I can’t help but laugh at how perfect I am." },
    { name: 'Sheldon Cooper', occupation: "Smartass", catchPhrase: "Bazinga!" }
  ];

Celebrity.create(celebs)
    .then(celebritiesFromDb => {
        console.log(`Created ${celebritiesFromDb.length} celebrities`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));