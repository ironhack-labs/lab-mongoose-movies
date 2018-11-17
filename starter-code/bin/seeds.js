const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name : "Nombre1",
    occupation : "occupation1",
    catchPhrase : "catchPrase1"
  },
  {
    name : "Nombre2",
    occupation : "occupation2",
    catchPhrase : "catchPrase2"
  },
  {
    name : "Nombre3",
    occupation : "occupation3",
    catchPhrase : "catchPrase3"
  },
  {
    name : "Nombre4",
    occupation : "occupation4",
    catchPhrase : "catchPrase4"
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});