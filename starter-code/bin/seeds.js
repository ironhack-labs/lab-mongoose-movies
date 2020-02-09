const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose')

const celebrities = [
  {
    name: 'Celebrity 1',
    occupation: 'actor',
    catchPhrase: 'celebrity 1 catch phrase',
  },

  {
    name: 'Celebrity 2',
    occupation: 'singer',
    catchPhrase: 'celebrity 2 catch phrase',
  },
  
  {
    name: 'Celebrity 3',
    occupation: 'comedian',
    catchPhrase: 'celebrity 3 catch phrase',
  },
  
  
];



mongoose.connect(`mongodb://localhost/CELEBRITIES`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => Celebrity.collection.drop())
.catch(err => console.log(`error deleting data: ${err}`))
.then(() => Celebrity.insertMany(celebrities))
.catch(err => console.log(`error creating data: ${err}`))
.finally(() => mongoose.disconnect())








