const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-mongoose-movies');
const Celebrity = require('./models/Celebrities');

Celebrity.create([
  {
    name: 'Matt LeBlanc',
    occupation: 'Joey in "Friends" tv show',
    catchPhrase: 'How you doin\'?',
  },
  {
    name: 'Hugh Laurie',
    occupation: 'Famous mostly because "House" tv show',
    catchPhrase: 'Everybody lies',
  },
  {
    name: 'Jim Parsons',
    occupation: 'Got really famous on "The Big Bang Theory" tv series',
    catchPhrase: 'Bazinga',
  }
  ]).then(() => console.log('Everything went well!')).catch(err => console.log(err));