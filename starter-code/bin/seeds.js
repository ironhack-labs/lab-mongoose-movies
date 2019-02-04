const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrity-db';
mongoose.connect(`mongodb://localhost/${dbName}`);

celebritiesArray = [{
  name: "John Miller",
  occupation: "actor",
  catchPhrase: "just act"
},
{
  name: "Susie Denn",
  occupation: "singer",
  catchPhrase: "just sing"
},
{
  name: "Lola Sanchez",
  occupation: "comedian",
  catchPhrase: "be funny"
}]

Celebrity.insertMany(celebritiesArray, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebritiesArray.length} celebrities`)
  mongoose.connection.close()
});