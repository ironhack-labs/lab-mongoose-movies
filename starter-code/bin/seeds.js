const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Heitor',
    occupation: 'satan-lover',
    catchPhrase: 'stan is the only salvation'
  },
  {
    name: 'Arnold',
    occupation: 'hug-lover',
    catchPhrase: 'trankilo',

  },
  {
    name: 'Danilo',
    occupation: 'Musician',
    catchPhrase: 'dó-ré-mi-fá',
  },
  {
    name: 'Joc',
    occupation: 'tennis player',
    catchPhrase: '👍 👎',
  }
];
mongoose
  .connect('mongodb://localhost/Celebrities', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    celebrity.create(celebrities)
      .then(celebrity => console.log('seed plantada com sucesso!', celebrity))
      .catch(err => console.log(err));
  }
  )
  .catch(err => console.error('Error connecting to mongo', err));

