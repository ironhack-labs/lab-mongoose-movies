const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name : 'Belen Esteban',
    occupation : 'Exmujer de torero',
    catchPhrase: 'Por mi hija ma-to'
  },
  {
    name : 'CR7',
    occupation : 'Futbolista',
    catchPhrase: 'Siiiuuuuuuuuuuuu'
  },
  {
    name : 'Broncano',
    occupation : 'Comediante',
    catchPhrase: 'Jibiri jibiri'
  }
];

Celebrity.insertMany(celebrities)
.then( () => {
  console.log('Everything ok');
  mongoose.connection.close();
})
.catch(err => {
  console.error('Error insert to mongo', err);
});