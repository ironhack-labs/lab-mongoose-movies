require('dotenv').config();
const Celebrity = require('../models/celebrity');

const mongoose = require('mongoose');
const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name: " ",
    occupation: " ",
    catchPhrase: " ",
  },
  {
    name: " ",
    occupation: " ",
    catchPhrase: " ",
  },
  {
    name: " ",
    occupation: " ",
    catchPhrase: " ",
  }
]

Celebrity.create(celebrities, (err, data) => {
  if (err) { throw(err) }
  
  console.log(`Created ${celebrities.length} celebrities`)
});
