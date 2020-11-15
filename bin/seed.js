const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbName = 'mongoose_movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name: 'Matt LeBlanc',
    occupation: 'actor',
    catchPhrase: "How you doin'?"
  },
  {
    name: 'Albert Einstein',
    occupation: 'physicist',
    catchPhrase: 'Creativity is intelligence having fun.'
  },
  {
    name: 'Steve Jobs',
    occupation: 'entrepreneur',
    catchPhrase: 'Stay hungry, stay foolish.'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`You created a DDBB with ${celebrities.length} movies in it`)

  mongoose.connection.close();
});