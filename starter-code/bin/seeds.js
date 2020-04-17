require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Rick',
    occupation: 'mad scientist',
    catchPhrase: 'Wubba lubba dub dub!',
  },
  {
    name: 'Morty',
    occupation: 'unknown',
    catchPhrase: 'oh geez!',
  },
  {
    name: 'Jerry',
    occupation: 'comedian',
    catchPhrase: 'Hmm?',
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
    Celebrity.create(celebrities)
      .then((celebrities) => {
        celebrities.forEach((celebrities) => {
          console.log(celebrities.name);
        });
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  })
  .catch((dbErr) =>
    console.log(`Error occured while connecting to the Database ${dbErr}`)
  );
