const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then()
.catch();

const celebrities = [
  {
    name: 'Hello Kitty',
    occupation: 'actress',
    catchPhrase: 'So cute!!!'
  }, {
    name: 'Jax Teller',
    occupation: 'singer',
    catchPhrase: 'Come join the murder'
  }, {
    name: 'Miriam Carvalho',
    occupation: 'comedian',
    catchPhrase: 'Lets eat ramen'
  }
]

Celebrity.create(celebrities)
.then(celebrities => {
  console.log(`All celebrities saved in database: ${celebrities.length}`);
  mongoose.connection.close();
})
.catch(error => console.log('Error while saving celebrities in the database', error));
