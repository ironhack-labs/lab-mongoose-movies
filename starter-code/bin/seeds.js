const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Christoph Waltz',
    occupation: 'Actor',
    catchPhrase: 'I only do what I like to do.'
  },
  {
    name: 'Cillian Murphy',
    occupation: 'Actor',
    catchPhrase: `I don't know if anyone will ever sit beside me on a plane again.`
  },
  {
    name: 'Limor Fried',
    occupation: 'Adafruit CEO',
    catchPhrase: ''
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if(err)throw err;

  docs.forEach((celeb) => {
    console.log(celeb.name);
  });

  mongoose.connection.close();
});
