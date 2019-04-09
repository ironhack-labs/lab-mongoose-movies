require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/starter-code';

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
  console.error('Error connecting to mongo', err)
  });