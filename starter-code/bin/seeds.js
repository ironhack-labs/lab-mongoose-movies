
const mongoose = require('mongoose');
const Celebrity = require('./models/celebrity.js');

 const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

 const celebArray = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'actor de la palicula misión imposible',
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'cancion más famosa Single ladies',
  },
  {
    name: 'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: 'Dibujo más famoso de los looney Tunes',
  },
];

 Celebrity.create(celebArray, () => {
  console.log('celebrity create');
})