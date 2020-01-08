const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

const dbName = 'mongoose-movies-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebritiesArray = [
  {
    name: 'John Christopher Depp II',
    occupation: 'Actor',
    catchPhrase: 'If someone were to harm my family or a friend or somebody I love, I would eat them.'
  },
  {
    name: 'Mark Sinclair Vincent',
    occupation: 'Actor',
    catchPhrase: 'It is insecurity that is always chasing you and standing in the way of your dreams.'
  },
  {
    name: 'Leighton Meester',
    occupation: 'Actress',
    catchPhrase: 'When you see how you react when you suffer that is when you know what you are made of.'
  }
];

Celebrity.create(celebritiesArray, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebritiesArray.length} celebrities`)
  mongoose.connection.close();
}); 
