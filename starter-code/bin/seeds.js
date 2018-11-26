const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
  {
    "name": "Harry Potter",
    "occupation": "Actor",
    "catchPhrase": "hello everyone"
  },
  {
    "name": "James Cameron",
    "occupation": "Producto",
    "catchPhrase": "hey hey hey"
  },
  {
    "name": "Leo diCaprio",
    "occupation": "Actor",
    "catchPhrase": "bye bye!"
  }
]

Celebrity.create(celebrities)
.then(celebrities => {
  console.log(`${celebrities.length} celebrities created`);
  mongoose.connection.close();
})
.catch(err => {
  console.log('Something went wrong', err);
})
