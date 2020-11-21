const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const DB_NAME = 'celebrity-and-movie';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    {
        name: "Jackie Chan",
        occupation: "actor",
        catchPhrase: "I only want my work to make people happy."
    },
    {
        name: "Emma Stone",
        occupation: "actress",
        catchPhrase: "Flaws are my favorite part of people, usually."
    },
    {
        name: "Steve Carell",
        occupation: "commedian",
        catchPhrase: "Nothing to me feels as good as laughing incredibly hard."
    }
];

Celebrity.create(celebrities)
    .then(celebritiesInDB => {
        console.log(`Created ${celebritiesInDB.length} celebrities`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));