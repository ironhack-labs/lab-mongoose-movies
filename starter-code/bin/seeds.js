const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbCelebrity = 'celebrity-proyect';
mongoose.connect(`mongodb://localhost/${dbCelebrity}`);

const celebrity = [
  {
    name:  'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'Hi, you'
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'I love sing'
  },
  {
    name:  'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: 'duck, duck, duck'
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) {throw(err)}
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close()
});