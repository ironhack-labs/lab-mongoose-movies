const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const DB_NAME = 'celebrity-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebs = [{
        name: "Eddie Murphy",
        occupation: "Comedian",
        catchPhrase: "I will blow your face clean off your face!",
    },
    {
        name: "Kim Kardashian",
        occupation: "Media personality",
        catchPhrase: "Honey, would you put a bumper sticker on a Bentley?",
    },
    {
        name: "Jim Carrey",
        occupation: "Actor",
        catchPhrase: "If I'm not back in five minutes...just wait longer...",
    },
]

Celebrity.create(celebs)
  .then(celebsFromDB => {
    console.log(`Created ${celebsFromDB.length} celebs`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebs from the DB: ${err}`));
  
