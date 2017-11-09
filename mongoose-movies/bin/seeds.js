const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrities');

const celebrities = [
  {
    name: 'Mariano Rajoy',
    occupation: 'President of the Government of Spain',
    catchPhrase: '¿Y la europea?'
  },
  {
    name: 'Julio Iglesias',
    occupation: 'Singer',
    catchPhrase: 'Soy tu padre y lo sabes'
  },
  {
    name: 'Eduardo Inda',
    occupation: 'Journalist',
    catchPhrase: 'Tracatra'
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) { throw err; }
  docs.forEach(celebrity => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
