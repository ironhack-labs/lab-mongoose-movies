const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Sacha Baron Cohen',
    occupation: 'Commedian',
    catchPhrase: 'Whawhaweewa'
  },
  {
    name: 'Elon Musk',
    occupation: 'Entrepreneur',
    catchPhrase: `Let's go to mars`
  },
  {
    name: 'Frank Sinatra',
    occupation: 'Interpreter',
    catchPhrase: 'Fly me to the moon'
  }
]

Celebrity
  .create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(error => console.log(error))