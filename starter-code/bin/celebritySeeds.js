const mongoose = require('mongoose');
const celebritySchema = require('../models/celebrity');

mongoose
  .connect('mongodb://localhost/myDataBase', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const celebrities = [
  {
    name: 'John Christopher Depp II',
    occupation: 'Actor',
    catchPhrase: "I think the thing to do is enjoy the ride while you're on it"
  },
  {
    name: 'Albert Einstein',
    occupation: 'Scientific',
    catchPhrase: 'Try not to become a man of success, but rather try to become a man of value'
  },
  {
    name: 'Dorothy Crowfoot Hodgkin',
    occupation: 'Biochemistry',
    catchPhrase:
      'the detailed geometry of the coenzyme molecule as a whole is fascinating in its complexity'
  }
];

celebritySchema
  .insertMany(celebrities)
  .then(() => {
    console.log('Import Sucessful');
    mongoose
      .disconnect()
      .then(() => {
        console.log(`Discconected to Mongo!`);
      })
      .catch(err => {
        console.error('Error disconnecting to mongo', err);
      });
  })
  .catch(err => console.log('An error has ocurred: ', err));
