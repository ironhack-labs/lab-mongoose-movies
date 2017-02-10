const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celebritiesMongoose');
const Celebrity = require('../models/celebrities');

const celebrities = [
  {
    name: 'Issac Asimov',
    occupation: 'Writer',
    catchPhrase: 'People who think they know everything are a great annoyance to those of us who do.',
  },
  {
    name: 'George Carlin',
    occupation: 'Comediant',
    catchPhrase: 'Inside every cynical person, there is a disappointed idealist.',
  },
  {
    name: 'Stephen Hawking',
    occupation: 'Theoretical phisicits',
    catchPhrase: "Life would be tragic if it weren't funny",
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err; }

  docs.forEach( (celebrities) => {
    console.log(celebrities.name);
  });
  mongoose.connection.close();
});
