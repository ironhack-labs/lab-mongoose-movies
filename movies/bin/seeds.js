const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities');

const Celebrity = require('../models/celebrity-model.js');

const celebrities = [
  {
    name: 'Frank Sinatra',
    occupation: 'Singer',
    catchPhrase: 'Alcohol may be man\'s worst enemy, but the bible says love your enemy.',
  },
  {
    name: 'Quentin Tarantino',
    occupation: 'Director',
    catchPhrase: 'Violence is one of the most fun things to watch.',
  },
  {
    name: 'Salvador Dali',
    occupation: 'Painter',
    catchPhrase: 'I don\'t do drugs. I am drugs.',
  }
];

Celebrity.create( celebrities, (err, celebrityDocs) => {
  if(err){
    throw err;
  }

  celebrityDocs.forEach((oneCelebrity) => {
    console.log(`New Celebrity ${oneCelebrity.name} -> ${oneCelebrity._id}`);
  });
});
