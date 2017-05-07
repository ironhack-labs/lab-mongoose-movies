// Require the Product, and mongoose
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity-model.js');

mongoose.connect('mongodb://localhost/db_celebrities');

// Define some sedding data for celebrities collection
const celebrities = [
  {
    name: 'Kim Kardashian',
    occupation: 'Television personality',
    catchPhrase: 'Holidays are the best. I couldn\'t imagine being from a small family.',
  },
  {
    name: 'Jennifer Lopez',
    occupation: 'Singer',
    catchPhrase: 'You mirror what the world mirrors to you.',
  },
  {
    name: 'Madonna',
    occupation: 'Singer-songwriter',
    catchPhrase: 'I stand for freedom of expression, doing what you believe in, and going after your dreams.',
  },
  {
    name: 'Angelina Jolie',
    occupation: 'Actress',
    catchPhrase: 'When other little girls wanted to be ballet dancers I kind of wanted to be a vampire.',
  }
];


// Save the products to the database, and close the connection
Celebrity.create(celebrities, (err, celebrityDocs) => {
  if (err) {
    throw err;
  }
  // display feedback
  celebrityDocs.forEach((oneCelebrity) => {
    console.log(`CELEBRITY SAVED: ${oneCelebrity._id} => ${oneCelebrity.name} => ${oneCelebrity.occupation}`);
  });
  mongoose.connection.close();
});

