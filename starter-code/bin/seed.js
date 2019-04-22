const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'all_movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Antonio Banderas',
    occupation: 'Actor',
    catchPhrase: 'Everything changes as you get older - your mind, your body, the way you view the world.',
  },
  {
    name: 'Frida Kalo',
    occupation: 'Painter',
    catchPhrase: 'Feet, what do I need you for when I have wings to fly?',
  },
  {
    name: 'Daenarys Unburned',
    occupation: 'Queen',
    catchPhrase: 'Bend the knee.',
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw (err);
  }
  mongoose.connection.close();
});
